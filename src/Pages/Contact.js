import React, { useState, useContext, createContext } from 'react';
import { useEffect } from 'react';
import '../Style/contact.css';

const FormDataContext = createContext();

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);

  useEffect(() => {
    const formDataFromStorage = JSON.parse(localStorage.getItem('formData'));
    if (formDataFromStorage) {
      setName(formDataFromStorage.name || '');
      setEmail(formDataFromStorage.email || '');
      setMessage(formDataFromStorage.message || '');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      const serverResponse = 'Form submitted successfully!';
      setSubmissionResult(serverResponse);

      setName('');
      setEmail('');
      setMessage('');

      localStorage.setItem(
        'formData',
        JSON.stringify({ name, email, message })
      );
    }, 1000);

    setSubmissionResult('Submitting...');
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {submissionResult && <p className="success-message">{submissionResult}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
