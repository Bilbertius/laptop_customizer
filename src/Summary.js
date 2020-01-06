import React from 'react';
import {USCurrencyFormat} from './resources';

function Summary (props) {
    return Object.keys(props.selection).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = props.selection[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
}

export default Summary