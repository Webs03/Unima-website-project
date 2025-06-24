import React, { useState } from 'react';

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    program: '',
    background: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!\n\n" + JSON.stringify(formData, null, 2));
    // Optional: send formData to backend API
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      program: '',
      background: ''
    });
  };

  return (
    <div className="section">
    <div id="bas">
      <h1><strong class="webs">University Of Malawi</strong></h1>
        <h1 class="web">Application Form</h1> 
        </div>
      <form className="apply-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Program --</option>
          <option value="Information Systems">Information Systems</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Law">Law</option>
          <option value="Public Health">Netwwork Engineering</option>
          <option value="Education">Acturial Sciences</option>
          <option value="Education">Education</option>
        </select>

        <textarea
          name="background"
          rows="4"
          placeholder="Brief Academic Background"
          value={formData.background}
          onChange={handleChange}
          required
        ></textarea>

        <div className="btn-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}
