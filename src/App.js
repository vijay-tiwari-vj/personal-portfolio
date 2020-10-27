import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from './components/Hero';
import WorkCard from './components/WorkCard';

const projects = [
  {
    title: 'Anime Finder',
    image: 'https://i.imgur.com/wcIOyZk.jpg',
    desc: "Search your favorite anime on Anime Finder or find top anime to watch if you're new to anime world!",
    live_url: 'https://vijay-tiwari-vj.github.io/anime-finder',
    code_url: 'https://github.com/vijay-tiwari-vj/anime-finder',
    tech: [
      'React',
      'Material UI'
    ]
  },
  {
    title: 'HomeBank',
    image: 'https://i.imgur.com/wcIOyZk.jpg',
    desc: "HomeBank helps you manage your cash by keeping a history of your previous transactions.",
    live_url: 'https://expo.io/@vijay_tiwari_vj/HomeBank',
    code_url: 'https://github.com/vijay-tiwari-vj/HomeBank',
    tech: [
      'React Native'
    ]
  },
  {
    title: 'Number in words',
    image: 'https://i.imgur.com/wcIOyZk.jpg',
    desc: "Convert a number or a range of numbers to words.",
    live_url: 'https://vijay-tiwari-vj.github.io/number-in-words',
    code_url: 'https://github.com/vijay-tiwari-vj/number-in-words',
    tech: [
      'Vanilla JS',
      'Bootstrap'
    ]
  },
  {
    title: 'Markdown Previewer',
    image: 'https://i.imgur.com/wcIOyZk.jpg',
    desc: "GitHub like markdown previewer.",
    live_url: 'https://vijay-tiwari-vj.github.io/markdown-previewer',
    code_url: 'https://github.com/vijay-tiwari-vj/markdown-previewer',
    tech: [
      'React',
      'React Bootstrap'
    ]
  }
];

export const App = () => {
  return (
    <div>
      <section id="home" className="home-container">
        <Hero />
      </section>
      <section id="work" className="work-container">
        <Container>
          <div className="cards">
            <WorkCard projects={projects} />
          </div>
        </Container>
      </section>
      <section id="contact" className="contact-container">

      </section>
    </div>
  );
}

export default App;
