import React, { useRef } from 'react';
import SearchIcon from './SearchIcon';
import * as Actions from '../actions/search.actions';
import { connect } from 'react-redux';

function Search({ setSearchString }) {
  const textBoxRef = useRef(null);
  function submitHandle(event) {
    event.preventDefault();
    setSearchString(textBoxRef.current.value);
  }
  return (
    <>
      <h2 className="search-flights__title">SEARCH FLIGHT</h2>
      <form name="search-flights__form" action="" onSubmit={submitHandle}>
        <SearchIcon />
        <input
          className="search-flights__input"
          type="text"
          placeholder="Airline, destination or flight #"
          ref={textBoxRef}
        />
        <button className="search-flights__button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

const mapDispatch = {
  setSearchString: Actions.setSearchString,
};
export default connect(null, mapDispatch)(Search);
