import * as React from 'react';
import { FormEvent, MouseEvent, useState } from "react";
import "./App.css";
import useMultiForm from "./Hooks/useMultiForm";
import PersonalInfo from "./Components/PersonalInfo";
import SelectPlan from "./Components/SelectPlan";
import PickAddOns from "./Components/PickAddOnes";
import FinishingUp from "./Components/FinishingUp";
import Confirmation from "./Components/Confirmation";
import Button from "./Components/Buttton";

export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  planLength: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  isOnlineService: boolean;
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  isOnlineService: false,
};

const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

function App() {
  const [formData, setFormData] = useState(initialValues);

  const updateForm = (fieldToUpdate: Partial<FormItems>) =>
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }));

  const {
    currentIndex,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    goToSection,
    isConfirmation,
  } = useMultiForm(sideBar.length + 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // if (isLastStep) return alert("congrats something");
    goForwards();
  };

  return (
    <div className="app">
      <aside className="sidebar">
        {sideBar.map((item, index) => (
          <div key={item} className="section">
            <div
              className={`${"num"} ${
                currentIndex === index ? "active" : ""
              }`}
            >
              {index + 1}
            </div>
            <div className="info">
              <p className="stepNum">Step {index + 1}</p>
              <p className="step">{item}</p>
            </div>
          </div>
        ))}
      </aside>
      <form className="form" onSubmit={handleSubmit}>
        {currentIndex === 0 && (
          <PersonalInfo {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 1 && (
          <SelectPlan {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 2 && (
          <PickAddOns {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 3 && (
          <FinishingUp {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 4 && <Confirmation />}
        <div className="steps" hidden={isConfirmation}>
          {!isFirstStep && (
            <Button
              style="back"
              text="Go back"
              type="button"
              onClick={goBackwards}
            />
          )}
          <Button
            style={isLastStep ? "submit" : "default"}
            text={isLastStep ? "Confirm" : "Next Step"}
          />
        </div>
      </form>
    </div>
  );
}

export default App;