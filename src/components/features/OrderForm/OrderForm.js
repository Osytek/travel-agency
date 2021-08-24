import {Row, Col} from 'react-flexbox-grid';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';

class OrderForm extends React.Component {
  render(){
    const {tripCost, options, setOrderOption} = this.props;

    return(
      <Row>
        {pricing.map(pricing => (
          <Col md={4} key ={pricing.id}>
            <OrderOption {...pricing} currentValue={options[pricing.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} tripOptions={options}></OrderSummary>
        </Col>
      </Row>
    );
  }
}
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.string,
};
export default OrderForm;
