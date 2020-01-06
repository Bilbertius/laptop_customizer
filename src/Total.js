import React from 'react';
import {USCurrencyFormat} from './resources';

function Total (props) {
    const total = Object.keys(props.selection).reduce(
        (acc, curr) => acc + props.selection[curr].cost,
        0
      );  
    return <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
      {USCurrencyFormat.format(total)}
    </div>
  </div>
}

export default Total