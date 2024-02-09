export default function Navbar() {
    return (
      <div className="Navbar w-full bg-gray-800 text-white p-4 h-36 flex flex-row justify-between items-center">
        <h1 class="text-5xl">Renato Valdez</h1>
        <div>
          <a href="/" className="mr-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              About Me
            </button>
          </a>
          <a href="/projects" className="mr-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Projects
            </button>
          </a>
          <a href="/contact" className="mr-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact
            </button>
          </a>
          <a href="/resume">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Resume
            </button>
          </a>
        </div>
      </div>
    );
  }