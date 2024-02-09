import React from 'react';
import Projects from './projects';
import password from '../assets/password1.png';
import weather from '../assets/weather.png';
import noteApp from '../assets/noteApp.jpg';
import dog from '../assets/dog.png';
import employee from '../assets/employee.png';
import social from '../assets/social.png';


export default function Portfolio() {
  const projects = [
    { title: 'Password Generator', imageUrl: password, link: 'https://ren3546.github.io/PasswordGenerator/', githubRepo: 'https://github.com/Ren3546/PasswordGenerator' },
    { title: 'Weather App', imageUrl: weather, link: 'https://ren3546.github.io/Weather-app/', githubRepo: 'https://github.com/Ren3546/Weather-app' },
    { title: 'Note Taker', imageUrl: noteApp, link: 'https://note-app-rv-b9e70abbcc56.herokuapp.com/', githubRepo: 'https://github.com/Ren3546/Note_Taker' },
    { title: 'Dog Breed Quiz', imageUrl: dog, link: 'https://ren3546.github.io/Dog-Breed-Quiz/', githubRepo: 'https://github.com/Ren3546/Dog-Breed-Quiz' },
    { title: 'Employee Tracker', imageUrl: employee, link: 'https://drive.google.com/file/d/1eKjFAitLmzU0ehniZNfEizqsiCYuTuYK/view', githubRepo: 'https://github.com/Ren3546/Employee_Tracker' },
    { title: 'Social Network Api', imageUrl: social, link: ' https://drive.google.com/file/d/1iGmAFGIzRH4k_SJJXIZk0m5jOlkrkaNt/view?usp=sharing', githubRepo: 'https://github.com/Ren3546/Social_Network_Api' },
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