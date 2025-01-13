import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import ResumeForm from './components/ResumeForm/ResumeForm';
import ResumeTable from './components/ResumeTable/ResumeTable';
import './App.css';

function App() {
  return (
    <ResumeProvider>
      <div className="app-container">
        <h1>Resume Manager</h1>
        <ResumeForm />
        <ResumeTable />
      </div>
    </ResumeProvider>
  );
}

export default App;