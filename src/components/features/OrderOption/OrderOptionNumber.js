import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

class OrderOptionNumber extends React.Component {
  render(){
    const {currentValue, setOptionValue} = this.props;
    return(
      <div className={styles.number}>
        <input className={styles.inputSmall} 
          type='number' 
          value={currentValue} 
          min='0' max='14' 
          onChange={event => setOptionValue(event.currentTarget.value)}>
        </input>
      </div>
    );
  }
}
OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};
export default OrderOptionNumber;