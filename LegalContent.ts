
import { LegalContent } from './types';

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: {
    id: 'privacy',
    title: 'Privacyverklaring',
    content: `
      <div class="prose max-w-none text-gray-300">
        <p class="mb-6 text-lg">De Thuisbatterij Wijzer hecht grote waarde aan uw privacy. In deze verklaring leggen wij uit hoe wij omgaan met uw persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</p>
        
        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">1. Verwerkingsverantwoordelijke</h2>
        <p class="mb-4">De Thuisbatterij Wijzer fungeert als verwerkingsverantwoordelijke voor de verzameling van gegevens via onze rekentools en adviespagina's.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">2. Welke gegevens verzamelen wij?</h2>
        <p class="mb-4">Wij verzamelen technische specificaties van uw woonsituatie (postcode, verbruik, zonnepanelen) om rendementsberekeningen te kunnen uitvoeren. Indien u een offerte-aanvraag indient, verwerken wij tevens uw identificatiegegevens (naam, e-mailadres, telefoonnummer) op basis van uw expliciete toestemming.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">3. Doel en Rechtsgrond van de verwerking</h2>
        <p class="mb-4">Wij verwerken deze gegevens uitsluitend voor:</p>
        <ul class="list-disc ml-6 mb-6">
          <li><strong>Leadgeneratie:</strong> Het matchen van uw aanvraag met maximaal 3 gecertificeerde installatiepartners in uw regio (Rechtsgrond: Toestemming).</li>
          <li><strong>Analyses:</strong> Het optimaliseren van onze rekentool op basis van geaggregeerde, geanonimiseerde data (Rechtsgrond: Gerechtvaardigd belang).</li>
          <li><strong>Affiliate tracking:</strong> Het registreren van kliks naar partnersites om onze gratis dienstverlening te financieren (Rechtsgrond: Toestemming via cookiebanner).</li>
        </ul>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">4. Delen met derden</h2>
        <p class="mb-4">Uw contactgegevens worden enkel gedeeld met geselecteerde installatiepartners nadat u hiertoe specifiek opdracht heeft gegeven via de offerte-knop. Wij verkopen uw data nooit aan advertentienetwerken voor andere doeleinden dan uw energie-opslag aanvraag.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">5. Bewaartermijn en Uw rechten</h2>
        <p class="mb-4">Wij bewaren uw gegevens niet langer dan noodzakelijk voor de afwikkeling van de offerte-match. Onder de AVG heeft u recht op inzage, correctie, verwijdering, en overdraagbaarheid van uw gegevens. Tevens kunt u uw toestemming op elk moment intrekken.</p>
      </div>`
  },
  cookies: {
    id: 'cookies',
    title: 'Cookiebeleid',
    content: `
      <div class="prose max-w-none text-gray-300">
        <p class="mb-6 text-lg">Wij gebruiken cookies om de gebruikerservaring te verbeteren en ons platform kosteloos aan te bieden aan consumenten.</p>
        
        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">Functionele Cookies</h2>
        <p class="mb-4">Noodzakelijk voor de basisfunctionaliteit van de calculator. Deze onthouden uw technische invoer tijdens uw bezoek.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">Analytische Cookies</h2>
        <p class="mb-4">Wij gebruiken geanonimiseerde statistieken om te begrijpen hoe onze gidsen worden gelezen en waar gebruikers extra uitleg nodig hebben.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">Affiliate & Tracking Cookies</h2>
        <p class="mb-4">Als onafhankelijk platform worden wij vergoed door partners (zoals via Daisycon) wanneer u een aankoop doet of offerte aanvraagt via onze links. Deze cookies registreren enkel dát er een conversie heeft plaatsgevonden vanaf ons platform, zonder direct herleidbare persoonsgegevens te verzenden naar deze netwerken.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">Beheer</h2>
        <p class="mb-4">U kunt cookies te allen tijde weigeren of verwijderen via uw browserinstellingen. Houd er rekening mee dat de rekentools dan mogelijk niet correct functioneren.</p>
      </div>`
  },
  voorwaarden: {
    id: 'voorwaarden',
    title: 'Algemene Voorwaarden',
    content: `
      <div class="prose max-w-none text-gray-300">
        <h2 class="text-white text-2xl font-black uppercase italic mb-4 tracking-tight">1. Dienstverlening en Informatief Karakter</h2>
        <p class="mb-4">De Thuisbatterij Wijzer biedt onafhankelijk advies en rekentools voor energie-opslag. Alle getoonde besparingen, terugverdientijden en rendementen zijn indicatief, gebaseerd op actuele marktdata van 2025, en vormen geen garantie voor toekomstige resultaten.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">2. Rol als Tussenpersoon</h2>
        <p class="mb-4">Wij treden uitsluitend op als informatieplatform en tussenpersoon voor leadgeneratie. De uiteindelijke overeenkomst voor aankoop en installatie sluit u direct met de geselecteerde installatiepartner. Wij zijn niet aansprakelijk voor de kwaliteit van de geleverde hardware of installatiewerkzaamheden.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">3. Affiliate en Partner Disclosure</h2>
        <p class="mb-4">Wij zijn volledig transparant over ons verdienmodel: wij ontvangen vergoedingen van onze partners voor succesvolle leads of aankopen via affiliate links. Dit heeft geen invloed op de technische integriteit van onze rekenmodellen, welke gebaseerd zijn op objectieve parameters zoals EPEX-prijzen en batterij-efficiëntie.</p>

        <h2 class="text-white text-2xl font-black uppercase italic mt-10 mb-4 tracking-tight">4. Gebruik van AI-Advies</h2>
        <p class="mb-4">Onze AI-gegenereerde adviezen zijn bedoeld ter ondersteuning van uw besluitvorming maar vervangen nooit het technisch ontwerp van een gecertificeerd installateur ter plaatse.</p>
      </div>`
  }
};
