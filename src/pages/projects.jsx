import React from 'react';

export default function Projects() {
    // Sample data for projects (replace with your actual data)
    const projects = [
        { title: 'Project 1', imageUrl: '/path/to/image1.jpg', link: 'https://example.com/project1', githubRepo: 'https://github.com/username/project1' },
        { title: 'Project 2', imageUrl: '/path/to/image2.jpg', link: 'https://example.com/project2', githubRepo: 'https://github.com/username/project2' },
        { title: 'Project 3', imageUrl: '/path/to/image3.jpg', link: 'https://example.com/project3', githubRepo: 'https://github.com/username/project3' },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="relative group">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-auto rounded-lg transition-opacity duration-300 hover:opacity-75 cursor-pointer" 
                                />
                            </a>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                <p className="text-white font-semibold text-lg">{project.title}</p>
                            </div>
                            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white py-2 text-center rounded-b-lg hover:bg-blue-600 transition-colors duration-300">
                                Github Repo Link
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}