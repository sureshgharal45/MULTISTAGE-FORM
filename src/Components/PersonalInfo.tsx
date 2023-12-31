import * as React from 'react';
import { FormItems } from "../App";

import "./FormStep.css";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PersonalInfo = ({ name, email, phone, updateForm }: StepProps) => {
  return (
    <div className="wrapper">
      <h2>Personal Info</h2>
      <p className="muted"> Please provide your name, email address, and phone number.</p>
      <div className="grid-sm">
        <label htmlFor="name" className='heading'>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          required
          onChange={(e) => updateForm({ name: e.target.value })}
          autoFocus
          autoComplete="name"
          placeholder="e.g. Stephen King"
        />
      </div>

      <div className="grid-sm">
        <label htmlFor="email" className='heading'>Email Address</label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          name="email"
          value={email}
          required
          onChange={(e) => updateForm({ email: e.target.value })}
          placeholder="  e.g. stephenking@lorem.com"
        />
      </div>

      <div className="grid-sm">
        <label htmlFor="phone" className='heading'>Phone Number</label>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          required
          onChange={(e) => updateForm({ phone: e.target.value })}
        />
      </div>
    </div>
  );
};
export default PersonalInfo;