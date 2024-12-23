import React from 'react';

function Home() {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-semibold text-yellow-500 mb-6">Welcome to IT POLY Department</h1>
        <p className="text-lg mb-6">The Department of Information Technology at Polytech Lanna College.</p>
        
        {/* เพิ่มรูปภาพที่เป็นลิงก์ */}
        <a href="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" 
            alt="Department Activity" 
            className="mx-auto rounded-lg shadow-lg mb-6"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
        
        <p className="text-lg text-gray-300">Explore more about the department and our activities.</p>
      </div>
    </div>
  );
}

export default Home;
