import React from 'react';

function Contact() {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold text-yellow-500 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" className="w-full p-4 rounded-lg bg-green-700 text-white" placeholder="Your Name" />
          <input type="email" className="w-full p-4 rounded-lg bg-green-700 text-white" placeholder="Your Email" />
          <textarea className="w-full p-4 rounded-lg bg-green-700 text-white" placeholder="Your Message"></textarea>
          <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400">
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <p className="text-lg text-gray-400">Follow us on social media:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com/InformationTechnologyLannapoly/?locale=th_TH" className="text-yellow-500 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.lannapoly.ac.th/web/#/" className="text-yellow-500 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
