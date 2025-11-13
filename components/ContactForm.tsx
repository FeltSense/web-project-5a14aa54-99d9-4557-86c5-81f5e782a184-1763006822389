'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: '5a14aa54-99d9-4557-86c5-81f5e782a184',  // NEW: Track which project this form belongs to
          website_id: '5a14aa54-99d9-4557-86c5-81f5e782a184',  // Legacy support
          founder_id: '17ef6a05-c1c3-457b-a4db-9d4d0cfcf49a',    // NEW: Track project owner
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
      </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
    </div>
  </div>
</section>
    );
      }

  return (
    <form onSubmit={handleSubmit}>
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
  <div className="max-w-2xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Let&apos;s Create Together</h2>
      <p className="text-lg text-slate-600">Share your vision, and let&apos;s bring it to life</p>
    </div>

    {/* Form Fields */}
    <div className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:border-slate-300"
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:border-slate-300"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:border-slate-300"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Share your creative vision, goals, and any details we should know..."
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:border-slate-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-teal-600 mt-2"
      >
        {isSubmitting ? "Sending your message..." : "Start Our Journey"}
      </button>
    </div>

    {/* Trust Badge */}
    <p className="text-center text-xs text-slate-500 mt-6">
      We respect your privacy. Your information is secure and will never be shared.
    </p>
  </div>
</section>
    </form>
  );
}