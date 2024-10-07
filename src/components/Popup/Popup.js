import React, { useState } from 'react';
import './Popup.scss';

const Popup = ({ show, togglePopup, total }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    show && (
      <div className="popup">
        <div className="popup-content">
          <h2>Payment</h2>
          <p>Total: ${total}</p>
          <div className="payment-methods">
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="cash" 
                checked={paymentMethod === 'cash'}
                onChange={() => handlePaymentMethodChange('cash')} 
              />
              Cash
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="bank" 
                checked={paymentMethod === 'bank'}
                onChange={() => handlePaymentMethodChange('bank')} 
              />
              Bank Transfer
            </label>
          </div>
          {paymentMethod === 'bank' && (
            <div className="qr-code">
              <img src="https://via.placeholder.com/150" alt="QR Code" />
              <p>Scan the QR code to pay</p>
            </div>
          )}
          <button onClick={togglePopup}>Close</button>
        </div>
      </div>
    )
  );
};

export default Popup;
