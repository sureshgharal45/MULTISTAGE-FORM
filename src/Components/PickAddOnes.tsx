import * as React from 'react';
import { FormItems, planOptions } from "../App";

// styles
import "./FormStep.css";

// assets
// import check from "../assets/images/icon-checkmark.svg";
const check = require("../assets/images/icon-checkmark.svg");

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PickAddOns = ({
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  updateForm,
  planLength,
}: StepProps) => {
  return (
    <div className="wrapper">
      <h2>Pick add-ons</h2>
      <p className="muted">Add-ons help enhance your gaming experience.</p>
      <div className="radio-wrapper">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            name="isOnlineService"
            id="isOnlineService"
            checked={isOnlineService}
            onChange={(e) => updateForm({ isOnlineService: e.target.checked })}
          />
          <label htmlFor="isOnlineService" className="checkbox-label">
            <div className="checkbox">
              <img src={check} alt="" />
            </div>
            <div className="label-group">
              <div>
                <h3>Online service</h3>
                <p className="muted">Access to multiplayer games</p>
              </div>
              <p className="accent">
                +$
                {!planLength
                  ? planOptions.onlineServices.monthly
                  : planOptions.onlineServices.yearly}
                /{!planLength ? "mo" : "yr"}
              </p>
            </div>
          </label>
        </div>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            name="isLargerStorage"
            id="isLargerStorage"
            checked={isLargerStorage}
            onChange={(e) => updateForm({ isLargerStorage: e.target.checked })}
          />
          <label htmlFor="isLargerStorage" className="checkbox-label">
            <div className="checkbox">
              <img src={check} alt="" />
            </div>
            <div className="label-group">
              <div>
                <h3>Larger storage</h3>
                <p className="muted">Extra 1TB of cloud save</p>
              </div>
              <p className="accent">
                +$
                {!planLength
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly}
                /{!planLength ? "mo" : "yr"}
              </p>
            </div>
          </label>
        </div>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            name="isCustomizableProfile"
            id="isCustomizableProfile"
            checked={isCustomizableProfile}
            onChange={(e) =>
              updateForm({ isCustomizableProfile: e.target.checked })
            }
          />
          <label
            htmlFor="isCustomizableProfile"
            className="checkbox-label"
          >
            <div className="checkbox">
              <img src={check} alt="" />
            </div>
            <div className="label-group">
              <div>
                <h3>Customize Profile</h3>
                <p className="muted">Custom theme on your profile</p>
              </div>
              <p className="accent">
                +$
                {!planLength
                  ? planOptions.customizableProfile.monthly
                  : planOptions.customizableProfile.yearly}
                /{!planLength ? "mo" : "yr"}
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default PickAddOns;