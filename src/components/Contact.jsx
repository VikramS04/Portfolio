import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';
import { siteContent } from '../content/siteContent';

const links = [
  {
    label: 'Email Me',
    href: `mailto:${siteContent.email}`,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: siteContent.github,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: siteContent.linkedin,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', text: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: '', text: '' });

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        text: 'EmailJS is not configured yet. Add the Vite env values to enable sending.',
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: siteContent.name,
          reply_to: form.email,
        },
        publicKey
      );

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setStatus({
        type: 'success',
        text: 'Message sent successfully. I will get back to you soon.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        text: 'Something went wrong while sending the message. Please try again or email me directly.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-shell px-6 py-20 text-center md:px-12" style={{ background: 'var(--section-bg)' }}>
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center">
          <SectionHeader label="Contact" title="Let's Connect" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.05em]"
        >
          Let&apos;s Build
          <br />
          <span style={{ color: 'var(--accent)' }}>Something</span>
          <br />
          Better
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mb-10 max-w-2xl font-mono text-sm leading-7 md:text-[0.92rem]"
          style={{ color: 'var(--muted)' }}
        >
          Open to internships, collaborations, learning opportunities, and thoughtful conversations
          around web development, AI/ML, and product-building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-10 flex flex-wrap justify-center gap-4"
        >
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="glass-panel rounded-[30px] p-6 text-left md:p-8">
            <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent2)' }}>
              Direct Message
            </div>
            <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em]">Send me a message</h3>
            <p className="mb-6 text-sm leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
              Use the form for collaborations, internships, freelance work, or anything interesting
              you want to discuss. Messages go straight through EmailJS.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                <Field
                  label="Your Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />

              <Field
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your idea or opportunity"
                multiline
              />

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center rounded-full px-5 py-4 font-mono text-[0.76rem] uppercase tracking-[0.16em] transition-all duration-200"
                style={{
                  background: isSending
                    ? 'rgba(148,163,184,0.14)'
                    : 'linear-gradient(135deg, var(--accent), #f97316)',
                  color: isSending ? 'var(--muted)' : '#08111b',
                  border: 'none',
                  cursor: isSending ? 'not-allowed' : 'pointer',
                }}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

              {status.text && (
                <div
                  className="rounded-2xl px-4 py-3 text-sm leading-6"
                  style={{
                    background:
                      status.type === 'success'
                        ? 'rgba(52,211,153,0.12)'
                        : 'rgba(248,113,113,0.12)',
                    border:
                      status.type === 'success'
                        ? '1px solid rgba(52,211,153,0.18)'
                        : '1px solid rgba(248,113,113,0.18)',
                    color: status.type === 'success' ? 'var(--accent3)' : '#fca5a5',
                  }}
                >
                  {status.text}
                </div>
              )}
            </form>
          </div>

          <div className="glass-panel flex flex-col justify-between rounded-[30px] p-6 text-left md:p-8">
            <div>
              <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent2)' }}>
                Contact Details
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-[-0.03em]">Prefer direct contact?</h3>
              <p className="mb-6 text-sm leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
                You can also reach me directly by email or through my public profiles.
              </p>
            </div>

            <div className="space-y-4">
              <InfoCard label="Primary Email" value={siteContent.email} href={`mailto:${siteContent.email}`} />
              <InfoCard label="LinkedIn" value="vikram-saini-0b35ab207" href={siteContent.linkedin} />
              <InfoCard label="GitHub" value="VikramS04" href={siteContent.github} />
            </div>

            <div
              className="mt-6 rounded-[24px] px-4 py-4 font-mono text-[0.68rem] leading-6 uppercase tracking-[0.12em]"
              style={{
                background: 'rgba(148,163,184,0.05)',
                border: '1px solid rgba(148,163,184,0.12)',
                color: 'var(--muted)',
              }}
            >
              EmailJS setup required:
              <br />
              `VITE_EMAILJS_SERVICE_ID`
              <br />
              `VITE_EMAILJS_TEMPLATE_ID`
              <br />
              `VITE_EMAILJS_PUBLIC_KEY`
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  multiline = false,
}) {
  const sharedProps = {
    name,
    value,
    onChange,
    placeholder,
    required: true,
    className:
      'w-full rounded-[22px] border px-4 py-4 text-sm outline-none transition-all duration-200 md:text-base',
    style: {
      background: 'rgba(148,163,184,0.05)',
      borderColor: 'rgba(148,163,184,0.12)',
      color: 'var(--text)',
    },
  };

  return (
    <label className="block text-left">
      <span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
        {label}
      </span>
      {multiline ? (
        <textarea {...sharedProps} rows={6} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
    </label>
  );
}

function InfoCard({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? '_self' : '_blank'}
      rel="noreferrer"
      className="block rounded-[24px] px-4 py-4 no-underline transition-all duration-200"
      style={{
        background: 'rgba(148,163,184,0.05)',
        border: '1px solid rgba(148,163,184,0.12)',
      }}
    >
      <div className="mb-1 font-mono text-[0.62rem] uppercase tracking-[0.16em]" style={{ color: 'var(--accent2)' }}>
        {label}
      </div>
      <div className="break-all text-sm md:text-base" style={{ color: 'var(--text)' }}>
        {value}
      </div>
    </a>
  );
}

function ContactLink({ label, href, icon }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-3 rounded-full px-5 py-4 font-mono text-[0.78rem] uppercase tracking-[0.12em] no-underline transition-all duration-200"
      style={{
        background: hovered ? 'rgba(245,158,11,0.12)' : 'rgba(148,163,184,0.05)',
        border: hovered ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(148,163,184,0.12)',
        color: hovered ? 'var(--text)' : 'var(--text)',
      }}
    >
      {icon}
      {label}
    </a>
  );
}
