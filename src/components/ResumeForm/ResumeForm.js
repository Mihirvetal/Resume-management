import React, { useState, useContext } from 'react';
import ResumeContext from '../../context/ResumeContext';
import './ResumeForm.css';

const ResumeForm = () => {
  const { addResume } = useContext(ResumeContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', skills: [] });
  const [error, setError] = useState('');

  const skillsOptions = ['JavaScript', 'React', 'Node.js', 'Python'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillsChange = (e) => {
    const selectedSkills = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, skills: selectedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email.includes('@') || formData.phone.length !== 10) {
      setError('Please fill all fields correctly.');
      return;
    }
    addResume(formData);
    setFormData({ name: '', email: '', phone: '', skills: [] });
    setError('');
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
      <select multiple className="skill" onChange={handleSkillsChange} value={formData.skills} required>
        {skillsOptions.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="submitbtn">Add Resume</button>
    </form>
  );
};

export default ResumeForm;
