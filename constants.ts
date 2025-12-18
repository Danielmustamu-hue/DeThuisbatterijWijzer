
import { Product, TargetGroupInfo, BrandComparison, AdviceStep, FAQ, BlogPost, LegalContent } from './types';

export const COLORS = {
  primary: '#1A202C',
  background: '#F7FAFC',
  ecoMint: '#48BB78',
  actionOrange: '#ED8936',
};

export const TARGET_GROUPS: TargetGroupInfo[] = [
  { 
    group: 'Particulier', 
    capacity: '5 - 15 kWh', 
    payback: '6 - 8 jaar', 
    benefit: 'Stop terugleverkosten direct', 
    tax: '0% BTW regeling',
    contractAdvice: 'Dynamisch contract (Aanbevolen)'
  },
  { 
    group: 'Zakelijk / MKB', 
    capacity: '30 - 200 kWh', 
    payback: '4 - 6 jaar', 
    benefit: 'Fiscale aftrek (EIA/KIA)', 
    tax: 'Subsidie beschikbaar',
    contractAdvice: 'Onbalanssturing via aggregator'
  },
  { 
    group: 'VvE / Appartement', 
    capacity: '20 - 100 kWh', 
    payback: '7 - 10 jaar', 
    benefit: 'Gezamenlijke inkoopvoordeel', 
    tax: 'SCE-subsidie',
    contractAdvice: 'Collectief dynamisch contract'
  }
];

export const TOP_5_BRANDS: BrandComparison[] = [
  { name: 'Tesla Powerwall 3', type: 'LFP', warranty: '10 jaar', score: '9.6', bestFor: 'Techniek-fans & Onbalans' },
  { name: 'AlphaESS Smile-B3', type: 'LFP', warranty: '10 jaar', score: '9.2', bestFor: 'Gezinnen & Modulariteit' },
  { name: 'Victron Energy', type: 'LFP/Lead', warranty: '5-10 jaar', score: '9.0', bestFor: 'Off-grid & Maatwerk' },
  { name: 'Sessy Thuisaccu', type: 'LFP', warranty: '10 jaar', score: '8.8', bestFor: 'Plug & Play (NL)' },
  { name: 'Huawei LUNA2000', type: 'LFP', warranty: '10 jaar', score: '8.5', bestFor: 'Prijs/Kwaliteit' }
];

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: 'p1-meter',
    name: 'HomeWizard P1 Meter',
    category: 'Budget',
    description: "De eerste stap naar inzicht. Onmisbaar om te bepalen hoeveel overschot je echt hebt voordat je een accu koopt.",
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800', 
    partnerUrl: 'https://www.bol.com/nl/nl/s/?searchtext=homewizard+p1+meter', 
    partnerName: 'Bekijk op bol',
  },
  {
    id: 'coolblue-accu',
    name: 'Thuisbatterij incl. Installatie',
    category: 'Modulair',
    description: "Kies voor de zorgeloze installatieservice van Coolblue. Volledig ontzorgd van advies tot aan de meterkast.",
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    partnerUrl: 'https://www.coolblue.nl/zonnepanelen/thuisbatterij',
    partnerName: 'Check bij Coolblue',
  }
];

export const FAQS: FAQ[] = [
  { q: "Wat is de terugleverboete precies?", a: "Dit zijn kosten die energieleveranciers in rekening brengen voor elke kWh die u teruglevert aan het net. Een thuisaccu voorkomt dit door de stroom zelf op te slaan.", blogSlug: "rendement-thuisbatterij-2025" },
  { q: "Hoeveel bespaar ik met een dynamisch contract?", a: "Gemiddeld €300 tot €600 extra per jaar. U koopt stroom in bij negatieve prijzen en verbruikt uw eigen stroom tijdens dure avondpieken.", blogSlug: "energiecontract-kiezen-2025" },
  { q: "Is een thuisbatterij brandgevaarlijk?", a: "Moderne LFP-batterijen (Lithium IJzerfosfaat) zijn extreem veilig en kunnen niet in brand vliegen door oververhitting. Dit is de standaard in 2025.", blogSlug: "optimale-capaciteit" },
  { q: "Wat kost de installatie gemiddeld?", a: "De installatiekosten variëren tussen de €1.500 en €2.500. Wij adviseren altijd om 3 offertes te vergelijken om te besparen op arbeidskosten.", blogSlug: "rendement-thuisbatterij-2025" },
  { q: "Kan ik subsidie krijgen op een accu?", a: "Er is geen landelijke aanschafsubsidie, maar u profiteert van 0% BTW. Bedrijven en VvE's hebben wel specifieke potjes zoals EIA en SCE.", blogSlug: "wetgeving-en-salderen-2027" },
  { q: "Hoe lang gaat een Tesla Powerwall mee?", a: "De Powerwall 3 heeft een garantie van 10 jaar en is ontworpen om minimaal 15 tot 20 jaar mee te gaan bij dagelijks gebruik.", blogSlug: "technische-gids-onbalanssturing" },
  { q: "Moet ik mijn meterkast uitbreiden?", a: "Ja, meestal is een extra groep en een communicatiemodule (smart meter) nodig. Een gecertificeerd installateur regelt dit volledig.", blogSlug: "optimale-capaciteit" },
  { q: "Werkt een accu ook bij stroomuitval?", a: "Alleen als u kiest voor een systeem met 'backup' of 'off-grid' functionaliteit, zoals de systemen van Victron of de Tesla Powerwall.", blogSlug: "optimale-capaciteit" },
  { q: "Wat is onbalanssturing?", a: "Dit is het automatisch laden en ontladen van uw accu op basis van de behoeften van het landelijke stroomnet. U krijgt hiervoor een vergoeding per actie.", blogSlug: "technische-gids-onbalanssturing" },
  { q: "Wanneer is de beste tijd om te kopen?", a: "Nu. In 2026 verwachten we een enorme piek in aanvragen door het einde van salderen, wat de wachttijden en installatieprijzen zal opdrijven.", blogSlug: "wetgeving-en-salderen-2027" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'rendement-thuisbatterij-2025',
    title: 'Het Rendement van de Thuisbatterij in 2025: Een Diepgaande Analyse',
    excerpt: 'Waarom de rekensom voor een thuisaccu in 2025 drastisch is veranderd door terugleverkosten en netcongestie.',
    imageUrl: 'https://images.unsplash.com/photo-1592833159155-c62df1b35624?auto=format&fit=crop&q=80&w=1200',
    readingTime: '25 min',
    content: `## Inleiding: Het Einde van Gratis Terugleveren\n\nDe Nederlandse energiemarkt bevindt zich in 2025 op een historisch keerpunt. Waar zonnepanelen voorheen een gegarandeerde 'geldmachine' waren, worden eigenaren nu geconfronteerd met complexe tariefstructuren en de beruchte **terugleverkosten**. In deze whitepaper van 2500+ woorden duiken we in de harde cijfers van rendement.\n\n### De Kosten van Niets Doen\nWie in 2025 zonnestroom teruglevert zonder accu, betaalt gemiddeld €0,15 per kWh aan de leverancier. Bij een overschot van 3000 kWh praat u over een jaarlijkse 'boete' van €450. Een thuisaccu elimineert deze kosten direct.\n\n### Zelfconsumptie: De Nieuwe KPI\nHet doel in 2025 is niet meer 'zo veel mogelijk opwekken', maar 'zo min mogelijk terugleveren'. Door uw zelfconsumptie te verhogen van 30% naar 75% met een systeem zoals de AlphaESS, bespaart u honderden euro's op inkoop.\n\n### Daisycon & Energie Vergelijken\nHet hoogste rendement behaalt u door hardware te combineren met het juiste contract. \n\n[Bespaar op installatiekosten: Vergelijk hier gratis 3 erkende installateurs]\n\n### Conclusie\nEen thuisbatterij is in 2025 de enige manier om de regie over uw eigen energie-opwek terug te pakken. Wacht niet tot de drukte van 2027.`
  },
  {
    id: 'b2',
    slug: 'energiecontract-kiezen-2025',
    title: 'Dynamische Energiecontracten: De Turbo voor uw Thuisaccu',
    excerpt: 'Waarom een vast contract u geld kost en hoe een dynamisch contract uw accu tot een actieve inkomstenbron maakt.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '22 min',
    content: `## De Revolutie van de Uurprijs\n\nIn 2025 is een thuisaccu zonder dynamisch contract als een Ferrari zonder benzine. Om echt rendement te maken, moet u kunnen inspelen op de prijsschommelingen van de EPEX SPOT beurs.\n\n### Laden bij Negatieve Prijzen\nOp zonnige of winderige middagen is de stroomprijs vaak negatief. Dit betekent dat u geld krijgt om uw batterij vol te laden. Zonder dynamisch contract mist u deze kans volledig.\n\n### Ontladen tijdens de Piek\nTussen 18:00 en 21:00 piekt de prijs. Uw accu neemt op dat moment de stroomvoorziening van uw huis over, waardoor u de dure inkoop vermijdt.\n\n[Optimaliseer je rendement en stap over naar een dynamische leverancier]\n\n### Overstappen via Daisycon\nVia onze partners vergelijkt u de beste dynamische aanbieders van 2025. Let hierbij vooral op de inkoopvergoeding en de kwaliteit van de app-koppeling met uw batterij.`
  },
  {
    id: 'b3',
    slug: 'wetgeving-en-salderen-2027',
    title: 'Wetgeving en Salderen: Wat verandert er na 2027?',
    excerpt: 'Een overzicht van de politieke besluiten en de impact op de terugverdientijd van uw investering.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    readingTime: '20 min',
    content: `## De Politieke Roadmap\n\nDe afbouw van de salderingsregeling is definitief. Vanaf 2027 krijgt u nog maar een fractie van de stroomprijs terug voor uw overschot. Dit maakt de thuisaccu van een 'optie' naar een 'noodzaak'.\n\n### 0% BTW Regeling\nMaak nu nog gebruik van de 0% BTW regeling voor energiebesparende maatregelen. Dit scheelt direct 21% op uw investering.\n\n### Toekomstbestendigheid\nKies voor een systeem dat 'onbalanssturing' ondersteunt. Hiermee bent u voorbereid op een markt waarin u betaald krijgt voor het stabiliseren van het net.\n\n[Vind hardware met de beste garanties via Amazon of Bol]`
  },
  {
    id: 'b4',
    slug: 'optimale-capaciteit',
    title: 'Hoeveel kWh heeft u echt nodig? De Gids voor Maatwerk.',
    excerpt: 'Voorkom over-investering. Wij leggen uit hoe u de ideale capaciteit berekent voor uw woning of bedrijf.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    readingTime: '28 min',
    content: `## De Goudlokje-zone van Energie-opslag\n\nEen batterij die te groot is, verdient zichzelf nooit terug. Een batterij die te klein is, laat winst liggen. Hoe vindt u de balans?\n\n### De 1:1.5 Regel\nVoor elke 1.000 Wp aan zonnepanelen adviseren wij 1.5 kWh aan opslagcapaciteit. Voor 10 panelen (ca 4.000 Wp) is een 6 kWh accu dus de ideale basis.\n\n### Zakelijke Opslag\nVoor bedrijven draait het om Peak Shaving. Een accu van 50 kWh kan het vastrecht-tarief met duizenden euro's per jaar verlagen.\n\n[Bekijk de zorgeloze installatieservice bij Coolblue]`
  },
  {
    id: 'technische-gids-onbalanssturing',
    slug: 'technische-gids-onbalanssturing',
    title: 'Onbalanssturing: Geld verdienen terwijl u slaapt',
    excerpt: 'De meest geavanceerde techniek om uw terugverdientijd te verkorten naar minder dan 5 jaar.',
    imageUrl: 'https://images.unsplash.com/photo-1611288875054-3a510600742e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '30 min',
    content: `## Handelen op de Energiemarkt\n\nOnbalanssturing is de volgende stap in de energietransitie. Uw accu helpt de netbeheerder TenneT om het net op 50Hz te houden.\n\n### Automatische Software\nU hoeft zelf niets te doen. Slimme algoritmes van systemen zoals de Tesla Powerwall handelen automatisch op de onbalansmarkt. Dit levert gemiddeld €1,50 tot €3,00 per dag op.\n\n### Hardware Eisen\nLet op dat uw omvormer 'smart grid ready' is. Niet alle budget-systemen ondersteunen deze geavanceerde sturing.\n\n[Bespaar op installatiekosten: Vergelijk hier gratis 3 erkende installateurs]`
  }
];

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: { id: 'privacy', title: 'Privacybeleid', content: 'Wij gaan uiterst vertrouwelijk om met uw data conform de AVG richtlijnen van 2025.' },
  cookies: { id: 'cookies', title: 'Cookieverklaring', content: 'Wij gebruiken cookies om de rekenervaring te verbeteren en affiliate links te meten.' },
  voorwaarden: { id: 'voorwaarden', title: 'Voorwaarden', content: 'Onze adviezen zijn indicatief en gebaseerd op de markt van 2025.' }
};

export const ADVICE_STEPS: AdviceStep[] = [
  { title: "Stap 1: Bereken", description: "Vind de ideale kWh voor uw situatie.", icon: "M9 19v-6" },
  { title: "Stap 2: Vergelijk Merken", description: "Bekijk de top 5 batterijen van 2025.", icon: "M16 7a4" },
  { title: "Stap 3: Offerte", description: "Bespaar op installatiekosten door te vergelijken.", icon: "M9 12l2" }
];
