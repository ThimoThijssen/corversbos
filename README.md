# Corversbos Routes

Wandelapp voor het Corversbos in Hilversum, in de stijl van Zoek mijn: een pijl wijst je de weg over de bospaden.

**Open op je iPhone:** https://thimothijssen.github.io/corversbos/ en kies *Deel → Zet op beginscherm*.

- Routes met pijl-navigatie, bochtaanwijzingen en gesproken hints
- Speurtocht langs verstopte plekken (warm/koud)
- Zelf routes en speurtochten maken en delen via een link
- Logboek met badges
- Werkt offline: app, GPS, kompas en een eigen kaart van het bos

Kaartgegevens © [OpenStreetMap](https://www.openstreetmap.org/copyright)-bijdragers. Weer via [Open-Meteo](https://open-meteo.com).

## Ontwikkelen

- `www/` — de app zelf (HTML/JS), ook gepubliceerd op GitHub Pages
- `ios/` — native iPhone-app via [Capacitor](https://capacitorjs.com)

```bash
npm install
npm run serve        # website lokaal op http://localhost:8124
npx cap sync ios     # wijzigingen in www/ naar de iPhone-app kopiëren
npx cap open ios     # openen in Xcode en op je iPhone zetten
```
