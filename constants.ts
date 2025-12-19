
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
    partnerName: 'Bekijk dagaanbieding',
  },
  {
    id: 'coolblue-accu',
    name: 'Thuisbatterij incl. Installatie',
    category: 'Modulair',
    description: "Kies voor de zorgeloze installatieservice van Coolblue. Volledig ontzorgd van advies tot aan de meterkast.",
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    partnerUrl: 'https://www.coolblue.nl/zonnepanelen/thuisbatterij',
    partnerName: 'Check huidige voorraad',
  }
];

export const FAQS: FAQ[] = [
  { q: "Wat is de terugleverboete precies?", a: "Dit zijn kosten die energieleveranciers in rekening brengen voor elke kWh die u teruglevert aan het net. Een thuisaccu voorkomt dit door de stroom zelf op te slaan.", blogSlug: "kosten-rendement-formule-2025" },
  { q: "Hoeveel bespaar ik met een dynamisch contract?", a: "Gemiddeld €300 tot €600 extra per jaar. U koopt stroom in bij negatieve prijzen en verbruikt uw eigen stroom tijdens dure avondpieken.", blogSlug: "dynamisch-slim-laden-2025" },
  { q: "Wanneer stopt het salderen?", a: "De politieke besluitvorming wijst op een volledige afbouw vanaf 2027. Wachten met een accu kost nu al geld door terugleverkosten.", blogSlug: "saldering-2027-politiek" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'g1',
    slug: 'vergelijking-thuisbatterij-2025',
    title: 'De Ultieme Thuisbatterij Vergelijking 2025: Welk Systeem Past bij Jou?',
    excerpt: 'Een technisch diepgaande analyse van de markt in 2025. Vergelijk Tesla, AlphaESS, Victron, Sessy en Huawei op rendement en techniek.',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## Introductie: 2025 als het Kanteljaar voor de Thuisbatterij\n\nIn 2025 is de Nederlandse energiemarkt definitief veranderd. \n\n[ComparisonTable]\n\nBereken nu uw persoonlijke winst met onze Rendementscalculator.`
  },
  {
    id: 'g2',
    slug: 'kosten-rendement-formule-2025',
    title: 'Kosten & Rendement: Wat levert een thuisbatterij écht op in 2025?',
    excerpt: 'Een diepgaande financiële analyse van de rekensom in 2025.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '40 min',
    content: `## De Nieuwe Rekensom: Waarom 2025 Alles Verandert\n\n| Kenmerk | Scenario A: Salderen | Scenario B: Post-Saldering | Scenario C: Dynamisch + Onbalans |\n| :--- | :--- | :--- | :--- |\n| **Besparing** | ± €650 | ± €900 | ± €1.250 |\n\n[Halt: Hier later affiliate link naar bol invoegen]`
  },
  {
    id: 'g3',
    slug: 'saldering-2027-politiek',
    title: 'Thuisbatterij en de Salderingsregeling: Wat verandert er na 2027?',
    excerpt: 'Een diepe duik in de politieke besluiten, het einde van salderen en waarom wachten tot 2027 een financieel risico is.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '42 min',
    content: `## De Politieke Realiteit: Het Einde van de Salderingsregeling\n\nHet kabinet stopt met salderen per 2027. Wat betekent dit voor u?\n\n[Start de Rendementscalculator]`
  },
  {
    id: 'g4',
    slug: 'dynamisch-slim-laden-2025',
    title: 'Dynamische Energiecontracten & Slim Laden: Maak van je Thuisbatterij een Geldmachine',
    excerpt: 'Ontdek hoe je met EPEX-uurprijzen en onbalanssturing je batterij laat handelen als een pro. Geld verdienen terwijl je slaapt.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## De Revolutie van de Energiemarkt: Van Consument naar Trader\n\nStelt u zich voor: u wordt betaald om uw batterij op te laden. In 2025 is dit de realiteit.\n\n[Halt: Hier later affiliate link naar bol invoegen voor energieverbruiksmanagers]`
  },
  {
    id: 'g5',
    slug: 'capaciteit-kwh-advies',
    title: 'Hoe kies je de juiste capaciteit (kWh)? De Gids voor Maatwerk Opslag',
    excerpt: 'Technisch onderbouwde gids over het berekenen van de ideale batterijgrootte voor jouw woning. Voorkom over-investering.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    readingTime: '35 min',
    content: `## Introductie: De Wet van de Verminderde Meeropbrengst\n\nIn de wereld van de thuisbatterijen is er één fout die vaker wordt gemaakt dan alle andere: het kopen van een te groot systeem.\n\n[Start de Rendementscalculator]`
  },
  {
    id: 'g6',
    slug: 'installatiegids-checklist',
    title: 'Installatiegids: Waar moet u op letten bij een Gecertificeerd Installateur?',
    excerpt: 'De meest complete gids over veiligheid, normen en het installatieproces. Inclusief een 20-punts checklist voor uw offertegesprek.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## Introductie: Waarom de Installateur Belangrijker is dan de Batterij\n\nKwaliteit en veiligheid gaan voor alles bij de installatie van een hoogwaardig chemisch systeem.\n\n[Vergelijk 3 Installateurs]`
  },
  {
    id: 'g7',
    slug: 'onbalanssturing-algoritmes',
    title: 'Onbalanssturing: Geld Verdienen met je Thuisbatterij Terwijl je Slaapt',
    excerpt: 'De ultieme gids over de onbalansmarkt. Leer hoe AI-software je batterij laat handelen op het net en de terugverdientijd verlaagt naar onder de 5 jaar.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## De Geboorte van een Nieuwe Energiemarkt\n\nWelkom in de toekomst van het Nederlandse energienet. We bevinden ons op een historisch kantelpunt.\n\n[Start de Rendementscalculator]`
  }
];

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: { 
    id: 'privacy', 
    title: 'Privacyverklaring', 
    content: `
      <div class="prose max-w-none">
        <p class="text-sm text-gray-400 mb-8 uppercase tracking-widest font-black">Laatst bijgewerkt: December 2025</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">1. Onze Toewijding aan uw Privacy</h2>
        <p>Bij <strong>De Thuisbatterij Wijzer</strong> begrijpen we dat uw energiegegevens persoonlijk zijn. In het kader van de AVG-wetgeving van 2025 leggen we hieronder transparant uit hoe we uw data beschermen en gebruiken om u te helpen bij uw energietransitie.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">2. Gegevens die wij Verzamelen</h2>
        <p>Via onze interactieve widgets en calculators verzamelen wij de volgende gegevenspunten:</p>
        <ul class="list-disc pl-6 space-y-2 mb-8">
          <li><strong>Locatiegegevens:</strong> Uw postcode om regionale subsidiemogelijkheden en installatiebeschikbaarheid te bepalen.</li>
          <li><strong>Energieprofiel:</strong> Uw jaarlijks stroomverbruik en de capaciteit van uw huidige zonnestroomsysteem.</li>
          <li><strong>Contactgegevens:</strong> Uw e-mailadres wanneer u een rendementsrapport aanvraagt of een offertevergelijking start.</li>
        </ul>

        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">3. Delen met Installatiepartners</h2>
        <p>Ons platform fungeert als intermediair. Om u van concrete prijsopgaven te voorzien, delen wij uw aanvraaggegevens met <strong>maximaal drie (3) geselecteerde en gecertificeerde installatiepartners</strong>. Deze partners zijn contractueel verplicht uw data uitsluitend te gebruiken voor het opstellen van de door u gevraagde offerte.</p>

        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">4. Opslag en Beveiliging</h2>
        <p>Wij maken gebruik van moderne encryptietechnieken om uw data veilig op te slaan. Uw gegevens worden niet langer bewaard dan strikt noodzakelijk voor het offerteproces (maximaal 12 maanden na de laatste interactie), tenzij u expliciet toestemming geeft voor een langere bewaartermijn voor updates over de energiemarkt.</p>
      </div>
    ` 
  },
  cookies: { 
    id: 'cookies', 
    title: 'Cookiebeleid', 
    content: `
      <div class="prose max-w-none">
        <p class="text-sm text-gray-400 mb-8 uppercase tracking-widest font-black">Transparantie in Tracking</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">1. Functionele Cookies</h2>
        <p>Deze cookies zijn essentieel voor de werking van onze website. Ze zorgen er bijvoorbeeld voor dat de data die u invoert in de Rendementscalculator behouden blijft terwijl u door de verschillende stappen van de analyse navigeert.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">2. Analytische Cookies</h2>
        <p>Wij gebruiken geanonimiseerde analytische instrumenten om te begrijpen hoe bezoekers onze gidsen lezen. Deze data is volledig geaggregeerd en kan niet worden herleid naar een individuele gebruiker.</p>

        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">3. Affiliate Marketing & Partners</h2>
        <p>Om ons platform gratis toegankelijk te houden voor consumenten, maken wij gebruik van affiliate-marketingprogramma's (zoals die van <strong>Bol.com, Coolblue en Amazon</strong>). Wanneer u op een productlink klikt in onze gidsen, kan er een 'affiliate cookie' worden geplaatst. Dit stelt ons in staat een kleine commissie te ontvangen wanneer u een aankoop doet, zonder dat dit voor u extra kosten met zich meebrengt.</p>

        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">4. Beheer uw Voorkeuren</h2>
        <p>U kunt via uw browserinstellingen alle cookies weigeren of verwijderen. Let op: de interactieve calculators kunnen hierdoor minder accuraat functioneren.</p>
      </div>
    ` 
  },
  voorwaarden: { 
    id: 'voorwaarden', 
    title: 'Algemene Voorwaarden', 
    content: `
      <div class="prose max-w-none">
        <p class="text-sm text-gray-400 mb-8 uppercase tracking-widest font-black">Juridisch Kader</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">1. Status van het Platform</h2>
        <p>De Thuisbatterij Wijzer (dethuisbatterijwijzer.nl) is een <strong>onafhankelijk informatieplatform</strong>. Wij zijn nadrukkelijk géén installatiebedrijf, verzekeraar of energieproducent.</p>
        
        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">2. Indicatieve Berekeningen</h2>
        <p>De berekeningen, terugverdientijden en rendementsprognoses gegenereerd door onze tools zijn gebaseerd op gemiddelde marktprijzen en prognoses voor de energiemarkt van 2025. Deze resultaten zijn <strong>indicatief</strong>; er kunnen geen juridische rechten aan worden ontleend. Een definitief financieel plan kan alleen worden opgesteld door een gecertificeerd adviseur na een schouw op locatie.</p>

        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">3. Uitsluiting van Aansprakelijkheid</h2>
        <p>Wij selecteren onze installatiepartners zorgvuldig op basis van certificering en reviews. Echter, de uiteindelijke overeenkomst voor aankoop en installatie vindt plaats tussen u en de externe installateur. De Thuisbatterij Wijzer aanvaardt geen enkele aansprakelijkheid voor schade, gebreken of geschillen voortvloeiend uit de uitvoering van werkzaamheden door deze derden.</p>

        <h2 class="text-3xl font-black mb-6 italic uppercase tracking-tighter">4. Intellectueel Eigendom</h2>
        <p>De unieke rekenmodellen, teksten en visuele gidsen op dit platform zijn eigendom van De Thuisbatterij Wijzer en mogen niet zonder schriftelijke toestemming worden gereproduceerd.</p>
      </div>
    ` 
  }
};

export const ADVICE_STEPS: AdviceStep[] = [
  { title: "Stap 1: Bereken", description: "Vind de ideale kWh voor uw situatie.", icon: "M9 19v-6" },
  { title: "Stap 2: Vergelijk Merken", description: "Bekijk de top 5 batterijen van 2025.", icon: "M16 7a4" },
  { title: "Stap 3: Offerte", description: "Bespaar op installatiekosten door te vergelijken.", icon: "M9 12l2" }
];
