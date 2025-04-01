import "./App.css";

function App() {
  const dystansKM = 23;
  const iloscPaliwaL = 720;
  const zuzycieLitrowNaKM = 5;
  const szybkoscKMprzezGodzine = 19;

  let czas;
  let wniosek;

  if (iloscPaliwaL / zuzycieLitrowNaKM >= dystansKM) {
    czas = (dystansKM / szybkoscKMprzezGodzine).toFixed(2); // .toFixed(2) - dwa znaki po przecinku
    wniosek = "Pojazd dotarł. Jechał (" + czas + ") godzin";
  } else {
    wniosek = "Paliwa nie wystarczyło :(";
  }

  return (
    <>
      <h2>Dane</h2>
      <ul>
        <li>Dystancja (Km): {dystansKM}</li>
        <li>Ilość paliwa (L): {iloscPaliwaL}</li>
        <li>Zużycie paliwa (L/Km): {zuzycieLitrowNaKM}</li>
        <li>Szybkość pojazdu (Km/Godz): {szybkoscKMprzezGodzine}</li>
      </ul>
      <h3>{wniosek}</h3>
    </>
  );
}

export default App;
