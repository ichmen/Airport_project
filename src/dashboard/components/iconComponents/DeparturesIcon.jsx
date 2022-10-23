import React from 'react';
import { modeSelector } from '../../actions/mode.selectors';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function DeparturesIcon({ mode }) {
  return (
    <span>
      <svg
        width="40px"
        height="28px"
        viewBox="0 0 40 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -1.000000)" fill="#FFFFFF" fillRule="nonzero">
            <g>
              <path
                className={classNames({ 'active-icon': mode === 'departure' })}
                d="M40.9190312,14.2925525 C40.731055,13.5210761 40.2396434,12.8581323 39.5561585,12.4539552 C38.8726735,12.0497781 38.0549837,11.9385881 37.2883912,12.1455827 L26.8096581,15.0218819 L13.1945082,2 L9.38678826,3.03046545 L17.5564785,17.5510243 L7.75204986,20.2442408 L3.86129243,17.1278331 L1,17.9171897 L4.59162231,24.3200818 L6.11030829,27.0112974 L9.26373268,26.1409043 L19.7414654,23.2656055 L28.3253427,20.9165445 L38.8070772,18.0372439 C40.4055057,17.5625364 41.3397513,15.9060318 40.9190312,14.2925525 Z"
                transform="translate(21.009879, 14.505649) rotate(-4.012171) translate(-21.009879, -14.505649) "
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
}

const mapState = state => {
  return {
    mode: modeSelector(state),
  };
};

export default connect(mapState)(DeparturesIcon);
DeparturesIcon.propTypes = {
  mode: PropTypes.oneOf(['departure', 'arrival']),
};
