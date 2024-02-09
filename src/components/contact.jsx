import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        alert('Message sent!'); // Show an alert with a message
    };

    const handleBlur = (fieldName) => {
        if (!fieldName) {
            alert('This field is required!');
        }
    };


    return (
        <section id="contact" className="py-20 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Me</h2>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-800 mb-1">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
                            value={name}
                            onBlur={() => handleBlur(name)}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-800 mb-1">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
                            value={email}
                            onBlur={() => handleBlur(email)}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-800 mb-1">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
                            value={message}
                            onBlur={() => handleBlur(message)}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
                </form>
            </div>
        </section>
    );
}