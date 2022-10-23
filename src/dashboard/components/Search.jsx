import React, { useRef, useState, useEffect } from 'react';
import { useSearchParams, redirect } from 'react-router-dom';
import SearchIcon from './iconComponents/SearchIcon';
import * as Actions from '../actions/search.actions';
import { connect } from 'react-redux';
import { modeSelector } from '../actions/mode.selectors';
import { searchTextSelector } from '../actions/search.selectors';
import PropTypes from 'prop-types';

function Search({ setSearchString, displayMode, searchString = '' }) {
  const textBoxRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchString);
  useEffect(() => setInputValue(searchString), [searchString]);
  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function submitHandle(event) {
    event.preventDefault();
    const searchText = textBoxRef.current.value;
    setSearchString(searchText);
    redirect(`/${displayMode}`);
    searchParams.delete('search');
    if (searchText) {
      searchParams.set('search', searchText);
    }
    searchParams.sort();
    setSearchParams(searchParams);
  }
  return (
    <div>
      <h2 className="search-flights__title">SEARCH FLIGHT</h2>
      <form name="search-flights__form" action="" onSubmit={submitHandle}>
        <i className="search-flights__icon-container">
          <SearchIcon />
        </i>
        <input
          className="search-flights__input"
          type="text"
          placeholder="Airline, destination or flight #"
          ref={textBoxRef}
          value={inputValue}
          onChange={e => inputChangeHandler(e)}
        />

        <button className="search-flights__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

const mapDispatch = {
  setSearchString: Actions.setSearchString,
};
const mapState = state => {
  return {
    displayMode: modeSelector(state),
    searchString: searchTextSelector(state),
  };
};
export default connect(mapState, mapDispatch)(Search);
Search.propTypes = {
  setSearchString: PropTypes.func,
  displayMode: PropTypes.oneOf(['departure', 'arrival']),
  searchString: PropTypes.string,
};
