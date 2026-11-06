# Web maXmedia

Jednostránkový web PR agentury maXmedia: služby, tým, reference s case studies a kontakt.

- **Web:** https://www.maxmediapr.cz
- **Repozitář:** https://github.com/Krystufek23/maxmedia-website

Repozitář je veřejný – do souborů v něm nepatří nic interního (ceny, poznámky o klientech, ID účtů).

## Kontrakt příkazů

Spouští se ze složky `website/`.

| Krok | Příkaz |
|---|---|
| dev server | `npm run dev` |
| typecheck | `npm run typecheck` |
| build | `npm run build` |
| produkční server lokálně | `npx next start -p 3123` |
| lint | není – ESLint v projektu není nastavený (`next lint` zmizel s Next.js 16) |
| test | `npm run smoke -- <adresa>` – smoke test běžícího webu (`scripts/smoke.sh`), např. `http://localhost:3123` nebo `https://www.maxmediapr.cz` |

## Nasazení

Web běží na Vercelu (projekt `maxmedia-website`) napojeném na GitHub:

- push do `main` = produkce na www.maxmediapr.cz (`maxmediapr.cz` přesměrovává na `www`),
- push do jakékoli jiné větve = preview na `*.vercel.app`; preview jsou za Vercel přihlášením, z příkazové řádky je otevře Vercel MCP (`web_fetch_vercel_url`).

Postup každé změny:

1. Práce na větvi `dev`, nikdy přímo v `main`.
2. Lokálně `npm run typecheck` a `npm run build`, pak smoke test proti `next start`.
3. Push `dev` → počkat na preview build → smoke test proti preview.
4. Před nasazením si poznamenat ID aktuálního produkčního deploymentu (Vercel MCP `list_deployments`, target production) – na něj se případně vrací.
5. PR `dev` → `main`, merge až s Kryštofovým souhlasem.
6. Po produkčním buildu smoke test proti www.maxmediapr.cz a kontrola runtime chyb (Vercel MCP `get_runtime_errors`).
7. Když produkce selže: okamžitý rollback na poznamenaný deployment (Vercel MCP `request_rollback`) a řešit s Kryštofem.

Smoke test (`scripts/smoke.sh`) ověřuje: všechny stránky vrací 200 (`/`, `/cookies`, `/ochrana-osobnich-udaju`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`), neexistující stránka 404, klíčové texty sekcí, GA měřicí ID a JSON-LD na úvodní stránce, a že se načte každý obrázek z HTML. Mění-li se texty sekcí nebo loga, uprav seznam kontrolovaných textů ve skriptu ve stejném commitu. Preview za Vercel přihlášením skript z příkazové řádky neotevře – tam stejné kontroly přes přihlášený prohlížeč nebo Vercel MCP. SVG loga jdou mimo `/_next/image` (optimalizátor na ně vrací 400 záměrně), chyby z `vercel.live/feedback.js` patří Vercel toolbaru, ne webu.

## Zákazy

- **Necommitovat a nepushovat bez výslovného pokynu, do `main` jen přes PR.** Důvod: push do `main` je okamžitě produkce. Hlídá jen tohle pravidlo, v `.claude/settings.json` není žádný `deny`.
- **Rollback, promote a změny nastavení projektu na Vercelu jen se souhlasem.** Hlídá `ask` v globálním nastavení (`~/.claude/settings.json`).
- **Neměnit měření a souhlas s cookies bez úpravy stránky `/cookies`.** Důvod: GA4 běží s Consent Mode v2 a stránka cookies musí odpovídat tomu, co web skutečně ukládá.
- **Loga klientů jen z oficiálních zdrojů značky** (web klienta nebo podklady od něj), soubor v `public/images/logos/<KATEGORIE>/`. Při výměně loga nový název souboru – stejný název drží starou verzi v cache optimalizátoru.
- **Podklady mimo `website/`** (`../opravy/`, `../assets/`, `../pptx_extracted/`, prezentace a texty v kořeni) jsou podklady od klienta a týmu: jen číst, neměnit, neukládat do nich vlastní výstupy.
