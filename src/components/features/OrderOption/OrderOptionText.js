import React from 'react';
import styles from './OrderOption.scss';


class OrderOptionText extends React.Component {
  render(){
    return(
      <div className={styles.number}>
        <input className={styles.inputText} type='text'> 
          
        </input>
      </div>
    );
  }
}

export default OrderOptionText;