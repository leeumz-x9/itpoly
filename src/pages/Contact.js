import React from 'react';

function Contact() {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold text-yellow-500 mb-6">Contact Us</h2>
        
        {/* Contact form */}
        <form className="space-y-4">
          <input type="text" className="w-full p-4 rounded-lg bg-green-700 text-white" placeholder="Your Name" />
          <input type="email" className="w-full p-4 rounded-lg bg-green-700 text-white" placeholder="Your Email" />
          <textarea className="w-full p-4 rounded-lg bg-green-700 text-white" placeholder="Your Message"></textarea>
          <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400">
            Send Message
          </button>
        </form>

        {/* Social media links */}
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

        {/* Google Maps Embed */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-yellow-500 mb-4">Our Location</h3>
          <div className="relative w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.364138679573!2d98.98881811537443!3d18.81257434003534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4LiX4LiX4LiZ4LmA4LiX4LiZ4LiZ4LiZ4LmA4Lia4Lia4LmA!5e0!3m2!1sen!2sth!4v1679896874200!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lanna Polytechnic Chiang Mai Location"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
