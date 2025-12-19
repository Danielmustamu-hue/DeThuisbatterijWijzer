
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
  { q: "Wat is de terugleverboete precies?", a: "Dit zijn kosten die energieleveranciers in rekening brengen voor elke kWh die u teruglevert aan het net. Een thuisaccu voorkomt dit door de stroom zelf op te slaan.", blogSlug: "vergelijking-thuisbatterij-2025" },
  { q: "Hoeveel bespaar ik met een dynamisch contract?", a: "Gemiddeld €300 tot €600 extra per jaar. U koopt stroom in bij negatieve prijzen en verbruikt uw eigen stroom tijdens dure avondpieken.", blogSlug: "vergelijking-thuisbatterij-2025" },
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
    content: `## Introductie: 2025 als het Kanteljaar voor de Thuisbatterij\n\nIn 2025 is de Nederlandse energiemarkt definitief veranderd. Waar we voorheen spraken over de thuisbatterij als een 'leuke gadget voor de vroege vogels', is het nu een essentieel onderdeel geworden van een rendabel huishouden. De reden? Een giftige cocktail van **terugleverkosten**, een overbelast stroomnet (netcongestie) en de naderende afbouw van de salderingsregeling.\n\nHuishoudens met zonnepanelen worden tegenwoordig direct gestraft voor hun succes. Energieleveranciers rekenen tot wel 15 cent per kWh aan kosten voor de stroom die u overdag terugstuurt naar het net. Hierdoor verdwijnt uw rendement als sneeuw voor de zon.\n\n### Waarom de Rekensom in 2025 Anders is\nVroeger berekenden we de terugverdientijd puur op basis van de vermeden inkoop van stroom. In 2025 voegen we daar twee cruciale factoren aan toe: de **vermeden terugleverboete** en de winst uit **onbalanssturing**. Als u een slim systeem kiest, kan de batterij handelen op de energiemarkt terwijl u slaapt.\n\n## Deep-Dive: De Top 5 Thuisbatterijen van 2025\n\n### 1. Tesla Powerwall 3: De Onbetwiste Koning van Integratie\nTesla heeft met de Powerwall 3 een systeem neergezet dat de markt in 2025 domineert. Het grootste verschil met zijn voorganger is de volledig geïntegreerde **hybride omvormer**.\n\n### 2. AlphaESS SMILE-B3: De Meester van de Modulariteit\nVoor gezinnen die flexibiliteit zoeken, is de AlphaESS SMILE-B3 vaak de beste keuze. Dit systeem maakt gebruik van **LiFePO4-technologie** (Lithium IJzerfosfaat), wat de veiligste batterijtechniek van dit moment is.\n\n### 3. Victron Energy: De Vrijheid voor de Techneut\nWie geen genoegen neemt met een 'gesloten' systeem, komt uit bij Victron. Dit merk uit Almere is wereldberoemd in de maritieme sector en heeft die robuustheid vertaald naar de thuisbatterijmarkt.\n\n### 4. Sessy: De Nederlandse Plug-and-Play Trots\nSessy is een relatief nieuwe speler die specifiek voor de Nederlandse markt is ontwikkeld. Hun focus ligt op **retrofit**: het toevoegen van een accu aan een bestaande installatie.\n\n### 5. Huawei LUNA2000: Esthetiek ontmoet Efficiëntie\nHuawei heeft met de LUNA2000-serie een systeem dat niet misstaat in een modern interieur of garage.\n\n## Gedetailleerd Technisch Vergelijk 2025\n\n[ComparisonTable]\n\n## Rendement en Financiën: De 0% BTW Kans\nEen cruciaal voordeel in 2025 is de **0% BTW-regeling** voor de aanschaf en installatie van een thuisbatterij. Dit scheelt u direct 21% op de investering. In combinatie met een dynamisch energiecontract kunt u de terugverdientijd terugbrengen naar minder dan 7 jaar.\n\n[Halt: Hier later affiliate link invoegen]\n\n### Conversie-tip: Vergelijk Offertes\nDe installatie van een thuisbatterij is vakwerk. Wij adviseren altijd om minimaal 3 offertes te vergelijken van erkende, gecertificeerde installateurs. Dit bespaart u vaak tot wel 20% op de totale installatiekosten.\n\n## Conclusie: Welk Systeem Moet U Kiezen?\n\n* **Wilt u de beste software en onbalanssturing?** Kies voor de **Tesla Powerwall 3**.\n* **Zoekt u een veilig en modulair systeem voor een gezin?** De **AlphaESS SMILE-B3** is uw beste partner.\n* **Bent u een tech-liefhebber die volledige controle wil?** Ga voor **Victron Energy**.\n\nBereken nu uw persoonlijke winst met onze Rendementscalculator en zorg dat u klaar bent voor de energietoekomst.`
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
