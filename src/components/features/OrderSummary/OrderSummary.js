import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
  render(){
    console.log(this.props);
    return(
      <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(formatPrice(this.props.tripCost), this.props.tripOptions))}</strong></h2>
    );
  }
}
OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  tripOptions: PropTypes.object,
  props: PropTypes.node,
};
export default OrderSummary;
