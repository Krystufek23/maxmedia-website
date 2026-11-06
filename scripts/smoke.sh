#!/bin/bash
# Smoke test of a running site: routes, 404, key texts, GA + JSON-LD and every image.
# Usage: npm run smoke -- <base-url>   e.g. http://localhost:3123 or https://www.maxmediapr.cz
# Protected Vercel previews need a session: run the same checks in a logged-in browser or via Vercel MCP.
BASE="${1%/}"; shift
CURL=(curl -s -m 30 "$@")
fail=0
check() { if [ "$1" = "$2" ]; then echo "OK   $3"; else echo "FAIL $3 (got $1, want $2)"; fail=1; fi; }

for p in / /cookies /ochrana-osobnich-udaju /robots.txt /sitemap.xml /llms.txt; do
  code=$("${CURL[@]}" -o /dev/null -w "%{http_code}" "$BASE$p"); check "$code" 200 "GET $p"
done
code=$("${CURL[@]}" -o /dev/null -w "%{http_code}" "$BASE/neexistuje-xyz"); check "$code" 404 "GET 404 page"

html=$("${CURL[@]}" "$BASE/")
for s in "Moderní PR bez starých návyků" "Čísla, která" "O maXmedia" "PR driven by" "Kontakty nejsou databáze" "Náš tým" "Co umíme" "Jak pracujeme" "LEVELSPORTKONCEPT" "Kontaktujte nás" "G-QGYSVW8K6S" "application/ld+json" "Sport nás vykoval" 'alt="Ondrášovka"' 'alt="Palírna Radlík"' 'alt="Jackery"'; do
  if grep -q "$s" <<<"$html"; then echo "OK   text: $s"; else echo "FAIL text: $s"; fail=1; fi
done

# Every image referenced from the homepage (plain src, srcset and _next/image) must load
imgs=$(grep -oE '(src|srcSet|srcset)="[^"]+"' <<<"$html" | sed -E 's/^[a-zA-Z]+="//; s/"$//' | tr ',' '\n' | awk '{print $1}' | sed 's/&amp;/\&/g' | grep -E '^/(images|_next/image)' | sort -u)
n=0; bad=0
while read -r u; do
  [ -z "$u" ] && continue; n=$((n+1))
  code=$("${CURL[@]}" -o /dev/null -w "%{http_code}" "$BASE$u")
  [ "$code" != 200 ] && { echo "FAIL img $code $u"; bad=1; }
done <<<"$imgs"
[ $bad = 0 ] && echo "OK   $n image URLs load" || fail=1

# Case study images are rendered client-side (modal), check them through the optimizer directly
for f in case-studies/stihl-hero.png case-studies/lsk-8.png case-studies/brit-metrics.png case-studies/skyr-content.png team/krystof.png ai-hero.jpg hero-max.png; do
  code=$("${CURL[@]}" -o /dev/null -w "%{http_code}" "$BASE/_next/image?url=%2Fimages%2F$(sed 's#/#%2F#g' <<<"$f")&w=1080&q=75")
  check "$code" 200 "optimized /images/$f"
done

[ $fail = 0 ] && echo "=== ALL PASSED" || { echo "=== FAILURES"; exit 1; }
