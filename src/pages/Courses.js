import React, { useState } from 'react';

function Courses() {
  const [showCourse1, setShowCourse1] = useState(false);
  const [showCourse2, setShowCourse2] = useState(false);
  const [showCourse3, setShowCourse3] = useState(false);
  const [showCourse4, setShowCourse4] = useState(false);

  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold text-yellow-500 mb-6">Courses Offered</h2>
        <p className="text-lg mb-6">Explore the courses we offer in the Department of Information Technology.</p>

        {/* Course 1 */}
        <div className="bg-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-yellow-500">Vocational Diploma in IT</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <button 
            onClick={() => setShowCourse1(!showCourse1)} 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            {showCourse1 ? 'Hide Course PDF' : 'View Course 1 PDF'}
          </button>

          {showCourse1 && (
            <iframe 
              src="/img/course1.pdf" 
              className="w-full h-96 mt-4 rounded" 
              title="Course 1"
            />
          )}
        </div>

        {/* Course 2 */}
        <div className="bg-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-yellow-500">Vocational Certificate in IT</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <button 
            onClick={() => setShowCourse2(!showCourse2)} 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            {showCourse2 ? 'Hide Course PDF' : 'View Course 2 PDF'}
          </button>

          {showCourse2 && (
            <iframe 
              src="/img/course2.pdf" 
              className="w-full h-96 mt-4 rounded" 
              title="Course 2"
            />
          )}
        </div>

        {/* Course 3 */}
        <div className="bg-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-yellow-500">Advanced IT Course</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <button 
            onClick={() => setShowCourse3(!showCourse3)} 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            {showCourse3 ? 'Hide Course PDF' : 'View Course 3 PDF'}
          </button>

          {showCourse3 && (
            <iframe 
              src="/img/course3.pdf" 
              className="w-full h-96 mt-4 rounded" 
              title="Course 3"
            />
          )}
        </div>

        {/* Course 4 */}
        <div className="bg-green-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-500">IT Specialization Course</h3>
          <p className="text-gray-300">Course description and expertise gained.</p>
          <button 
            onClick={() => setShowCourse4(!showCourse4)} 
            className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 text-lg"
          >
            {showCourse4 ? 'Hide Course PDF' : 'View Course 4 PDF'}
          </button>

          {showCourse4 && (
            <iframe 
              src="/img/course4.pdf" 
              className="w-full h-96 mt-4 rounded" 
              title="Course 4"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
