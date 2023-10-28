import * as React from 'react';
import { FormItems, planOptions } from "../App";

// styles
import "./FormStep.css";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const FinishingUp = ({
  planLength,
  plan,
  updateForm,
  isCustomizableProfile,
  isLargerStorage,
  isOnlineService,
}: StepProps) => {
  // grab values for every true boolean
  // add yearly/monthly plan value
  // reduce to final value
  const planTotal = !planLength
    ? planOptions[plan].monthly
    : planOptions[plan].yearly;

  const addOnTotal = [
    isCustomizableProfile,
    isLargerStorage,
    isOnlineService,
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc;
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ] as "customizableProfile" | "largerStorage" | "onlineServices";
    const planName = !planLength ? "monthly" : "yearly";
    const numToAdd = planOptions[name][planName];
    return acc + numToAdd;
  }, 0);

  return (
    <div className="wrapper">
      <h2>Finishing up</h2>
      <p className="muted">
        Double-check everything looks OK before confirming.
      </p>
      <div className="chart">
        <div className="row">
          <div
            style={{
              display: "grid",
            }}
          >
            {plan} {planLength ? "(Yearly)" : "(Monthly)"}
            <button
              type="button"
              className="change"
              onClick={() => updateForm({ planLength: !planLength })}
            >
              Change
            </button>
          </div>
          <div>
            $
            {!planLength ? planOptions[plan].monthly : planOptions[plan].yearly}
            /{!planLength ? "mo" : "yr"}
          </div>
        </div>
        <div className="line"></div>
        {isOnlineService && (
          <div className="row">
            <div>
              <p className="muted">Online Service</p>
            </div>
            <div>
              $
              {!planLength
                ? planOptions.onlineServices.monthly
                : planOptions.onlineServices.yearly}
              /{!planLength ? "mo" : "yr"}
            </div>
          </div>
        )}
        {isLargerStorage && (
          <div className="row">
            <div>
              <p className="muted">Larger Storage</p>
            </div>
            <div>
              $
              {!planLength
                ? planOptions.largerStorage.monthly
                : planOptions.largerStorage.yearly}
              /{!planLength ? "mo" : "yr"}
            </div>
          </div>
        )}
        {isCustomizableProfile && (
          <div className="row">
            <div>
              <p className="muted">Customizable Profile</p>
            </div>
            <div>
              $
              {!planLength
                ? planOptions.customizableProfile.monthly
                : planOptions.customizableProfile.yearly}
              /{!planLength ? "mo" : "yr"}
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div>
          <p className="muted">Total (per year)</p>
        </div>
        <div className="accent">
          <p>
            {" "}
            <strong>
              ${planTotal + addOnTotal}/{!planLength ? "mo" : "yr"}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default FinishingUp;