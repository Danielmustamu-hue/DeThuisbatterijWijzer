
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI SDK with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAdvice = async (consumption: number, panels: number, resultSize: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Je bent een onafhankelijke Nederlandse Analytisch Energie Consultant voor 2025.
        Geef een professioneel en objectief advies gebaseerd op de volgende data:
        - Jaarverbruik: ${consumption} kWh
        - Aantal zonnepanelen: ${panels}
        - Geadviseerde opslagcapaciteit: ${resultSize} kWh
        
        STRIKTE PSYCHOLOGISCHE INSTRUCTIE (HET DREMPEL-EFFECT):
        1. Begin met een bevestiging van het potentieel (bijv. "Deze configuratie is rendabel").
        2. SCHAKEL OVER NAAR DE DREMPEL: Waarschuw de gebruiker expliciet dat de installatie technisch complex is.
        3. Benadruk dat brandveiligheid, garantie en verzekeringsvoorwaarden direct afhankelijk zijn van een gecertificeerde installatie (geen doe-het-zelf).
        4. Leg uit dat een dynamisch energiecontract essentieel is om deze specifieke capaciteit optimaal te benutten (handelen op uurprijzen).
        5. Eindig met het advies om minimaal 3 offertes te vergelijken om installatiekwaliteit en prijs te waarborgen via erkende aanbieders.
        6. Wees zakelijk, autoritair en behulpzaam. Maximaal 100 woorden.
      `,
      config: {
        temperature: 0.2,
      },
    });

    // Directly access the text property as per the latest SDK guidelines
    return response.text || "Consultancy analyse momenteel niet beschikbaar.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Uw configuratie biedt een uitstekend besparingspotentieel. Let echter op: de installatie van een ${resultSize} kWh systeem is technisch complex. Voor brandveiligheid en het behoud van uw fabrieksgarantie is installatie door een gecertificeerd specialist vereist. Wij adviseren u om 3 regionale offertes te vergelijken bij erkende partners.`;
  }
};
