import React from 'react';
import { timeWithZero } from '../../utils/utils';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function FlifgtInfo({
  term,
  timeLandFact,
  'airportFromID.city_en': airportFrom,
  'airportToID.city_en': airportTo,
  logo,
  airline: {
    en: { name: airlineName, logoSmallName },
  },
  fltNo,
  'carrierID.IATA': carrier,
  dashBoardMode,
  timeDepShedule,
  timeTakeofFact,
  timeToStand,
}) {
  const logoBaseUrl = 'https://api.iev.aero';

  const terminalClass = 'flight-info__terminal_' + term;
  const [airport, mode, localTime, factTime] =
    dashBoardMode === 'departure'
      ? [airportTo, 'Departed', timeDepShedule, timeTakeofFact]
      : [airportFrom, 'Landed', timeToStand, timeLandFact];
  return (
    <tr className="flight-info">
      <td className="flight-info__text">
        <span className={classNames('flight-info__terminal', terminalClass)}> {term} </span>
      </td>
      <td className="flight-info__text">{timeWithZero(localTime)}</td>
      <td className="flight-info__text">
        <span> {airport} </span>
      </td>
      <td className="flight-info__text">
        <div>{factTime ? `${mode} at ${timeWithZero(factTime)}` : 'Cancelled'}</div>
      </td>
      <td className="flight-info__text">
        <div className="flight-info__logo">
          <img src={logoSmallName || logoBaseUrl + logo} alt={airlineName} />
          <p className="flight-info__company-name">{airlineName}</p>
        </div>
      </td>
      <td className="flight-info__text">
        <span> {carrier + fltNo} </span>
      </td>

      <td>
        <div>
          <a href="#">Flight details</a>
        </div>
      </td>
    </tr>
  );
}

FlifgtInfo.propTypes = {
  term: PropTypes.string,
  timeLandFact: PropTypes.string,
  airportFrom: PropTypes.string,
  airportTo: PropTypes.string,
  logo: PropTypes.string,
  airlineName: PropTypes.string,
  logoSmallName: PropTypes.string,
  fltNo: PropTypes.string,
  carrier: PropTypes.string,
  dashBoardMode: PropTypes.oneOf(['departure', 'arrival']),
  timeDepShedule: PropTypes.string,
  timeTakeofFact: PropTypes.string,
  timeToStand: PropTypes.string,
};
