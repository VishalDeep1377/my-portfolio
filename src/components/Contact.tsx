'use client'; // Required for client-side interactivity (form handling)
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          {/* Form fields go here */}
        </form>
      </div>
    </section>
  );
}