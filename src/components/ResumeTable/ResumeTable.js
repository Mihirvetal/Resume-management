import React, { useContext } from 'react';
import ResumeContext from '../../context/ResumeContext';
import './ResumeTable.css';

const ResumeTable = () => {
  const { resumes, deleteResume } = useContext(ResumeContext);
  console.log(resumes);
  return (
    <table className="resume-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Skills</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {resumes.map((resume, index) => (
          <tr key={index}>
            <td>{resume.name}</td>
            <td>{resume.email}</td>
            <td>{resume.phone}</td>
            <td>{resume.skills.join(', ')}</td>
            <td>
              <button onClick={() => deleteResume(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResumeTable;