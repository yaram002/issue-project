import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Outlet } from 'react-router-dom';
import '../css/sig.css';
import Navbaar from '../pages/navebar.jsx';

function Update() {
  const [resp, setResp] = useState('');
  const [formData, setFormData] = useState({
    title: '',
   updatetitle: '',
date:'',
    status: '',
    priority: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await axios.patch('http://localhost:3001/update', formData); // Your Node.js server endpoint
      console.log(response.data);
      setResp(response.data);
      // Optionally, update state or perform actions based on the response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <>
      <Navbaar />
      <Form.Group controlId="formTitle">
      <Form.Label>Enter Issue Title Which Want To Update</Form.Label>
      <Form.Control
        type="text"
        name="updatetitle"
        value={formData.updatetitle}
        onChange={handleChange}
        placeholder="Search title"
      />
    </Form.Group>
    <br/>
      <Container>
    
        <h1>New Data </h1>
        <Form onSubmit={handleSubmit}>

    
      

          <Form.Group controlId="formTitle">
            <Form.Label>New Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </Form.Group>

          <Form.Group controlId="formStatus">
            <Form.Label>New Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formPriority">
            <Form.Label>New Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>New Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Enter task description"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {resp ? (
          <Alert variant={resp === 'Form data submitted: data submitted' ? 'success' : 'danger'}>
            {resp}
          </Alert>
        ) : null}

        <Outlet />
      </Container>
    </>
  );
}

export default Update;
