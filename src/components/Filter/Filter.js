import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={css.filter__box}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          placeholder="Enter name to find"
          onChange={onChangeFilter}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
