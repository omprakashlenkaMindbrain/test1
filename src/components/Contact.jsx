import gsap from 'gsap';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const formRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.from(".contact-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    }
  }, [inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (example)
    const formData = new FormData(formRef.current);
    console.log("Form submitted:", Object.fromEntries(formData.entries()));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-content space-y-8">
            <div className="card backdrop-blur-lg bg-white/5 dark:bg-gray-800/50">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>lenkaom.personal@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>+91 9178330413</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Bhubaneswar</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="https://github.com/omprakash447" className="text-primary hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/omprakashlenka" className="text-primary hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="text-primary hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="contact-content space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
