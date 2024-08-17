import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbaar from '../pages/navebar.jsx';
import '../css/sig.css';

const TaskForm = () => {
  const [resp, setResp] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    status: '',
    priority: '',
    date:'',
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
      const response = await axios.post('http://localhost:3001/post', formData); // Your Node.js server endpoint
      console.log('Form data submitted:', response.data);
      setResp(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

 
  return (
    <>
      <Navbaar />
      <Container>
        <h1>Add Issue Details</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
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
            <Form.Label>Status</Form.Label>
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
            <Form.Label>Priority</Form.Label>
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
            <Form.Label>Description</Form.Label>
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
};

export default TaskForm;
