# maXmedia Website - Dokumentace

## Základní informace

| Položka | Hodnota |
|---------|---------|
| **Název projektu** | maXmedia PR Agency Website |
| **Umístění** | `/Users/krystof/AI/maxmedia web/website/` |
| **GitHub** | https://github.com/Krystufek23/maxmedia-website |
| **Lokální server** | http://localhost:3001 (nebo 3000) |
| **Typ webu** | Single-page website |

---

## Technologie

| Technologie | Verze |
|-------------|-------|
| Next.js | 15.5.12 |
| React | 19 |
| Tailwind CSS | v4 |
| TypeScript | 5.x |

### Spuštění projektu

```bash
cd "/Users/krystof/AI/maxmedia web/website"
npm install
npm run dev
```

---

## Struktura projektu

```
website/
├── app/
│   ├── globals.css          # Globální styly, barevné schéma
│   ├── layout.tsx            # Root layout s fonty
│   ├── page.tsx              # Hlavní stránka (všechny sekce)
│   ├── cookies/page.tsx      # Stránka cookies
│   └── ochrana-osobnich-udaju/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx    # Hlavní navigace
│   │   ├── Footer.tsx        # Patička
│   │   └── CookieConsent.tsx # Cookie banner
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # Úvodní sekce s CTA
│   │   ├── Statistics.tsx    # Statistiky (30 let, 10000+ výstupů...)
│   │   ├── About.tsx         # O nás
│   │   ├── AISection.tsx     # PR driven by AI
│   │   ├── Contacts.tsx      # "Kontakty nejsou databáze" + loga médií
│   │   ├── Team.tsx          # Tým (6 členů)
│   │   ├── Services.tsx      # Služby (hover efekt)
│   │   ├── Process.tsx       # Jak pracujeme (5 kroků)
│   │   ├── References.tsx    # Reference + loga klientů
│   │   └── Contact.tsx       # Kontaktní údaje
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── CountUp.tsx       # Animované počítadlo
│       ├── Section.tsx
│       └── SectionTitle.tsx
│
└── public/
    └── images/
        ├── logo.png          # Logo maXmedia
        ├── media-logos.png   # Loga médií (Forbes, Blesk, DVTV...)
        ├── team/             # Fotky týmu
        ├── logos/            # Loga klientů podle kategorií
        │   ├── SPORT/
        │   ├── PET-FMCG/
        │   ├── HOBBY-OUTDOOR/
        │   ├── MOTO-ELEKTRO/
        │   ├── AKCE/
        │   ├── E-SHOP/
        │   └── REALITY/
        └── backgrounds/
```

---

## Barevné schéma

Definováno v `app/globals.css`:

```css
--color-primary: #00AFDC;        /* Hlavní modrá */
--color-primary-dark: #008FB8;
--color-primary-light: #33BFEF;

--color-secondary: #0A1628;      /* Tmavě modrá (navy) */
--color-secondary-light: #122A45;

--color-dark: #061018;
--color-gray-900: #0A1628;
/* ... další odstíny šedé s modrým nádechem */
```

---

## Sekce webu

### 1. Hero
- Hlavní nadpis + podnadpis
- CTA tlačítka
- Tmavé pozadí s gradientem

### 2. Statistics
- 4 statistiky s animovaným count-up efektem
- 30 let | 10 000+ výstupů | 60+ klientů | 694 káv

### 3. O nás (About)
- Text o firmě
- Světlé pozadí

### 4. PR driven by AI (AISection)
- Orbitující AI nástroje (ChatGPT, Midjourney, atd.)
- Tmavé pozadí

### 5. Kontakty nejsou databáze (Contacts)
- Nadpis + text
- **Obrázek s logy médií** (Forbes, Vogue, Blesk, DVTV, Deník...)
- Zdůrazněný text: "Dokážeme vás dostat do jakéhokoliv média"

### 6. Tým (Team)
- Core tým (3 osoby) + Specialisté (3 osoby)
- Fotky s **grayscale efektem** - barva při hover
- Zmenšené karty (aspect-[4/5])
- Citáty při hover

### 7. Služby (Services)
- 5 služeb: PR, Social Media, Influencer, Obsah, Eventy
- **Hover efekt** - při najetí se změní pravý panel
- Interaktivní výběr

### 8. Jak pracujeme (Process)
- 5-krokový proces
- Vizuální timeline

### 9. Reference (References)
- Case Studies (4 karty s metrikami)
- **Naše reference** - loga klientů
- Filtr podle kategorií (Sport, Pet & FMCG, Hobby & Outdoor, atd.)
- Čisté bílé pozadí, bez šedých bloků

### 10. Kontakt (Contact)
- Kontaktní údaje (Kryštof Šabacký)
- Adresa firmy
- **BEZ kontaktního formuláře**
- LinkedIn odkaz

---

## Provedené úpravy (chronologicky)

### Session 1 - Základní opravy

1. **Logo v navigaci**
   - Přidán CSS filter `brightness-0 invert` pro viditelnost na tmavém pozadí
   - Soubor: `components/layout/Navigation.tsx`

2. **Barvy pozadí**
   - Změna z fialové na navy blue (#0A1628)
   - Soubor: `app/globals.css`

3. **Loga klientů**
   - Opraveny cesty (přejmenovány složky: `HOBBY OUTDOOR` → `HOBBY-OUTDOOR`, atd.)
   - Přidány skutečné Image komponenty místo placeholderů

4. **Služby - hover efekt**
   - Změněno z `onClick` na `onMouseEnter`
   - Soubor: `components/sections/Services.tsx`

5. **Fotky týmu**
   - Zmenšeny (aspect-[4/5] místo square)
   - Přidán grayscale filter s barevným hover efektem
   - Soubor: `components/sections/Team.tsx`

6. **Case studies struktura**
   - Přidán prop `hasCaseStudy` pro budoucí rozkliknutí

7. **Historické reference**
   - Sekce kompletně odstraněna

8. **Kontaktní formulář**
   - Odstraněn, zůstaly pouze kontaktní údaje
   - Soubor: `components/sections/Contact.tsx`

### Session 2 - Média a reference

9. **Sekce "Kontakty nejsou databáze"**
   - Odstraněna kolečka (Média, PR, Novinky, Vztahy, Kontakty)
   - Přidán obrázek s logy médií (`/images/media-logos.png`)
   - Přidán text: "Dokážeme vás dostat do jakéhokoliv média"
   - Soubor: `components/sections/Contacts.tsx`

10. **Sekce "Naše reference"**
    - Přejmenováno z "Naši klienti"
    - Odstraněno šedé pozadí kolem log
    - Odstraněny šipečky (case study badge)
    - Čistá loga na bílém pozadí
    - Soubor: `components/sections/References.tsx`

---

## Přidání nových log klientů

### Ideální formát

| Formát | Popis |
|--------|-------|
| **PNG** | S průhledným pozadím, min. 400×200 px |
| **SVG** | Vektorový, ideální volba |

### Postup přidání

1. Ulož logo do příslušné složky:
   ```
   public/images/logos/{KATEGORIE}/nazev-loga.png
   ```

2. Přidej záznam do `components/sections/References.tsx`:
   ```typescript
   const clientLogos: ClientLogo[] = [
     // ... existující loga
     {
       name: "Název klienta",
       category: "sport", // nebo: pet-fmcg, hobby-outdoor, moto-elektro, akce, e-shop, reality
       logo: "/images/logos/SPORT/nazev-loga.png"
     },
   ];
   ```

### Kategorie

- `sport` - Sport
- `pet-fmcg` - Pet & FMCG
- `hobby-outdoor` - Hobby & Outdoor
- `moto-elektro` - Moto & Elektro
- `akce` - Akce/Eventy
- `e-shop` - E-shop
- `reality` - Reality

---

## Tým - úprava členů

Soubor: `components/sections/Team.tsx`

```typescript
const coreTeam: TeamMember[] = [
  {
    name: "Jméno Příjmení",
    position: "Pozice",
    quote: "Citát (volitelné)",
    image: "/images/team/jmeno-prijmeni.jpeg",
    isCore: true,
  },
];

const specialists: TeamMember[] = [
  // ... podobně
];
```

### Fotky týmu

- Umístění: `public/images/team/`
- Doporučené rozměry: min. 400×500 px (portrét)
- Formát: JPEG, PNG, WebP

---

## Deployment

### Vercel (doporučeno)

1. Propoj GitHub repo s Vercel
2. Automatický deploy při push na `main`

### Manuální deploy

```bash
npm run build
npm run start
```

---

## Git příkazy

```bash
# Stav
git status

# Přidat změny
git add .

# Commit
git commit -m "Popis změn"

# Push
git push origin main
```

---

## Kontakt na vývojáře

- **Email**: krystufek23@outlook.com
- **GitHub**: https://github.com/Krystufek23

---

## Poznámky

- Web je **single-page** - všechny sekce na jedné stránce
- Navigace používá anchor linky (#uvod, #o-nas, #tym, #sluzby, #reference, #kontakt)
- Responzivní design (mobile-first)
- Fonty: Space Grotesk (nadpisy), DM Sans (text)

---

*Poslední aktualizace: 2026-03-07*
