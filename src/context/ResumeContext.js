import React, { createContext, useState, useEffect } from 'react';

const ResumeContext = createContext();

const  ResumeProvider=({ children })=> {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const storedResumes = localStorage.getItem('resumes');
    if (storedResumes) {
      setResumes(JSON.parse(storedResumes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('resumes', JSON.stringify(resumes));
  }, [resumes]);

  function addResume(resume) {
    const updatedResumes = resumes.concat(resume); 
    setResumes(updatedResumes);
  }

  function deleteResume(index) {
    const updatedResumes = [];
    for (let i = 0; i < resumes.length; i++) {
      if (i !== index) {
        updatedResumes.push(resumes[i]);
      }
    }
    setResumes(updatedResumes);
  }

  return (
    <ResumeContext.Provider value={{ resumes, addResume, deleteResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export { ResumeProvider }; 
export default ResumeContext;