import React from 'react';
import { timeWithZero } from '../../utils/utils';
import classNames from 'classnames';

export default function FlifgtInfo({
  term,
  timeToStand,
  timeLandFact,
  'airportFromID.name_en': airportFrom,
  'airportToID.city_en': airportTo,
  logo,
  airline: {
    en: { name: airlineName },
  },
  fltNo,
  'carrierID.IATA': carrier,
  dashBoardMode,
}) {
  const localTime = timeWithZero(timeToStand);
  const departureTime = timeWithZero(timeLandFact);
  const logoBaseUrl = 'https://api.iev.aero';
  const terminalClass = 'flight-info__terminal_' + term;
  const airport = dashBoardMode === 'departure' ? airportTo : airportFrom;
  return (
    <tr className="flight-info">
      <td className="flight-info__text">
        <span className={classNames('flight-info__terminal', terminalClass)}> {term} </span>
      </td>
      <td className="flight-info__text">{localTime}</td>
      <td className="flight-info__text">
        <span> {airport} </span>
      </td>
      <td className="flight-info__text">
        <div>{`Departed at ${departureTime}`}</div>
      </td>
      <td className="flight-info__text">
        <div className="flight-info__logo">
          <img src={logoBaseUrl + logo} alt={airlineName} />
          <p className="flight-info__company-name">{airlineName}</p>
        </div>
      </td>
      <td className="flight-info__text">
        <span> {carrier + fltNo} </span>
      </td>

      <td className="details-field">
        <div>
          <a href="#" className="">
            Flight details
          </a>
        </div>
      </td>
    </tr>
  );
}
