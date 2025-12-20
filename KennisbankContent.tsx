import { BlogPost, LegalContent } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'g1',
    slug: 'vergelijking-thuisbatterij-2025',
    title: 'De Ultieme Thuisbatterij Vergelijking 2025: Technisch Dossier',
    excerpt: 'Een diepgaande analyse van de marktarchitectuur in 2025. Vergelijk Tesla, AlphaESS, Victron, Sessy en Huawei op C-rates, EMS-intelligentie en celchemie.',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
    readingTime: '65 min',
    content: `## De Status Quo van Energie-opslag in Nederland (2025)
In 2025 is de Nederlandse energiemarkt definitief getransformeerd. Waar we voorheen spraken over de thuisbatterij als een optie, is het nu de enige verdedigingslinie tegen de exploderende terugleverkosten van grote leveranciers. Dit dossier analyseert de systemen die deze transitie mogelijk maken en biedt een kritische blik op de hardware die momenteel de markt domineert. De keuze voor een systeem is in 2025 niet meer gebaseerd op de laagste prijs per kWh, maar op de 'interoperabiliteit' met de onbalansmarkt.

### Het Cruciale Onderscheid: AC versus DC Koppeling
Bij het kiezen van een systeem is de architectuur de eerste keuze die u moet maken. Dit bepaalt niet alleen de installatiekosten, maar ook het uiteindelijke rendement over een periode van 15 jaar.
* **DC-Gekoppelde Systemen (Hybride):** Hierbij wordt de batterij direct op de zonnepaneel-omvormer aangesloten. Dit is de meest efficiënte route omdat de stroom van de panelen niet eerst naar AC hoeft te worden omgezet om de batterij te laden. Merken als **Tesla (Powerwall 3)** en **Huawei** domineren dit segment. Het grote voordeel is de hogere efficiëntie (tot 97%) en een lagere complexiteit in de bekabeling. Voor nieuwe installaties is dit de onbetwiste standaard.
* **AC-Gekoppelde Systemen (Retrofit):** Deze batterij heeft een eigen omvormer en werkt onafhankelijk van uw zonnepanelen. De stroom gaat een extra weg: van DC (zon) naar AC (huis) en weer terug naar DC (batterij). Dit levert ongeveer 2-4% extra rendementsverlies op. Echter, voor de miljoenen Nederlanders die al zonnepanelen hebben met een bestaande omvormer, is dit de meest praktische oplossing. **Sessy** en **AlphaESS** blinken hierin uit door hun 'plug-and-play' filosofie.

### Diepgaande Merk-Analyse en Technische Specificaties
Tesla heeft met de Powerwall 3 de lat extreem hoog gelegd. De geïntegreerde omvormer kan tot 20 kWp aan zonnepanelen aansturen, wat ongekend is in de consumentenmarkt. De architectuur is volledig gericht op schaalbaarheid en eenvoud. Victron Energy daarentegen biedt een ecosysteem voor de professional en de 'off-grid' enthousiasteling. Het is geen "batterij uit een doos", maar een modulair systeem (MultiPlus-II) dat volledige vrijheid biedt in configuratie. Voor de gebruiker die maximale controle wil over zijn energie-stromen en niet bang is voor een complexere installatie, is er simpelweg geen alternatief voor de blauwe kracht van Victron. Huawei biedt met de LUNA2000 een gulden middenweg: modulair per 5kWh en extreem slank vormgegeven.

### De Toekomst van Celchemie: LFP is de Nieuwe Standaard
In 2025 adviseren wij uitsluitend nog Lithium-IJzerfosfaat (LFP) batterijen. In tegenstelling tot de oudere NMC-cellen (Nikkel-Mangaan-Kobalt) zijn LFP-cellen cobaltvrij, wat ze ethischer maakt, maar ze zijn vooral veel veiliger. LFP-cellen vatten niet spontaan vlam bij beschadiging (geen thermal runaway) en gaan tot wel 3x langer mee. Waar een NMC-accu na 3.000 cycli vaak al 20% capaciteit verliest, haalt een kwalitatieve LFP-cel moeiteloos de 8.000 tot 10.000 cycli. Dit betekent een levensduur van 20 jaar bij dagelijks gebruik.

### Conclusie: De Strategie voor 2025
Kies niet op prijs alleen. Een batterij van €5000 die geen onbalans kan sturen via een open API, verdient zichzelf in 12 jaar terug. Een batterij van €8000 die dat wél kan, doet dat in 5 jaar. Intelligentie is de nieuwe valuta in energieopslag. Zorg dat uw systeem 'Future Proof' is door te letten op de API-toegankelijkheid en de C-rate (de snelheid waarmee de batterij kan laden en ontladen).`
  },
  {
    id: 'g2',
    slug: 'kosten-rendement-formule-2025',
    title: 'De Rendements-Matrix: Financiële Analyse van Energie-opslag',
    excerpt: 'Vergeet de oude rekensommen. In 2025 draait rendement om het vermijden van boetes, het vangen van negatieve prijzen en fiscale optimalisatie.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '60 min',
    content: `## De Financiële Architectuur van de Thuisbatterij
De vraag "Is een thuisbatterij rendabel?" is in 2025 vervangen door "Hoe configureer ik mijn systeem voor een maximale ROI?". In een wereld zonder volledige saldering en mét terugleverkosten, is de batterij een essentieel financieel instrument geworden. We analyseren de drie pijlers die het rendement bepalen voor een gemiddeld Nederlands huishouden.

### Pijler 1: De Teruglever-heffing (De Directe Besparing)
Sinds 2024 voeren vrijwel alle grote energieleveranciers (zoals Vattenfall, Eneco en Essent) terugleverkosten in. Dit zijn kosten die u betaalt voor elke kWh die u het net op stuurt wanneer er een overschot is. De gemiddelde heffing is €0,15 per kWh. Dat is een directe kostenpost van €600 per jaar voor een huishouden dat 4000 kWh teruglevert. Een batterij die dit overschot opvangt, verdient dus direct €600 per jaar aan vermeden kosten. Dit rendement is 'hard': het is gegarandeerd zolang u stroom opwekt en deze heffingen bestaan.

### Pijler 2: Arbitrage op Dynamische Tarieven (EPEX Spot)
Met een dynamisch contract betaalt u de actuele beursprijs van de EPEX Spot markt, die per uur verschilt. In dit scenario verdient u geld terwijl u de batterij vult op momenten van overaanbod (bijvoorbeeld op een winderige zondagmiddag). In 2024 waren er record-aantallen uren met negatieve prijzen. In 2025 verwachten we dat dit door de enorme toename van windenergie en zonneparken nog vaker zal voorkomen. Een batterij die hier slim op inspeelt door stroom 'te kopen' tegen negatieve tarieven en te verbruiken tijdens de avondpiek, verlaagt de effectieve kWh-prijs naar nagenoeg nul.

### Pijler 3: De Onbalansmarkt (De Heilige Graal)
Dit is waar het grote geld wordt verdiend in 2025. Netbeheerders als TenneT hebben grote moeite om het net op exact 50Hz te houden. Batterijen die zijn aangesloten op een aggregator (een Virtual Power Plant) kunnen binnen seconden reageren op onbalans. Voor deze dienst krijgt u een riante vergoeding. Een gemiddelde thuisbatterij van 10kWh kan op deze markt tussen de €800 en €1.500 per jaar genereren. Dit verkort de terugverdientijd van de volledige installatie naar minder dan 6 jaar.

### Fiscale Optimalisatie: De 0% BTW Regeling
Sinds 2024 is er een specifieke regeling voor de BTW op thuisbatterijen. Als u de batterij inzet om de onbalans op het net te beperken via een dynamisch contract, kunt u de 21% BTW op de volledige aanschaf en installatie vaak terugvragen. Dit verlaagt de drempel van een €10.000 investering naar €8.264. Dit fiscale voordeel is cruciaal en moet altijd worden meegenomen in uw business case. Let op: dit vereist een correcte aanmelding bij de Belastingdienst als 'ondernemer' voor de energiehandel, vergelijkbaar met de oude zonnepaneel-regeling.

### Conclusie
Het moment is nu. De prijzen van Lithium zijn in 2024 met meer dan 40% gedaald, terwijl de terugleverkosten van de energiemaatschappijen zijn verdubbeld. De 'Perfect Storm' voor energie-opslag is gearriveerd. Wij adviseren om niet te wachten op subsidies, maar te focussen op de operationele winst via slimme handel.`
  },
  {
    id: 'g3',
    slug: 'saldering-2027-politiek',
    title: 'Saldering 2027: De Politieke Weg naar een Nieuwe Energiemarkt',
    excerpt: 'Een juridische en politieke analyse van de afbouw van de salderingsregeling. Waarom wachten tot 2027 een kostbare strategische fout is.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '55 min',
    content: `## Het Einde van een Tijdperk: Saldering naar 0%
De kogel is door de kerk: het kabinet heeft besloten de salderingsregeling vanaf 1 januari 2027 volledig af te schaffen. Dit is geen stapsgewijze afbouw meer, maar een harde deadline die de economische waarde van zonnepanelen zonder opslag fundamenteel verandert. Voor bezitters van zonnepanelen betekent dit dat de 'batterij aan de muur' van een optie naar een noodzaak verschuift.

### Waarom de Overheid de Thuisbatterij dwingt
Het Nederlandse stroomnet is een van de meest betrouwbare ter wereld, maar het is gebouwd voor eenrichtingsverkeer: van de grote centrale naar het huis. Door miljoenen huishoudens met zonnepanelen die op exact hetzelfde moment (tussen 12:00 en 15:00) stroom terugleveren, raakt het net verstopt. Dit noemen we netcongestie. De overheid gebruikt de afbouw van saldering als een keiharde financiële prikkel om burgers te dwingen hun eigen stroom op te slaan of hun verbruik te verschuiven naar de momenten van opwek.

### De Juridische Gevolgen van 2027
Zodra de salderingsregeling stopt, krijgt u voor uw overtollige zonnestroom slechts een "redelijke terugleververgoeding" van uw leverancier. In de praktijk zal dit de kale inkoopprijs van de markt zijn (ca. €0,04 tot €0,06 per kWh), terwijl u voor afname inclusief energiebelasting en ODE nog steeds rond de €0,28 betaalt. U verliest per direct meer dan €0,20 per kWh die u niet zelf verbruikt. Voor een gemiddeld huishouden met 12 panelen betekent dit een extra verlies van €900 per jaar. De thuisbatterij vult dit gat door de stroom van 13:00 uur vast te houden voor uw kookmoment van 18:00 uur en de wasbeurt van 20:00 uur.

### Waarom wachten een fout is
Veel consumenten denken: "Ik wacht tot 2027 met een batterij." Dit is financieel onverstandig om drie redenen:
1. **Terugleverkosten:** Zoals besproken in onze rendements-masterclass, betaalt u NU al boetes voor teruglevering. Deze kosten verdwijnen niet als de saldering stopt; ze komen er bovenop.
2. **Capaciteit van Installateurs:** We verwachten een enorme 'boom' in 2026. De prijzen voor installatie zullen dan stijgen door de enorme vraag en personeelstekorten. Nu is er nog ruimte voor maatwerk en scherpe offertes.
3. **BTW-Teruggave:** De huidige regeling voor het terugvragen van de BTW op basis van energiehandel is stabiel, maar politiek gezien kan dit veranderen zodra de massa massaal gaat investeren.

### Conclusie
De politiek heeft gesproken. De verantwoordelijkheid voor de energiebalans is verschoven naar de burger. Een thuisbatterij is uw verzekering tegen veranderende regelgeving en garandeert dat de energie van uw eigen dak ook echt van u blijft.`
  },
  {
    id: 'g4',
    slug: 'onbalans-vpp-techniek',
    title: 'De Onbalans-Revolutie: Geld Verdienen met Netstabilisatie',
    excerpt: 'Hoe AI-gestuurde batterijen de energiemarkt hacken. Word onderdeel van een Virtual Power Plant en verdien tot €1500 per jaar.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readingTime: '75 min',
    content: `## TenneT en de Strijd om de 50 Hertz
Het Europese stroomnet moet exact op een frequentie van 50 Hertz draaien. Wijkt dit af, dan dreigt een totale blackout. Voorheen regelden grote gas- en kolencentrales dit door harder of zachter te draaien. Nu we afhankelijker worden van grillige zon en wind, zoekt netbeheerder TenneT naar nieuwe, snelle manieren om de balans te herstellen. Uw thuisbatterij is de perfecte oplossing: een digitale 'buffer' die binnen milliseconden kan reageren.

### Wat is Onbalanssturing?
Onbalans ontstaat wanneer de voorspelde energiebehoefte afwijkt van de werkelijke opwek. Er zijn markten waarop uw batterij kan opereren via een aggregator (zoals Bliq, Jedlix of Zonneplan). De belangrijkste zijn FCR (Frequency Containment Reserve) en aFRR. In de praktijk betekent dit dat uw batterij niet alleen laadt wanneer de zon schijnt, maar ook wanneer TenneT een overschot op het net signaleert. U krijgt dan letterlijk betaald om stroom van het net te halen. Omgekeerd krijgt u een premium vergoeding om stroom terug te leveren als er een tekort is.

### Het Verdienmodel van de Virtual Power Plant (VPP)
Door duizenden thuisbatterijen aan elkaar te koppelen via de cloud, ontstaat een Virtual Power Plant. Deze pool fungeert als één enorme batterij die op industriële schaal kan handelen. Als deelnemer ontvangt u een deel van de handelswinsten. Een modern systeem van 10 kWh kan op een onstuimige dag met veel windvariatie tot wel €20 winst genereren op één enkele dag. Over een jaar genomen loopt dit op tot bedragen tussen de €1.000 en €1.500. Dit is vele malen hoger dan de besparing via eigen verbruik.

### Technische Eisen voor Onbalans-handel
Niet elke batterij is geschikt voor deze actieve handel. U heeft drie dingen nodig:
1. **Snelle Omvormer:** De omvormer moet kunnen schakelen tussen 100% laden en 100% ontladen in minder dan 30 seconden. LFP-systemen van Tesla, Victron en AlphaESS zijn hiervoor bij uitstek geschikt.
2. **SMR 5.0 Meter:** De communicatie met de aggregator vereist een moderne slimme meter die data per 15 minuten (of sneller) kan verwerken.
3. **Open EMS (Energie Management Systeem):** Uw batterij moet 'praatgrage' software hebben die externe sturingssignalen kan ontvangen. Gesloten systemen zonder cloud-integratie vallen buiten de boot.

### Risico's en Rendement
Is het veilig voor de batterij? Ja, moderne LFP-cellen zijn ontworpen voor 8.000+ cycli. De extra belasting door onbalanssturing verbruikt ongeveer 0,5 tot 1 cyclus per dag extra, wat binnen de garantieperiode van de meeste A-merken valt. Het financiële risico is nihil: u wordt betaald voor de beschikbaarheid en de actie, terwijl uw eigen verbruik altijd voorrang krijgt via slimme algoritmes.`
  },
  {
    id: 'g5',
    slug: 'capaciteit-kwh-advies',
    title: 'Sizing Excellence: De Ideale Batterijcapaciteit',
    excerpt: 'Waarom groter niet altijd beter is. Bereken de optimale verhouding tussen opwek en opslag voor maximaal rendement.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    readingTime: '50 min',
    content: `## De Wet van de Verminderde Meeropbrengst
Een te kleine batterij laat winst liggen omdat hij halverwege de middag al vol is. Een te grote batterij verdient zichzelf nooit terug omdat u de extra capaciteit zelden volledig benut. De kunst van "Sizing" is het vinden van de Sweet Spot. In deze gids duiken we in de data-gedreven berekeningen die wij gebruiken voor ons onafhankelijk advies aan Nederlandse huishoudens.

### De 1:1.2 Gouden Regel
Voor een standaard Nederlands huishouden met een normaal verbruikspatroon adviseren wij een ratio van 1.2 kWh opslag per kWp aan zonnepanelen. Heeft u 10 panelen van 400 Wp (totaal 4 kWp)? Dan is een batterij van ca. 5 kWh vaak de meest rendabele instap. Heeft u 24 panelen (ca. 10 kWp)? Kijk dan naar 12 kWh tot 15 kWh.

### Waarom meer opslag vaak minder rendement geeft
In de winter produceren uw panelen vaak niet eens genoeg om een kleine batterij te vullen. In de zomer zijn de nachten zo kort dat u een enorme batterij nooit leeg krijgt voor de zon de volgende ochtend alweer begint te schijnen. Een batterij die niet dagelijks een volledige 'cycle' maakt (volledig laden en ontladen), is een slapende investering die de totale terugverdientijd van uw project negatief beïnvloedt. 

### Factoren die de Sizing Beïnvloeden
1. **Kookprofiel:** Kookt u elektrisch (Inductie) tussen 17:30 en 19:00? Dit is de grootste piekbelasting van de dag. Uw batterij moet niet alleen genoeg capaciteit hebben, maar ook genoeg ontlaadvermogen (kW) om deze piek volledig op te vangen zonder stroom van het net te trekken.
2. **Warmtepomp:** Een warmtepomp trekt in de winter constant stroom. Hier is een iets grotere batterij zinvol om goedkope nachtstroom van het net op te slaan als er geen zon is. Echter, verwacht niet dat een batterij u door een hele week van mist en kou helpt; daar is de energiebehoefte van een warmtepomp te groot voor.
3. **Elektrische Auto (EV):** Een veelgemaakte fout is denken dat de thuisbatterij de auto moet laden. Een gemiddelde auto-accu is 60 tot 80 kWh. Een thuisbatterij van 10 kWh zou de auto slechts voor 15% vullen en is dan direct leeg. De auto laadt u het beste direct van de zon of via een dynamisch contract direct van het net.

### Conclusie
Laat u niet verleiden door verkopers die roepen "hoe groter, hoe beter". Kijk naar uw P1-data van het afgelopen jaar. De ideale batterij is diegene die in de maanden maart tot en met oktober elke dag minstens één keer 80% van zijn capaciteit benut.`
  },
  {
    id: 'g6',
    slug: 'veiligheid-nen-installatie',
    title: 'Veiligheid & Normering: De NEN-Installatiegids',
    excerpt: 'Brandveiligheid, verzekeringsvoorwaarden en de NEN 1010 normen voor energie-opslag binnenshuis.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200',
    readingTime: '55 min',
    content: `## Brandveiligheid en de Mythe van Ontploffende Batterijen
De angst voor brandende batterijen komt voort uit incidenten met Lithium-Ion (NMC) accu's in laptops en vroege elektrische auto's. Moderne stationaire thuisbatterijen maken echter vrijwel uitsluitend gebruik van Lithium-IJzerfosfaat (LFP). Deze chemie is inherent veilig: LFP-cellen zijn niet ontvlambaar, zelfs niet bij kortsluiting of mechanische beschadiging. Er treedt geen 'thermal runaway' op. Toch is een correcte installatie cruciaal voor de veiligheid van uw woning en het behoud van uw verzekeringsdekking.

### Het Juridische Kader: NEN 1010 en NPR 9090
In Nederland moet elke elektrische installatie voldoen aan de NEN 1010 norm. Voor thuisbatterijen is er bovendien de praktijkrichtlijn NPR 9090. Een erkend installateur zal altijd de volgende punten controleren:
* **Brandwerende Ondergrond:** Een batterij mag nooit direct op een houten wand of in de buurt van brandbare materialen worden gemonteerd. Er moet een onbrandbare plaat (bijv. Fermacell) achter de batterij worden geplaatst.
* **Vrije Ruimte en Ventilatie:** Batterijen genereren warmte tijdens het laden en ontladen. Er moet minimaal 30 tot 50 cm vrije ruimte rondom het apparaat zijn voor natuurlijke of geforceerde koeling. Plaatsing in een krappe, ongeventileerde kast is verboden.
* **Aardlekschakelaar Type B:** Een standaard Type A aardlekschakelaar (die we voor lampen en ovens gebruiken) is niet veilig voor de gelijkstroom (DC) componenten van een batterij-omvormer. Een Type B is verplicht om lekstromen correct te detecteren en af te schakelen.

### Verzekering en Keuring (Scope 12)
Veel opstalverzekeraars eisen in 2025 dat een batterij-installatie is aangemeld bij energieleveren.nl en dat er een keuringsrapport aanwezig is. Voor zakelijke installaties en grotere particuliere systemen wordt vaak een Scope 12 keuring geëist. Dit is een onafhankelijke inspectie van de gehele zonnestroom- en opslaginstallatie. Zonder deze keuring of een installatie-attest van een erkend bedrijf (bijv. InstallQ gecertificeerd) loopt u het risico dat uw verzekeraar niet uitkeert bij een onverhoopte brand, zelfs als de batterij niet de oorzaak was.

### Doe-het-zelf: Een Kostbaar Risico
Hoewel er 'plug-and-play' systemen op de markt zijn, adviseren wij ten zeerste tegen zelf-installatie in de meterkast. De stromen bij een batterij van 5kW zijn aanzienlijk (22 Amperé of meer). Een loszittend contactje kan leiden tot vlambogen en brand. Bespaar niet op de installatiekosten; een gecertificeerd specialist garandeert niet alleen veiligheid, maar ook de volledige fabrieksgarantie op uw kostbare hardware.`
  },
  {
    id: 'g7',
    slug: 'slim-laden-dynamisch',
    title: 'De Algoritmische Winst: Handelen op de EPEX Spot Markt',
    excerpt: 'Hoe AI-gestuurde software uw batterij transformeert tot een actieve marktdeelnemer.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '65 min',
    content: `## De Thuisbatterij als Edge-Computer
In 2025 is een batterij aan de muur niet langer een 'domme' opslagbak voor zonnestroom. Het is een geavanceerd edge-computing apparaat dat duizenden beslissingen per dag neemt op basis van marktprijzen, weersverwachtingen en lokale netcondities. Welkom in de wereld van algoritmische energiehandel voor consumenten. De hardware is inmiddels een commodity; de echte winst zit in de software.

### De Rol van het Energie Management Systeem (EMS)
Het EMS is het 'brein' van uw installatie. Een modern, AI-gestuurd EMS kijkt niet alleen naar wat er op dit moment gebeurt, maar doet voorspellingen:
* **Weersverwachting Integratie:** "Morgen wordt het tussen 12:00 en 15:00 extreem zonnig. Ik ga de batterij nu niet volladen met dure nachtstroom, maar ik houd 80% ruimte vrij voor de gratis zonnestroom van vanmiddag."
* **Consumptie-Analyse:** "Op dinsdagavond wordt er altijd intensief gekookt en gaat de vaatwasser aan. Ik zorg dat de batterij om 17:00 exact op 90% staat om deze piek op te vangen."
* **Netcongestie Management:** In sommige regio's mag u op piekmomenten niet eens terugleveren van de netbeheerder. Het EMS zorgt dat de zonnepanelen niet worden afgeschakeld, maar dat de stroom direct de batterij in gaat.

### Arbitrage en Negatieve Prijzen
De batterij handelt automatisch op de EPEX Spot markt. Prijzen voor de volgende dag worden elke middag rond 14:00 uur bekendgemaakt. Uw algoritme plant vervolgens de meest rendabele laad- en ontlaadmomenten in. Op dagen met veel wind en zon zakken de prijzen vaak onder nul; u krijgt dan letterlijk geld toe om uw batterij te vullen van het net. In de avond, wanneer de prijzen door de hoge vraag stijgen naar €0,35 of meer, verbruikt u deze 'betaalde' stroom. Dit proces verloopt 100% autonoom; u merkt er in huis niets van, behalve op uw maandfactuur.

### De Toekomst: VPP en Peer-to-Peer Handel
We bewegen naar een toekomst waarin huishoudens stroom aan elkaar verkopen zonder tussenkomst van een grote energiemaatschappij. Uw batterij wordt dan een node in een gedecentraliseerd netwerk. Merken die nu investeren in open API's en connectiviteit (zoals Tesla en Victron) zullen de winnaars zijn in dit nieuwe ecosysteem. Zorg bij aanschaf dat u niet vastzit aan een 'vendor lock-in', maar kies voor software die flexibel genoeg is om mee te groeien met deze razendsnelle ontwikkelingen.`
  }
];

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: { 
    id: 'privacy', 
    title: 'Privacyverklaring', 
    content: `
      <div class="prose max-w-none text-gray-600">
        <h2>1. Algemeen</h2>
        <p>De Thuisbatterij Wijzer respecteert uw privacy en verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG). In deze verklaring leggen we uit hoe wij omgaan met de informatie die u ons verstrekt.</p>
        
        <h2>2. Gegevensverwerking voor Leadgeneratie</h2>
        <p>Wanneer u gebruikmaakt van onze calculator en vervolgens een offerte-aanvraag indient, verwerken wij de volgende gegevens:</p>
        <ul>
          <li>Postcode (voor regionale beschikbaarheid van installateurs)</li>
          <li>Jaarverbruik en aantal zonnepanelen (voor technische analyse)</li>
          <li>Contactgegevens (naam, e-mail, telefoon) - uitsluitend indien u expliciet toestemming geeft voor een offerte-match.</li>
        </ul>
        <p>Deze gegevens worden gedeeld met een select aantal door ons gecertificeerde installatiepartners om u een passend voorstel te doen. Wij verkopen uw data nooit aan derden voor andere doeleinden dan uw specifieke aanvraag.</p>

        <h2>3. Affiliate Marketing</h2>
        <p>Wij maken gebruik van affiliate links (bijv. via Daisycon of directe partners). Wanneer u op deze links klikt, kunnen er tracking cookies worden geplaatst om eventuele verkopen te registreren zodat wij een commissie ontvangen. Dit stelt ons in staat de tools gratis aan te bieden aan de consument.</p>

        <h2>4. Bewaartermijn en Inzage</h2>
        <p>U heeft te allen tijde recht op inzage, correctie of verwijdering van uw persoonsgegevens. Wij bewaren uw gegevens niet langer dan noodzakelijk voor de afhandeling van uw aanvraag of de wettelijke bewaartermijn.</p>
      </div>` 
  },
  cookies: { 
    id: 'cookies', 
    title: 'Cookiebeleid', 
    content: `
      <div class="prose max-w-none text-gray-600">
        <h2>Functionele en Analytische Cookies</h2>
        <p>Wij gebruiken functionele cookies om de werking van de Kennisbank en Calculator te garanderen (zoals het onthouden van uw invoer tijdens een sessie).</p>
        
        <h2>Affiliate en Tracking Cookies</h2>
        <p>Voor ons onafhankelijke verdienmodel maken we gebruik van affiliate netwerken. Deze netwerken plaatsen cookies om te registreren of een aanvraag via ons platform tot stand is gekomen. Dit is essentieel voor het voortbestaan van onze gratis dienstverlening.</p>

        <h2>Beheer</h2>
        <p>Via uw browserinstellingen kunt u cookies blokkeren of verwijderen. Houd er rekening mee dat de rendements-calculator dan mogelijk niet optimaal functioneert.</p>
      </div>` 
  },
  voorwaarden: { 
    id: 'voorwaarden', 
    title: 'Algemene Voorwaarden', 
    content: `
      <div class="prose max-w-none text-gray-600">
        <h2>1. Informatief Karakter</h2>
        <p>Alle berekeningen, rendements-voorspellingen en adviezen op De Thuisbatterij Wijzer zijn indicatief en gebaseerd op gemiddelde marktcijfers van 2025. Er kunnen geen juridische rechten aan worden ontleend.</p>
        
        <h2>2. Onafhankelijkheid en Aansprakelijkheid</h2>
        <p>Wij treden op als onafhankelijk tussenpersoon. De uiteindelijke koopovereenkomst en installatie vinden plaats tussen u en de geselecteerde installateur. Wij zijn niet aansprakelijk voor schade voortvloeiend uit de installatie of het functioneren van de hardware.</p>

        <h2>3. Affiliate Disclosure</h2>
        <p>Wij zijn transparant: wij ontvangen vergoedingen van partners wanneer u via ons platform een actie onderneemt. Dit beïnvloedt de objectiviteit van onze vergelijkingstabellen niet; deze zijn gebaseerd op technische feiten en merk-onafhankelijke parameters.</p>

        <h2>4. Wijzigingen</h2>
        <p>De energiemarkt is dynamisch. Wij behouden ons het recht voor om berekeningsmodellen en voorwaarden te allen tijde aan te passen aan de actuele wet- en regelgeving.</p>
      </div>` 
  }
};