import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon.js';
import PropTypes from 'prop-types';

class OrderOptionIcons extends React.Component {
  render(){
    const {values, setOptionValue, required, currentValue} = this.props;
    return(
      <div className={styles.component}>
        {required ? '' : (
          <div value=''>none</div>
        )}
        {values.map(value => (
          <div className={currentValue === value.id ? styles.iconActive : styles.icon} 
            key={value.id} 
            onClick={event => setOptionValue(event.currentTarget.id)}
            value={value.id}>
            <Icon name={value.icon}/>
            {value.name}
            ({formatPrice(value.price)})
          </div>
        ))}
      </div>
    );
  }
}
OrderOptionIcons.propTypes = {
  values: PropTypes.node,
  setOptionValue: PropTypes.node,
  required: PropTypes.node,
  currentValue: PropTypes.string,
};
export default OrderOptionIcons;