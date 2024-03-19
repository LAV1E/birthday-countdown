import "./App.css";
import { useState } from "react";

import useInterval from "./useInterval";
import { countdown } from "./utils";

const DATE = "March 20 , 2024 00:00:5";

export default function App() {
  const [state, setState] = useState(() => countdown(DATE));

  const { textDay, textHour, textMinute, textSecond } = state;

  useInterval(() => setState(countdown(DATE)), 1000);

  return (
    <section className="coming-soon">
      <h2>
         Happy birthday to the strong and determined me 
        <span role="img" aria-label="salute">
          🎉
        </span>
        <span role="img" aria-label="salute-2">
          🎊
        </span>
        <span role="img" aria-label="cake">
          🎂
        </span>
      </h2>
      <div className="countdown">
        <div className="container-day">
          <h3 class="day">Days</h3>
          <h4 className="time-value">{textDay}</h4>
        </div>
        <div className="container-hour">
          <h3 class="hour">Hours</h3>
          <h4 className="time-value">{textHour}</h4>
        </div>
        <div className="container-minute">
          <h3 class="minute">Minutes</h3>
          <h4 className="time-value">{textMinute}</h4>
        </div>
        <div className="container-second">
          <h3 class="second">Seconds</h3>
          <h4 className="time-value">{textSecond}</h4>
        </div>
      </div>
      <img
        className="waiting"
        src="https://media1.tenor.com/m/1LoRNiiNqXgAAAAC/happy-party.gif"
        alt="woman is waiting near calendar"
      />
    </section>
  );
}
