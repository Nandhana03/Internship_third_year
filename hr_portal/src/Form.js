
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
    const initialFormData = {
        name: '',
        dob: '',
        education: '',
        address: '',
        phone: '',
        experience: '',
        resume: null,
        email: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    };

    const handleFileRemove = () => {
        setFormData({
            ...formData,
            resume: null,
        });
        document.getElementById('resume').value = ''; // Reset file input
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSubmit = new FormData();
        for (const key in formData) {
            formDataToSubmit.append(key, formData[key]);
        }

        axios.post('http://localhost:3001/home', formDataToSubmit, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(response => {
            console.log('Success:', response.data);
            alert('Form submitted successfully!');
            setFormData(initialFormData); // Reset form fields to initial state
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again.');
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
              <input
                  type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                    onChange={handleChange}
                    required
               />
           </div>

            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                     value={formData.dob}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="education">Education Qualification</label>
                <input
                   type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="experience">Work Experience (Years)</label>
                <input
                   type="number"
                    id="experience"
                   name="experience"
                   value={formData.experience}
                    onChange={handleChange}
                   required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="address">Communication Address</label>
                <textarea
                    id="address"
                   name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
               ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="resume">Resume</label>
                <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                />
                {formData.resume && (
                    <div className="file-info">
                        <span>{formData.resume.name}</span>
                        <button type="button" onClick={handleFileRemove} className="remove-btn">X</button>
                    </div>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
