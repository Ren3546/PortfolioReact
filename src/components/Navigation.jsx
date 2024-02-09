export default function Navigation() {
    return(
    <div>
          <a href="/" className="mr-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              About Me
            </button>
          </a>
          <a href="/portfolio" className="mr-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Portfolio
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
    )
}