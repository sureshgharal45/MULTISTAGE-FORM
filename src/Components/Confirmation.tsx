import * as React from 'react';
// styles
import "./Confirmation.css";

// assets
const circleCheck = require("../assets/images/icon-thank-you.svg");

const Confirmation = () => {
  return (
    <div className="wrapper">
      <img src={circleCheck} alt="" />
      <h1>Thank you!</h1>
      <p className="muted">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default Confirmation;