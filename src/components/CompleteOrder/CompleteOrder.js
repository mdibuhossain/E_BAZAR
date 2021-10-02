import React from 'react';
import './CompleteOrder.css';
import img from '../../images/giphy.gif';

const CompleteOrder = () => {
    return (
        <div className="complete-order-container">
            <img src={img} alt="order complete" className="smile-img" />
        </div>
    );
};

export default CompleteOrder;