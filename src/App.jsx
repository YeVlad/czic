import "./App.css";
import carImage from "./imgs/car.png";

function App() {
  const dystansKM = 400;
  const iloscPaliwaL = 300;
  const zuzycieLitrowNaKM = 1;
  const szybkoscKMprzezGodzine = 19;

  let czas;
  let wniosek;
  let jazda = 0;

  if (iloscPaliwaL / zuzycieLitrowNaKM >= dystansKM) {
    czas = (dystansKM / szybkoscKMprzezGodzine).toFixed(2); // .toFixed(2) - dwa znaki po przecinku
    wniosek = "Pojazd dotarł. Jechał (" + czas + ") godzin";

    jazda = 600;
  } else {
    wniosek = "Paliwa nie wystarczyło :(";

    jazda = (iloscPaliwaL / zuzycieLitrowNaKM / dystansKM) * 600;
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
      <div
        style={{
          width: 800,
          borderBottom: "3px solid black",
          marginLeft: 30,
        }}
      >
        <p>{(jazda / 600).toFixed(4) * 100}%</p>
        <img
          src={carImage}
          alt="car"
          style={{ width: 200, paddingLeft: jazda }}
        />
      </div>
    </>
  );
}

export default App;
