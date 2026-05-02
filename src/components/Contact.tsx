import { useState } from 'react';
import './Contact.css';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <p className="contact__eyebrow">Get In Touch</p>
          <h2 className="contact__title">Contact Me</h2>
          <p className="contact__desc">
            Whether you're looking for a session vocalist, a co-writer, or just want to say hello — I'd love to hear from you.
          </p>
        </div>

        {sent ? (
          <div className="contact__success">
            <span className="contact__success-icon">✓</span>
            <h3>Message sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="contact__input"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder="Your message..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              Send Message
              <span className="contact__submit-arrow">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
