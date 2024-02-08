export default function Aboutme() {
    return (
        <section id="about" className="bg-gray-200 py-20">
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Image positioned at the center top */}
                <img src="your_image_url.jpg" alt="Your Image" className="h-32 w-auto" />
                {/* Text content */}
                <p className="text-center text-xl text-gray-800 mt-12">meh</p>
            </div>
        </section>
    );
}