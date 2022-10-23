import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { calendarDatesToShow } from '../../utils/calendar.utils';
import Calendar from 'react-calendar';
import * as Actions from '../actions/calendar.actions';
import { dateSelector, visibilitySelector } from '../actions/calendar.selectors';
import { connect } from 'react-redux';
import { getAllFlights } from '../actions/dashboard.actions';
import { useEffect } from 'react';
import { formatDate, isDatesEqual, setCalendarIconText } from '../../utils/utils';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function CalendarWrap({
  setCalendarVisible,
  changeDate,
  setCalendarInvisible,
  date,
  isVisible,
  updateFlightList,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { today, yesterday, tomorrow } = calendarDatesToShow();
  const ref = useOutsideClick(setCalendarInvisible);
  function calendarIconClick(event) {
    event.stopPropagation();
    setCalendarVisible();
  }
  function calendarDateChanged(value) {
    searchParams.delete('date');
    searchParams.append('date', formatDate(value));
    searchParams.sort();
    setSearchParams(searchParams);
    changeDate(value);
  }
  useEffect(() => {
    updateFlightList(date);
  }, [date]);

  return (
    <ul className="calendar">
      <li className="calendar__item calendar__item_active">
        <span className="calendar__item__date">{setCalendarIconText(date)}</span>
        <FontAwesomeIcon icon={faCalendar} className="calendar__icon" onClick={calendarIconClick} />
        {isVisible && (
          <Calendar
            inputRef={ref}
            className={'flights__calendar'}
            locale={'en-EN'}
            onChange={value => calendarDateChanged(value)}
            onClick={() => alert('click')}
            defaultValue={date}
          />
        )}
      </li>
      <li
        className={classNames('calendar__item', {
          calendar__item_active: isDatesEqual(date, yesterday),
        })}
        onClick={() => calendarDateChanged(yesterday)}
      >
        <span className="calendar__item__date">{setCalendarIconText(yesterday)}</span>
        <span className="calendar__item__day">yesterday</span>
        <hr className="calendar__item__line"></hr>
      </li>
      <li
        className={classNames('calendar__item', {
          calendar__item_active: isDatesEqual(date, today),
        })}
        onClick={() => calendarDateChanged(today)}
      >
        <span className="calendar__item__date">{setCalendarIconText(today)}</span>
        <span className="calendar__item__day">today</span>
        <hr></hr>
      </li>
      <li
        className={classNames('calendar__item', {
          calendar__item_active: isDatesEqual(date, tomorrow),
        })}
        onClick={() => calendarDateChanged(tomorrow)}
      >
        <span className="calendar__item__date">{setCalendarIconText(tomorrow)}</span>
        <span className="calendar__item__day">tomorrow</span>
        <hr />
      </li>
    </ul>
  );
}

const mapDispatch = {
  setCalendarVisible: Actions.setVisible,
  setCalendarInvisible: Actions.setInvisible,
  changeDate: Actions.setDate,
  updateFlightList: getAllFlights,
};

const mapState = state => {
  return { date: dateSelector(state), isVisible: visibilitySelector(state) };
};

export default connect(mapState, mapDispatch)(CalendarWrap);

const useOutsideClick = callback => {
  const ref = React.useRef();
  React.useEffect(() => {
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);
  return ref;
};

CalendarWrap.propTypes = {
  setCalendarVisible: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  setCalendarInvisible: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  updateFlightList: PropTypes.func.isRequired,
};
