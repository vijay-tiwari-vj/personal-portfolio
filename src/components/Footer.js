import React from 'react';
import Container from 'react-bootstrap/Container';

export const Footer = () => {
  return (
    <Container fluid>
      <footer
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="social-contacts">
          <div className="contacts">
            <a href="https://github.com/vijay-tiwari-vj" target="_blank" rel="noreferrer" alt="GitHub link" className="contact">
              <i
                className="fab fa-github"
                aria-hidden="true"
                style={{
                  color: 'black',
                  fontSize: '48px'
                }}
              >
              </i>
            </a>
            <a href="https://codepen.com/vijay_tiwari_vj" target="_blank" rel="noreferrer" alt="Codepen link" className="contact">
              <i
                className="fab fa-codepen"
                aria-hidden="true"
                style={{
                  color: 'black',
                  fontSize: '48px'
                }}
              >
              </i>
            </a>
          </div>
          <div className="contacts">
            <i className="fa fa-phone-alt" aria-hidden="true"></i> +91-7873882485
          </div>
          <div className="contacts">
            <i className="fa fa-envelope" aria-hidden="true"></i> vijay.tiwari.vj7@gmail.com
          </div>
        </div>
        <small
          className="text-muted"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem'
          }}
        >
          &copy; 2020 Vijay Tiwari
        </small>
      </footer>
    </Container>
  )
}

export default Footer;
