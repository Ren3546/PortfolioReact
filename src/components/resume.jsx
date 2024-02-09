import React from 'react';

const Resume = () => {
    // Function to handle download button click
    const handleDownload = () => {
        // Provide the path to the PDF file
        const pdfFilePath = './src/assets/resume.pdf';
        // Create a temporary link element
        const link = document.createElement('a');
        // Set the href attribute to the PDF file path
        link.href = pdfFilePath;
        // Set the download attribute to force download
        link.download = 'resume.pdf';
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event on the link
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

   
return (
  <section
    id="resume"
    className="relative h-screen flex flex-col justify-center"
    style={{
      backgroundImage: "url('./src/assets/resumeImg.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-opacity-50 bg-gray-900"></div>
    <div className="relative z-10 flex flex-col items-center">
      <ul className="list-disc list-inside text-white text-xl mt-10">Proficiencies:
        <li className="mb-2 text-white">HTML</li>
        <li className="mb-2 text-white">CSS</li>
        <li className="mb-2 text-white">Javascript</li>
        <li className="mb-2 text-white">jQuery</li>
        <li className="mb-2 text-white">Express</li>
        <li className="mb-2 text-white">React</li>
        <li className="mb-2 text-white">Node.js</li>
        <li className="mb-2 text-white">MongoDB</li>
        <li className="mb-2 text-white">SQL</li>
    </ul>
      <button className="mt-20 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
  </section>
)};
export default Resume;
