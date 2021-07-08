import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';


const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props.match.params.id);

  return {
    ...options,
    
  };
};

export default connect(mapStateToProps)(OrderForm);
