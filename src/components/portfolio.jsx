import React from 'react';
import Projects from './projects';

export default function Portfolio() {
  const projects = [
    { title: 'Password Generator', imageUrl: './src/assets/password1.png', link: 'https://ren3546.github.io/PasswordGenerator/', githubRepo: 'https://github.com/Ren3546/PasswordGenerator' },
    { title: 'Weather App', imageUrl: './src/assets/weather.png', link: 'https://ren3546.github.io/Weather-app/', githubRepo: 'https://github.com/Ren3546/Weather-app' },
    { title: 'Note Taker', imageUrl: '/src/assets/note.png', link: 'https://note-app-rv-b9e70abbcc56.herokuapp.com/', githubRepo: 'https://github.com/Ren3546/Note_Taker' },
    { title: 'Dog Breed Quiz', imageUrl: './src/assets/dog.png', link: 'https://ren3546.github.io/Dog-Breed-Quiz/', githubRepo: 'https://github.com/Ren3546/Dog-Breed-Quiz' },
    { title: 'Employee Tracker', imageUrl: './src/assets/employee.png', link: 'https://drive.google.com/file/d/1eKjFAitLmzU0ehniZNfEizqsiCYuTuYK/view', githubRepo: 'https://github.com/Ren3546/Employee_Tracker' },
    { title: 'Social Network Api', imageUrl: '/src/assets/social.png', link: ' https://drive.google.com/file/d/1iGmAFGIzRH4k_SJJXIZk0m5jOlkrkaNt/view?usp=sharing', githubRepo: 'https://github.com/Ren3546/Social_Network_Api' },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
        <Projects projects={projects} />
      </div>
    </section>
  );
}