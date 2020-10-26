import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

import Hero from './components/Hero';
import WorkCard from './components/WorkCard';

export const App = () => {
  return (
    <div>
      <section id="about" className="about-container">
        <Hero />
      </section>
      <section id="work" className="work-container">
        <Container>
          <CardColumns>
            <WorkCard />
          </CardColumns>
        </Container>
      </section>
      <section id="contact" className="contact-container">

      </section>
    </div>
  );
}

export default App;
