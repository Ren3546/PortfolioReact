export default function Projects({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="relative group">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <p className="text-white font-semibold text-lg">{project.title}</p>
          </div>
          <div className="mt-10">
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white py-2 text-center rounded-b-lg hover:bg-blue-600 transition-colors duration-300 opacity-75"
            >
              Github Repo Link
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white py-2 text-center rounded-b-lg hover:bg-blue-600 transition-colors duration-300 mt-2 opacity-75"
            >
              Project Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}