
import { Product, TargetGroupInfo, BrandComparison, AdviceStep, FAQ, BlogPost, LegalContent, TechnicalSpec } from './types';

export const COLORS = {
  primary: '#1A202C',
  background: '#F7FAFC',
  ecoMint: '#48BB78',
  actionOrange: '#ED8936',
};

export const TECHNICAL_SPECS: TechnicalSpec[] = [
  { label: 'Basis Capaciteit', tesla: '13.5 kWh', alpha: '5.0 kWh+', victron: 'Variabel', sessy: '5.0 kWh', huawei: '5.0 kWh+' },
  { label: 'Batterij Chemie', tesla: 'LFP (Cobalt-vrij)', alpha: 'LFP (LiFePO4)', victron: 'LFP / Lead', sessy: 'LFP', huawei: 'LFP' },
  { label: 'Type Koppeling', tesla: 'DC (Hybride)', alpha: 'AC of DC', victron: 'AC of DC', sessy: 'AC (Retrofit)', huawei: 'DC (HV)' },
  { label: 'Ontladingsdiepte', tesla: '100%', alpha: '95%', victron: '95-100%', sessy: '95%', huawei: '100%' },
  { label: 'Laadcycli', tesla: '6.000+', alpha: '8.000+', victron: '6.000-10.000', sessy: '6.000+', huawei: '6.000+' },
  { label: 'Garantie (Jaren)', tesla: '10 jaar', alpha: '10 jaar', victron: '5 - 10 jaar', sessy: '10 jaar', huawei: '10 jaar' },
  { label: 'Onbalans-klaar', tesla: 'Ja (Native)', alpha: 'Via EMS', victron: 'Volledig', sessy: 'Ja (P1)', huawei: 'Via Dongle' },
];

export const TOP_5_BRANDS: BrandComparison[] = [
  { name: 'Tesla Powerwall 3', type: 'LFP', warranty: '10 jaar', score: '9.6', bestFor: 'Techniek-fans & Onbalans' },
  { name: 'AlphaESS Smile-B3', type: 'LFP', warranty: '10 jaar', score: '9.2', bestFor: 'Gezinnen & Modulariteit' },
  { name: 'Victron Energy', type: 'LFP/Lead', warranty: '5-10 jaar', score: '9.0', bestFor: 'Off-grid & Maatwerk' },
  { name: 'Sessy Thuisaccu', type: 'LFP', warranty: '10 jaar', score: '8.8', bestFor: 'Plug & Play (NL)' },
  { name: 'Huawei LUNA2000', type: 'LFP', warranty: '10 jaar', score: '8.5', bestFor: 'Prijs/Kwaliteit' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'g1',
    slug: 'vergelijking-thuisbatterij-2025',
    title: 'De Ultieme Thuisbatterij Vergelijking 2025: Technisch Dossier',
    excerpt: 'Een diepgaande analyse van de marktarchitectuur in 2025. Vergelijk Tesla, AlphaESS, Victron, Sessy en Huawei op C-rates, EMS-intelligentie en celchemie.',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
    readingTime: '65 min',
    content: `## De Status Quo van Energie-opslag in Nederland (2025)\n\nIn 2025 is de Nederlandse energiemarkt definitief getransformeerd. Waar we voorheen spraken over de thuisbatterij als een "optie", is het nu de enige verdedigingslinie tegen de exploderende terugleverkosten van grote leveranciers. Dit dossier analyseert de systemen die deze transitie mogelijk maken.\n\n### Het Cruciale Onderscheid: AC versus DC Koppeling\n\nBij het kiezen van een systeem is de architectuur de eerste keuze. Dit bepaalt niet alleen de installatiekosten, maar ook het uiteindelijke rendement over een periode van 15 jaar.\n\n* **DC-Gekoppelde Systemen (Hybride):** Hierbij wordt de batterij direct op de zonnepaneel-omvormer aangesloten. Dit is de meest efficiënte route omdat de stroom van de panelen niet eerst naar AC hoeft te worden omgezet om de batterij te laden. Merken als **Tesla (Powerwall 3)** en **Huawei** domineren dit segment. Het is ideaal voor nieuwe installaties of wanneer u uw oude omvormer vervangt.\n* **AC-Gekoppelde Systemen (Retrofit):** Deze batterij heeft een eigen omvormer en werkt onafhankelijk van uw zonnepanelen. De stroom gaat van DC (zon) -> AC (huis) -> DC (batterij). Dit levert ongeveer 2-4% extra rendementsverlies op, maar is vaak de enige optie voor bestaande woningen. **Sessy** en **AlphaESS** blinken hierin uit.\n\n### Diepgaande Merk-Analyse en Technische Specificaties\n\n[ComparisonTable]\n\n### 1. Tesla Powerwall 3: De Technologische Benchmark\n\nTesla heeft met de Powerwall 3 de lat extreem hoog gelegd. De geïntegreerde omvormer kan tot 20 kWp aan zonnepanelen aansturen, wat ongekend is in de consumentenmarkt. De architectuur is volledig gericht op schaalbaarheid en eenvoud.\n\n**Technisch Dossier:**\nDe Powerwall 3 maakt gebruik van een gepatenteerd vloeistofgekoeld thermisch beheersysteem. Dit is cruciaal in het Nederlandse klimaat, waar batterijen vaak in garages of bijgebouwen hangen die in de winter koud en in de zomer heet worden. Door de cellen constant op een optimale temperatuur te houden, garandeert Tesla een levensduur die de meeste andere merken overstijgt. De software ondersteunt native "Onbalanssturing" via Tesla Electric, wat betekent dat de batterij automatisch handelt op de TenneT-biedladder zonder dat u extra hardware nodig heeft.\n\n### 2. Victron Energy: Het Ecosysteem voor de Professional\n\nVictron is geen "batterij uit een doos", maar een modulair ecosysteem dat volledige vrijheid biedt. Voor de gebruiker die maximale controle wil en niet bang is voor een complexere installatie, is er geen alternatief.\n\n**Technisch Dossier:**\nMet de MultiPlus-II omvormers kunt u letterlijk elk type batterij (van LFP tot zoutwater of zelfs lood-zuur) koppelen. Victron blinkt uit in "Peak Shaving": het opvangen van korte, hoge stroompieken (zoals een inductiekookplaat die op vol vermogen gaat of een zware warmtepomp) zodat uw hoofdzekering niet doorslaat. Dit bespaart u de kosten van een verzwaring van uw netaansluiting, wat in Nederland al snel €1200 per jaar aan vastrecht scheelt.\n\n### 3. AlphaESS: De Modulaire Alles-in-één\n\nAlphaESS biedt systemen die meegroeien met uw gezin. U kunt beginnen met een 5 kWh module en dit later eenvoudig uitbreiden naar 20 of zelfs 30 kWh. Hun Energie Management Systeem (EMS) is een van de meest robuuste op de markt en biedt uitgebreide mogelijkheden voor "Time of Use" (ToU) programmering.\n\n### De Toekomst van Celchemie: LFP is de Nieuwe Standaard\n\nIn 2025 adviseren wij uitsluitend nog Lithium-IJzerfosfaat (LFP) batterijen. In tegenstelling tot de oudere NMC-cellen (Nikkel-Mangaan-Kobalt) zijn LFP-cellen cobaltvrij, wat ze ethischer maakt, maar ze zijn vooral veel veiliger. LFP-cellen vatten niet spontaan vlam bij beschadiging (geen thermal runaway) en gaan tot wel 3x langer mee (tot 10.000 laadcycli versus 3.000 bij NMC).\n\n### Conclusie: De Strategie voor 2025\n\nKies niet op prijs alleen. Een batterij van €5000 die geen onbalans kan sturen, verdient zichzelf in 12 jaar terug. Een batterij van €8000 die dat wél kan, doet dat in 5 jaar. Intelligentie is de nieuwe valuta in energieopslag. Zorg dat uw systeem 'Future Proof' is door te letten op de API-toegankelijkheid en de C-rate (laadsnelheid).`
  },
  {
    id: 'g2',
    slug: 'kosten-rendement-formule-2025',
    title: 'De Rendements-Matrix: Financiële Analyse van Energie-opslag',
    excerpt: 'Vergeet de oude rekensommen. In 2025 draait rendement om het vermijden van boetes, het vangen van negatieve prijzen en fiscale optimalisatie.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '60 min',
    content: `## De Financiële Architectuur van de Thuisbatterij\n\nDe vraag "Is een thuisbatterij rendabel?" is in 2025 vervangen door "Hoe configureer ik mijn systeem voor een maximale ROI?". In een wereld zonder volledige saldering en mét terugleverkosten, is de batterij een essentieel financieel instrument geworden. We analyseren de drie pijlers van de moderne energierekening.\n\n### Pijler 1: De Teruglever-heffing (De Directe Besparing)\n\nIn 2024 en 2025 voerden vrijwel alle grote energieleveranciers (Eneco, Vattenfall, Essent, Budget Energie) terugleverkosten in. Dit zijn kosten die u betaalt voor elke kWh die u het net op stuurt wanneer er een overschot is. \n\n**Rekenvoorbeeld:**\nEen huishouden levert 4000 kWh per jaar terug. De gemiddelde heffing is €0,15 per kWh. Dat is een directe kostenpost van €600 per jaar. Een batterij die deze 4000 kWh opvangt en 's avonds weer afgeeft, verdient dus direct €600 per jaar aan *vermeden kosten*. Dit rendement is gegarandeerd en staat los van de schommelende stroomprijzen.\n\n### Pijler 2: Arbitrage op Dynamische Tarieven\n\nMet een dynamisch contract (zoals Tibber of Zonneplan) betaalt u de actuele beursprijs van de EPEX Spot markt. \n\n| Scenario | Marktprijs | Actie Batterij | Financieel Effect |\n| :--- | :--- | :--- | :--- |\n| Zonnige Middag | -€0,20 | Laden van het net | U krijgt geld toe! |\n| Avondpiek | €0,45 | Ontladen voor huis | Besparing €0,45/kWh |\n| Windstille Nacht | €0,18 | Standby | Geen actie |\n\nIn dit scenario verdient u geld *terwijl* u de batterij vult. In 2024 waren er record-aantallen uren met negatieve prijzen. In 2025 verwachten we dat dit door de enorme toename van offshore windenergie nog vaker zal voorkomen. Een batterij die hier slim op inspeelt, kan zijn eigen afschrijving in minder dan 7 jaar terugverdienen.\n\n### Pijler 3: Fiscale Optimalisatie en de 0% BTW Regeling\n\nSinds 2024 is er een specifieke regeling voor de BTW op thuisbatterijen. Als u de batterij inzet om de onbalans op het net te beperken (via een dynamisch contract), wordt u gezien als ondernemer voor de BTW. Voor particulieren betekent dit vaak dat de 21% BTW op de volledige aanschaf en installatie direct kan worden teruggevraagd. Dit verlaagt de drempel van een €10.000 investering naar €8.264. \n\n### De Kosten van Degradatie: De verborgen factor\n\nLet bij het vergelijken van offertes niet alleen op de aanschafprijs. Kijk naar de **Levelized Cost of Storage (LCOS)**. Een goedkope batterij die na 5 jaar 30% van zijn capaciteit verliest, is duurkoop. Wij raden uitsluitend systemen aan met een gegarandeerde 'End of Life' capaciteit van minimaal 70% na 10 jaar of 6000 volledige cycli.\n\n### Het Moment is Nu\n\nDe prijzen van Lithium zijn in 2024 met meer dan 40% gedaald. Tegelijkertijd zijn de terugleverkosten van de energiemaatschappijen verdubbeld. Dit heeft de 'Perfect Storm' gecreëerd voor een snelle terugverdientijd. Waar we in 2022 nog spraken over 15 jaar, zitten we nu op een gemiddelde van 6.5 jaar voor een goed gedimensioneerd systeem.`
  },
  {
    id: 'g3',
    slug: 'saldering-2027-politiek',
    title: 'Saldering 2027: De Politieke Weg naar een Nieuwe Energiemarkt',
    excerpt: 'Een juridische en politieke analyse van de afbouw van de salderingsregeling. Waarom wachten tot 2027 een kostbare strategische fout is.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '55 min',
    content: `## Het Einde van een Tijdperk: Saldering naar 0%\n\nDe kogel is door de kerk: het nieuwe kabinet heeft besloten de salderingsregeling vanaf 1 januari 2027 volledig af te schaffen. Dit is geen stapsgewijze afbouw meer, maar een harde deadline die de economische waarde van zonnepanelen zonder opslag fundamenteel verandert.\n\n### Waarom de Overheid de Batterij dwingt\n\nHet Nederlandse stroomnet is gebouwd voor eenrichtingsverkeer: van de centrale naar het huis. Door miljoenen huishoudens met zonnepanelen die op hetzelfde moment (middag) stroom terugleveren, raakt het laagspanningsnet "verstopt" (netcongestie). De overheid gebruikt de afbouw van saldering als een keiharde financiële prikkel om burgers te dwingen hun eigen stroom op te slaan of hun verbruik te verschuiven.\n\n### De Juridische Gevolgen van 2027\n\nZodra de salderingsregeling stopt, krijgt u voor uw overtollige zonnestroom slechts een "redelijke terugleververgoeding". In de praktijk zal dit de kale inkoopprijs van de markt zijn (vaak rond de €0,04 - €0,06 per kWh), terwijl u voor afname van het net inclusief belastingen en transportkosten nog steeds rond de €0,28 - €0,35 betaalt. \n\n**Het Gat van 2027:**\nU verliest per direct meer dan €0,25 per kWh die u niet zelf verbruikt. Voor een huishouden met 12 panelen betekent dit een extra verlies van gemiddeld €850 per jaar vergeleken met de huidige situatie. De thuisbatterij vult dit gat door de stroom van 13:00 uur vast te houden voor uw kook- en wasmomenten van 18:00 uur.\n\n### Waarom nu investeren en niet wachten tot 2027?\n\nVeel mensen denken: "Ik wacht wel tot 2027 met die accu." Dit is strategisch onverstandig om drie redenen:\n\n1. **Terugleverkosten zijn er NU al:** De boetes die u nu betaalt aan uw energieleverancier zijn in feite de "voorloper" van het einde van salderen. Wachten kost u elke maand geld.\n2. **Personeelstekort:** We verwachten een enorme run op installateurs in 2026. De prijzen voor installatie zullen dan stijgen door de enorme vraag.\n3. **De BTW-onzekerheid:** Hoewel de BTW nu op 0% staat (of terugvraagbaar is), is het onduidelijk of deze regeling na 2026 standhoudt onder de nieuwe fiscale plannen.\n\n### Conclusie voor de Slimme Consument\n\nDe salderingsregeling was de "training wheels" van de energietransitie. Nu die eraf gaan, moeten we overstappen op actieve sturing. Een huis met zonnepanelen en een batterij is in 2027 de enige manier om een betaalbare energierekening te behouden. Wij adviseren om nu de capaciteit te berekenen die aansluit bij uw verbruiksprofiel van ná 2027.`
  },
  {
    id: 'g4',
    slug: 'dynamisch-slim-laden-2025',
    title: 'De Algoritmische Winst: Handelen op de EPEX Spot Markt',
    excerpt: 'Hoe AI-gestuurde batterijen de energiemarkt hacken. Een diepe duik in arbitrage, onbalansmarkten en slimme sturingssoftware.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '70 min',
    content: `## De Thuisbatterij als Actieve Marktdeelnemer\n\nIn 2025 is een batterij aan de muur niet langer een "domme" opslagbak. Het is een edge-computing apparaat dat duizenden beslissingen per dag neemt op basis van wereldwijde marktprijzen, weersverwachtingen en lokale netcondities. Welkom in de wereld van algoritmische energiehandel.\n\n### De Drie Markten voor de Thuisbatterij\n\nOm maximaal rendement te halen, moet een batterij op meerdere markten tegelijkertijd opereren. Dit noemen we "Multi-market Optimization".\n\n1. **EPEX Spot (Uurprijzen):** De bekendste markt. Prijzen worden een dag van tevoren om 13:00 uur bekendgemaakt. Uw batterij plant de laadcycli in op de goedkoopste (of negatieve) uren.\n2. **Intraday Markt:** Hier worden tekorten of overschotten op de dag zelf verhandeld. Prijzen kunnen hier nog volatieler zijn dan op de EPEX Spot. Software als die van **Zonneplan of Bliq** kan hierop inspelen.\n3. **Onbalansmarkt (TenneT):** De heilige graal. Hier betaalt de landelijke netbeheerder u om binnen seconden te reageren op netfrequentie-fluctuaties. Dit levert vaak 3 tot 5 keer meer op dan simpele arbitrage op uurprijzen.\n\n### De Rol van het Energie Management Systeem (EMS)\n\nDe hardware is slechts 50% van het succesverhaal. De echte winst zit in de software. Een modern EMS kijkt naar:\n\n* **Lokale Weersverwachting:** Moet ik de batterij nu vullen van het net (omdat het bewolkt blijft), of komt er over 2 uur een enorme zonnepiek aan?\n* **Huishoudelijk Verbruikspatroon:** Gaat de eigenaar vanavond de elektrische auto laden? Dan moet ik extra reserve houden om de piek van de lader op te vangen.\n* **Netcongestie-signalen:** In sommige regio's krijgt u extra korting als u helpt om de lokale transformator te ontlasten.\n\n### De 'Virtual Power Plant' (VPP)\n\nDoor duizenden thuisbatterijen aan elkaar te koppelen via de cloud, ontstaat een Virtual Power Plant. Deze VPP kan fungeren als een enorme virtuele batterij die de rol van kolencentrales overneemt. Als deelnemer aan een VPP ontvangt u een deel van de handelswinsten die deze pool genereert. Dit is de reden waarom systemen met een open API (zoals Victron of Tesla) zo populair zijn: zij bieden de meeste mogelijkheden om aan te sluiten bij verschillende VPP-aanbieders.\n\n### Case Study: De Negatieve Prijsdag van 15 juni 2024\n\nOp deze zonnige zaterdag was er zoveel wind- en zonne-energie dat de prijs zakte naar -€0,42 per kWh (inclusief energiebelasting). Een bezitter van een 10 kWh batterij die op dat moment laadde, kreeg €4,20 *betaald* om zijn batterij te vullen. 's Avonds werd deze stroom verbruikt, waarmee nog eens €3,50 aan reguliere inkoop werd bespaard. Een totale dagwinst van €7,70 op één enkele laadcyclus. Dit soort dagen versnelt de terugverdientijd enorm.`
  },
  {
    id: 'g5',
    slug: 'capaciteit-kwh-advies',
    title: 'Sizing Excellence: De Fysica van de Ideale Batterijcapaciteit',
    excerpt: 'Waarom "groter is beter" een kostbare leugen is. Bereken de optimale verhouding tussen opwek, verbruik en opslag voor maximaal rendement.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    readingTime: '50 min',
    content: `## De Wet van de Verminderde Meeropbrengst in Opslag\n\nEen te kleine batterij laat winst liggen; een te grote batterij verdient zichzelf nooit terug. De kunst van "Sizing" is het vinden van de 'Sweet Spot' waar elke geïnvesteerde euro de maximale hoeveelheid energie per jaar verplaatst. In deze gids duiken we in de berekeningen die wij gebruiken voor ons onafhankelijk advies.\n\n### De 1:1.2 Gouden Regel\n\nVoor een standaard Nederlands huishouden met een dakoppervlak vol zonnepanelen adviseren wij een ratio van **1.2 kWh opslag per kWp aan zonnepanelen**. \n\n* Heeft u 10 panelen van 430 Wp (4.3 kWp)? Dan is een batterij van ca. 5 kWh optimaal.\n* Heeft u 24 panelen (10 kWp)? Kijk dan naar 12 kWh.\n\n### Waarom meer opslag vaak minder rendement geeft\n\nIn de winter (november t/m februari) produceren uw panelen vaak niet eens genoeg om een kleine 5 kWh batterij te vullen. In de zomer zijn de nachten zo kort en warm dat u een grote 15 kWh batterij nooit leeg krijgt voor de zon weer opkomt. Een batterij die niet dagelijks een volledige cyclus maakt (laden/ontladen), is een "slapende" investering die de terugverdientijd negatief beïnvloedt.\n\n### De Factoren die de Capaciteit Beïnvloeden\n\n1. **Kookprofiel:** Kookt u elektrisch tussen 17:30 en 19:00 uur? Dit is de grootste piek. Uw batterij moet krachtig genoeg zijn (kW vermogen) om deze piek op te vangen zonder hulp van het net.\n2. **Warmtepomp:** Een warmtepomp trekt in de winter constant stroom. Hier is een grotere batterij zinvol, niet voor zonnestroom, maar voor het opslaan van goedkope nachtstroom van het dynamische net.\n3. **Elektrische Auto (EV):** Een thuisbatterij is *niet* bedoeld om een auto te laden. Een auto-accu is 60-80 kWh, een thuisaccu vaak maar 10 kWh. De auto zou de thuisaccu in 10 minuten leegtrekken met 20% rendementsverlies.\n\n### 3-Fase versus 1-Fase Architectuur\n\nIn Nederland hebben de meeste huizen een 3-fase aansluiting (3x25A). Als u een 1-fase batterij koopt, kan deze technisch gezien maar op één van de drie groepen in uw huis direct leveren. Hoewel de slimme meter dit intern voor de afrekening saldeert, is een 3-fase batterij superieur voor de stabiliteit van uw installatie en essentieel als u in de toekomst 'off-grid' functies wilt bij stroomuitval.`
  },
  {
    id: 'g6',
    slug: 'installatiegids-checklist',
    title: 'Veiligheid & Normering: De NEN-Installatiegids voor Thuisaccu\'s',
    excerpt: 'Brandveiligheid, verzekeringsvoorwaarden en installatie-ethiek. Alles over de NEN 1010 en NPR 9090 normen voor een veilige meterkast.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200',
    readingTime: '55 min',
    content: `## De Gevaren van Ondeugdelijke Installatie\n\nEen thuisbatterij is een krachtige chemische energiecentrale in uw eigen woning. Hoewel moderne LFP-cellen (Lithium-IJzerfosfaat) extreem veilig zijn en niet spontaan ontbranden, is de elektronica en bekabeling eromheen het grootste risico. 90% van de incidenten met thuisbatterijen komt voort uit loszittende contacten of verkeerde zekeringen. \n\n### De Juridische Kader: NEN 1010 en NPR 9090\n\nIn Nederland moet elke elektrische installatie voldoen aan de **NEN 1010**. Voor thuisbatterijen is er bovendien de **NPR 9090** (Nederlandse Praktijk Richtlijn). Een erkend installateur zal altijd de volgende punten controleren:\n\n* **Brandwerende Ondergrond:** De batterij mag niet op een brandbare wand (zoals hout) worden gemonteerd zonder hittebestendige achterplaat.\n* **Vrije Ruimte:** Er moet minimaal 30 tot 50 cm vrije ruimte rondom de batterij zijn voor koeling en toegankelijkheid bij calamiteiten.\n* **Kabeldikte:** Vanwege de hoge stromen (vaak 32A of meer) zijn dikke kabels (6mm2 of meer) essentieel om oververhitting te voorkomen.\n\n### Verzekeringsvoorwaarden in 2025\n\nVerzekeraars worden strenger. Veel opstalverzekeringen eisen in 2025 dat een batterij is aangemeld bij **energieleveren.nl** en dat er een installatiecertificaat van een erkend bedrijf aanwezig is. Voor zakelijke installaties is vaak een Scope 12 keuring verplicht. Voor particulieren volstaat een factuur van een gecertificeerd bedrijf, maar let op: doe-het-zelf installaties kunnen leiden tot het weigeren van een claim bij brand, zelfs als de brand een andere oorzaak heeft.\n\n### De Meterkast-Upgrade\n\nHet plaatsen van een batterij vereist vrijwel altijd een aanpassing van uw meterkast:\n1. **Aardlekschakelaar Type B:** Voor omvormers met batterijen is vaak een Type B aardlekschakelaar nodig die ook gelijkstroom-fouten (DC) detecteert. Een standaard Type A is niet voldoende.\n2. **Monitoring via P1:** Er moet een datakabel van uw slimme meter naar de batterij worden getrokken (of een draadloze verbinding via een gateway).\n3. **Overspanningsbeveiliging:** Om uw kostbare batterij te beschermen tegen blikseminslag in de buurt.\n\n[Vergelijk 3 Gecertificeerde Installateurs]`
  },
  {
    id: 'g7',
    slug: 'onbalanssturing-algoritmes',
    title: 'De Onbalans-Revolutie: Geld Verdienen met Netstabilisatie',
    excerpt: 'Word onderdeel van een Virtual Power Plant. Hoe kleine thuisbatterijen samen de rol van kolencentrales overnemen en daarvoor fors betaald krijgen.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readingTime: '75 min',
    content: `## TenneT en de Strijd om de 50 Hertz\n\nHet Europese stroomnet moet exact op een frequentie van 50 Hertz draaien. Wijkt dit af, dan dreigt een totale blackout. Voorheen regelden grote gas- en kolencentrales dit door simpelweg harder of zachter te draaien. Nu deze centrales sluiten en we afhankelijker worden van grillige zon en wind, zoekt netbeheerder TenneT naar nieuwe manieren om de balans te herstellen. Uw thuisbatterij is de oplossing.\n\n### Wat is Onbalanssturing (FCR/aFRR)?\n\nEr zijn twee belangrijke markten waarop uw batterij kan opereren via een aggregator:\n\n* **FCR (Frequency Containment Reserve):** Dit is de eerste verdedigingslinie. De batterij moet binnen milliseconden reageren op frequentiefluctuaties. Dit levert een constante vergoeding op voor de 'beschikbaarheid' van uw batterij.\n* **aFRR (automatic Frequency Restoration Reserve):** Dit is een reactie op grotere onbalansmomenten (bijv. een wolk die over een groot zonnepark trekt). Hier krijgt u betaald voor de daadwerkelijk geleverde of opgenomen energie.\n\n### De Winstgevendheid in 2025\n\nDe vergoedingen op de onbalansmarkt zijn vaak 3 tot 5 keer hoger dan wat u bespaart door simpelweg uw eigen zonnestroom te verbruiken. \n\n**Het Verdienmodel:**\n* Besparing eigenverbruik: €0,22 per kWh.\n* Winst via onbalanssturing: gemiddeld €0,65 per kWh.\n\nEen modern systeem van 10 kWh kan op een onstuimige dag tot wel €25 winst genereren. Over een heel jaar gezien verlaagt dit de terugverdientijd van uw investering van 9 jaar naar minder dan 5 jaar. Dit maakt de thuisbatterij tot een van de meest rendabele investeringen in de energietransitie.\n\n### Is mijn batterij en huis geschikt?\n\nNiet elke combinatie is toegestaan op de onbalansmarkt. U heeft het volgende nodig:\n1. **Een 'Snelle' Batterij:** De omvormer moet kunnen schakelen tussen 100% laden en 100% ontladen in minder dan 30 seconden. LFP-systemen van Tesla, Victron en AlphaESS zijn hiervoor bij uitstek geschikt.\n2. **Actieve Cloud-sturing:** U moet uw systeem koppelen aan een sturingsplatform (zoals Bliq, Zonneplan of Jedlix).\n3. **De Juiste Meter:** Een SMR 5.0 meter is vereist voor de nauwkeurige 15-minuten verrekening.\n\nWord onderdeel van de revolutie en laat uw batterij werken voor het collectief, terwijl u de vruchten plukt van de hoogste vergoedingen in de markt.`
  }
];

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: { 
    id: 'privacy', 
    title: 'Privacyverklaring', 
    content: `
      <div class="prose max-w-none">
        <p class="text-sm text-gray-400 mb-8 uppercase tracking-widest font-black">Laatst bijgewerkt: Januari 2025</p>
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">1. Verwerking van Persoonsgegevens</h2>
        <p>De Thuisbatterij Wijzer hecht grote waarde aan uw privacy. Bij het gebruik van onze calculator verwerken wij uitsluitend de technische gegevens (postcode, verbruik, zonnepanelen) die nodig zijn voor een nauwkeurige rendementsberekening. In het kader van de AVG (GDPR) geschiedt dit op basis van uw expliciete toestemming.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">2. Leadgeneratie & Gecertificeerde Partners</h2>
        <p>Wanneer u via ons platform een offerte aanvraagt, deelt u persoonsgegevens (zoals naam, adres en telefoonnummer). Deze gegevens worden uitsluitend gedeeld met door ons geselecteerde en gecertificeerde installatiepartners voor het doel van het uitbrengen van een passende offerte. Onze partners zijn contractueel verplicht uw gegevens conform de AVG te beveiligen en niet voor andere doeleinden te gebruiken.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">3. Uw Rechten</h2>
        <p>U heeft te allen tijde recht op inzage, correctie of verwijdering van uw gegevens. Wij bewaren lead-gegevens niet langer dan noodzakelijk voor het offertetraject en de wettelijke administratieplicht.</p>
      </div>
    ` 
  },
  cookies: { 
    id: 'cookies', 
    title: 'Cookiebeleid', 
    content: `
      <div class="prose max-w-none">
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">1. Functionele & Analytische Cookies</h2>
        <p>Wij gebruiken functionele cookies om uw calculator-instellingen tijdelijk te onthouden. Daarnaast gebruiken wij geanonimiseerde analytische cookies om het gebruik van ons platform te verbeteren.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">2. Affiliate Tracking</h2>
        <p>Dit platform maakt gebruik van affiliate marketing via netwerken zoals Daisycon. Wanneer u op een link van een partner klikt, wordt een tracking cookie geplaatst. Dit registreert enkel dat de klik van onze website afkomstig is, zodat wij een commissie kunnen ontvangen indien u een aankoop doet. Dit heeft geen invloed op uw privacy of de prijs van het product.</p>
      </div>
    ` 
  },
  voorwaarden: { 
    id: 'voorwaarden', 
    title: 'Algemene Voorwaarden', 
    content: `
      <div class="prose max-w-none">
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">1. Status van het Advies</h2>
        <p>De Thuisbatterij Wijzer fungeert als onafhankelijk adviesorgaan. Alle door onze AI en calculator gegenereerde resultaten zijn indicatief. Er kunnen geen juridische rechten aan worden ontleend. Voor een definitieve installatie is altijd een schouw door een gecertificeerd expert vereist.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">2. Affiliate Disclosure</h2>
        <p>Wij zijn transparant over ons verdienmodel: wij ontvangen mogelijk een commissie van partners bij het genereren van een lead of verkoop. Dit stelt ons in staat onze diensten gratis en onafhankelijk van specifieke batterij-fabrikanten aan te bieden.</p>
      </div>
    ` 
  }
};

export const ADVICE_STEPS: AdviceStep[] = [
  { title: "Stap 1: Bereken", description: "Vind de ideale kWh voor uw situatie.", icon: "M9 19v-6" },
  { title: "Stap 2: Vergelijk Merken", description: "Bekijk de top 5 batterijen van 2025.", icon: "M16 7a4" },
  { title: "Stap 3: Offerte", description: "Bespaar op installatiekosten door te vergelijken.", icon: "M9 12l2" }
];
