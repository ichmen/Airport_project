import React, { useRef } from 'react';
import { useSearchParams, useNavigate, redirect } from 'react-router-dom';
import SearchIcon from './SearchIcon';
import * as Actions from '../actions/search.actions';
import { connect } from 'react-redux';
import { modeSelector } from '../actions/mode.selectors';

function Search({ setSearchString, displayMode }) {
  const textBoxRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function submitHandle(event) {
    event.preventDefault();
    const searchText = textBoxRef.current.value;
    redirect(`/${displayMode}`);
    setSearchString(searchText);
    console.log();
    if (searchText) {
      searchParams.set('search', searchText);
      // console.log(searchParams);
      setSearchParams(searchParams);
    } else {
      setSearchParams();
    }
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

        {/* <Link to={`/departures${value ? `?search=${value}` : ''}`}> */}
        <button className="search-flights__button" type="submit">
          Search
        </button>
        {/* </Link> */}
      </form>
    </>
  );
}

const mapDispatch = {
  setSearchString: Actions.setSearchString,
};
const mapState = state => {
  return {
    displayMode: modeSelector(state),
  };
};
export default connect(mapState, mapDispatch)(Search);
