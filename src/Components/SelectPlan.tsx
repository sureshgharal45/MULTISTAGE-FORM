import * as React from 'react';
import { FormItems, planOptions } from "../App";
// styles
import "./FormStep.css";

// assets
const arcade = require("../assets/images/icon-arcade.svg");
const advanced = require("../assets/images/icon-advanced.svg");
const pro = require("../assets/images/icon-pro.svg");

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const SelectPlan = ({ plan, planLength, updateForm }: StepProps) => {
  return (
    <div className="wrapper">
      <h2>Select your plan</h2>
      <p className="muted">You have the option of monthly or yearly billing.</p>
      <div className="radio-wrapper">
        <div className="radio">
          <img src={arcade} alt="arcade" />
          <label htmlFor="Arcade">
            <p><strong>Arcade</strong></p>
            <p className="muted">
              $
              {!planLength
                ? planOptions.Arcade.monthly
                : planOptions.Arcade.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          {planLength && <p>2 months free</p>}
          </label>
          <input
            id="Arcade"
            name="plan"
            type="radio"
            checked={plan === "Arcade"}
            onChange={(e) => updateForm({ plan: "Arcade" })}
          />
        </div>
        <div className="radio">
          <img src={advanced} alt="game controller" />
          <label htmlFor="Advanced">
            <p><strong>Advanced</strong></p>
            <p className="muted">
              $
              {!planLength
                ? planOptions.Advanced.monthly
                : planOptions.Advanced.yearly}
              /{!planLength ? "mo" : "yr"}
            </p>
          {planLength && <p>2 months free</p>}
          </label>
          <input
            id="Advanced"
            name="plan"
            type="radio"
            checked={plan === "Advanced"}
            onChange={(e) => updateForm({ plan: "Advanced" })}
          />
        </div>
        <div className="radio">
          <img src={pro} alt="arcade controller" />
          <label htmlFor="Pro">
            <p><strong>Pro</strong></p>
            <p className="muted">
              ${!planLength ? planOptions.Pro.monthly : planOptions.Pro.yearly}/
              {!planLength ? "mo" : "yr"}
            </p>
            {planLength && <p>2 months free</p>}
          </label>
          <input
            id="Pro"
            name="plan"
            type="radio"
            checked={plan === "Pro"}
            onChange={(e) => updateForm({ plan: "Pro" })}
          />
        </div>
      </div>
      <div className="toggle">
        <label>
          <span>Monthly</span>
          <input
            type="checkbox"
            name="planLength"
            checked={planLength}
            onChange={(e) => updateForm({ planLength: e.target.checked })}
          />
          <div className="fake-toggle"></div>
          <span>Yearly</span>
        </label>
      </div>
    </div>
  );
};
export default SelectPlan;