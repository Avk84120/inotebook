import React from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => { 
  return (
    <div className="container my-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Welcome to iNotebook</h2>
        <p className="text-muted">
          Your go-to solution for efficiently managing and organizing personal notes online. This web-based application provides a user-friendly platform for creating, viewing, updating, and deleting notes, making it easier than ever to stay organized and keep your important information at your fingertips.
        </p>
      </div>
    </div>
  );
}

export default About;
