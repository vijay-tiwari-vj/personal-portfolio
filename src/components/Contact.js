import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export const Contact = () => {
  return (
    <>
      <Form name="portfolio-contact" method="POST" data-netlify="true">
        <Form.Row className="form-fields">
          <Col>
            <Form.Control name="name" aria-label="Name" placeholder="Enter your name" required />
          </Col>
          <Col>
            <Form.Control name="email" aria-label="Email" type="email" placeholder="Enter your email" required />
          </Col>
        </Form.Row>
        <Form.Group className="form-fields">
          <Form.Control name="message" aria-label="Message" as="textarea" placeholder="Message..." rows={8} required />
        </Form.Group>
        <div>
          <button className="link btn-contact" type="submit">
            Send<i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </Form>
    </>
  )
}

export default Contact;
