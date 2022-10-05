import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { calendarDatesToShow } from './calendar.utils';
// import { useState } from 'react';
import Calendar from 'react-calendar';
import * as Actions from '../../actions/calendar.actions';
import { dateSelector, visibilitySelector } from '../../actions/calendar.selectors';
import { connect } from 'react-redux';

function CalendarWrap({ setCalendarVisible, changeDate, setCalendarInvisible, date, isVisible }) {
  const { today, yesterday, tomorrow } = calendarDatesToShow();
  // const [showCalendar, setCalendarVisibility] = useState(false);

  return (
    <ul className="calendar">
      <li className="calendar__item calendar__item_active">
        <span className="calendar__item__date">{today}</span>
        <FontAwesomeIcon
          icon={faCalendar}
          className="calendar__icon"
          onClick={setCalendarVisible}
        />
        {isVisible && (
          <Calendar
            className={'flights__calendar'}
            locale={'en-EN'}
            onChange={value => changeDate(value)}
            onClick={() => alert('click')}
          />
        )}
      </li>
      <li className="calendar__item">
        <span className="calendar__item__date">{yesterday}</span>
        <span className="calendar__item__day">yesterday</span>
        <hr className="calendar__item__line"></hr>
      </li>
      <li className="calendar__item">
        <span className="calendar__item__date">{today}</span>
        <span className="calendar__item__day">today</span>
        <hr></hr>
      </li>
      <li className="calendar__item">
        <span className="calendar__item__date">{tomorrow}</span>
        <span className="calendar__item__day">tomorrow</span>
        <hr></hr>
      </li>
    </ul>
  );
}

const mapDispatch = {
  setCalendarVisible: Actions.setVisible,
  setCalendarInvisible: Actions.setInvisible,
  changeDate: Actions.setDate,
};

const mapState = state => {
  return { date: dateSelector(state), isVisible: visibilitySelector(state) };
};

export default connect(mapState, mapDispatch)(CalendarWrap);
