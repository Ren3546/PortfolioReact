export default function Aboutme() {
    return (
        <section id="about" className="bg-gray-200 py-20">
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Image positioned at the center top */}
                <img src="./src/assets/profile.jpg" alt="AboutMe Picture" className="h-60 w-auto rounded-full" />
                {/* Text content */}
                <p className="text-center text-xl text-gray-800 mt-12">meh</p>
            </div>
        </section>
    );
}