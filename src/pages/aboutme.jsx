export default function Aboutme() {
    return (
        <section id="about" className="bg-gray-200 py-20">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <img src="./src/assets/profile.jpg" alt="AboutMe Picture" className="h-60 w-auto rounded-full" />
                <p className="text-center text-xl text-gray-800 mt-12">Welcome to my portfolio! My name is Renato Valdez and I am a Registered Veterinary Technician. I got my diploma from Seneca College. My hobbies include playing video games, art hobbies such as making patches and shadowboxes, and playing with my many pets. I learned full stack web development to hopefully get involved with web development for the veterinary industry. Seeing as the industry is becoming more and more online, I found it would be a great opportunity to apply my knowledge in the field into tools that can improve the industry.   </p>
            </div>
        </section>
    );
}