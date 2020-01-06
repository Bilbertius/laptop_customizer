import React from 'react';
import Summary from './Summary';
import Total from './Total';

function Cart(props) {
    return <section className="main__summary">
    <h2>Your cart</h2>
    <Summary 
       selection={props.selection} 
    />
    <Total
        selection={props.selection}
    />
  </section>
} 

export default Cart