import React from 'react';

export function FlifgtInfo({
  term,
  timeToStand,
  timeLandFact,
  'airportFromID.name_en': airport,
  logo,
  airline: {
    en: { name: airlineName },
    fltNo,
  },
  fltNo,
  'carrierID.IATA': carrier,
}) {
  return (
    <tr class="flight-info">
      <td class="flight-info__text">
        <span class="flight-info__terminal"> {term} </span>
      </td>
      <td class="flight-info__text">4:45</td>
      <td class="flight-info__text">
        <span> Antalya </span>
      </td>
      <td class="flight-info__text">
        <div>Departed at 4:49</div>
      </td>
      <td class="flight-info__text">
        <div class="flight-info__logo">
          <img
            src="https://api.iev.aero/media/airline/files/604bbdf45b1ad855035563.png"
            alt="Bees Airline"
          />
          <p class="flight-info__company-name">Bees Airline</p>
        </div>
      </td>
      <td class="flight-info__text">
        <span> 7B9021 </span>
      </td>

      <td class="details-field">
        <div style="min-width: 150px">
          <a href="#" class="">
            Flight details
          </a>
        </div>
      </td>
    </tr>
  );
}
