import React from 'react';
import styles from './OrderSummary.scss';
import calculateTotal from '../../../utils/calculateTotal.js';
import formatPrice from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
  render(){
    
    return(
      <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(formatPrice(this.props.tripCost), this.props.options))}</strong></h2>
    );
  }
}
OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.node,
  props: PropTypes.node,
};
export default OrderSummary;
