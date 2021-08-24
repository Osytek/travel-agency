import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

class OrderOptionCheckboxes extends React.Component {
  render(){
    console.log(this.props,'props');
    const {values, setOptionValue, currentValue} = this.props;
    return(
      <div className={styles.checkboxes}>
        {values.map(value => (
          <label
            key={value.id} 
            // eslint-disable-next-line no-unused-vars
            onClick={event => setOptionValue(value.id)}
            value={value.id}>

            <input 
              type='checkbox' 
              value={value.price}
              onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
            >
            </input>

            {value.name}
            ({formatPrice(value.price)})
          </label>
        ))}
      </div>
    );
  }
}
OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;