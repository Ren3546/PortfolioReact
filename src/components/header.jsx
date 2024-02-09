import Navigation from './Navigation'

export default function Header() {
    return (
      <div className="Navbar w-full bg-gray-800 text-white p-4 h-36 flex flex-row justify-between items-center">
        <h1 class="text-5xl">Renato Valdez</h1>
        <Navigation />
      </div>
    );
  }