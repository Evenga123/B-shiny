# B SHINY demo

Automobilių poliravimo ir cheminio valymo svetainės demo versija.

[Atidaryti demo kaip puslapį](https://evenga123.github.io/B-shiny/)

[Importuoti į Vercel](https://vercel.com/new?repository-url=https%3A%2F%2Fgithub.com%2FEvenga123%2FB-shiny&project-name=b-shiny)

## Failai

- `index.html` - puslapio turinys ir sekcijos.
- `styles.css` - visas vizualinis stilius, spalvos ir prisitaikymas mobiliesiems.
- `script.js` - mobilus meniu ir automatiniai metai poraštėje.
- `vercel.json` - Vercel statinio puslapio konfigūracija.
- `vercel.html` - paprastas puslapis su Vercel importo nuoroda.

## Greita peržiūra

Pagrindinė demo nuoroda:

https://evenga123.github.io/B-shiny/

Jeigu GitHub Pages ką tik įjungtas, pirmas atsidarymas gali pradėti veikti po kelių minučių.

## Paleidimas per Vercel

Svarbu: naudok importą iš esamo repo, o ne `Create Repository` / `Clone` eigą. Klaida, kad vardas jau egzistuoja, atsiranda tada, kai Vercel bando sukurti naują GitHub repo vardu `b-shiny`, nors toks repo jau yra.

Greičiausias kelias: spausk aukščiau esančią `Importuoti į Vercel` nuorodą.

Rankiniu būdu:

1. Atsidaryk https://vercel.com/new.
2. Rinkis `Import Git Repository`.
3. Pasirink GitHub repo `Evenga123/B-shiny`.
4. Framework Preset palik `Other`.
5. Build Command palik tuščią.
6. Output Directory palik tuščią arba `.`.
7. Spausk `Deploy`.

Po deploy Vercel sugeneruos viešą adresą, pvz. `https://b-shiny.vercel.app` arba panašų projekto URL.

## Redagavimas

Tekstus, kainas, telefono numerį, el. paštą ir nuotraukas paprasčiausia keisti `index.html` faile. Spalvas ir bendrą išvaizdą keisk `styles.css` viršuje esančiuose `:root` kintamuosiuose.
