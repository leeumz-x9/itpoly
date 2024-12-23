import React from 'react';

function Courses() {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold text-yellow-500 mb-6">Courses Offered</h2>
        <p className="text-lg mb-6">Explore the courses we offer in the Department of Information Technology.</p>
        
        {/* เรียงลำดับไฟล์ PDF 4 ไฟล์ */}
        <div className="bg-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-yellow-500">Vocational Diploma in IT</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <a 
            href="/img/course1.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            Download Course 1 PDF
          </a>
        </div>

        <div className="bg-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-yellow-500">Vocational Certificate in IT</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <a 
            href="/img/course2.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            Download Course 2 PDF
          </a>
        </div>

        <div className="bg-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-yellow-500">Advanced IT Course</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <a 
            href="/img/course3.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            Download Course 3 PDF
          </a>
        </div>

        <div className="bg-green-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-500">IT Specialization Course</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <a 
            href="/img/course4.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            Download Course 4 PDF
          </a>
        </div>

      </div>
    </div>
  );
}

export default Courses;
