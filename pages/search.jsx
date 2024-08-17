import '../css/ser.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Navbaar from '../pages/navebar.jsx';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Outlet } from 'react-router-dom';
function Ser() {
  const [datas, setDatas] = useState([]);
  const [title, setName] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const query = {};

    if (title) query.title = title;
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (date) query.date = date;

    try {
      const response = await axios.post('http://localhost:3001/one', query); // Your Node.js server endpoint
      console.log(response.data);
      setDatas(response.data);
      // Optionally, update state or perform actions based on the response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div>
    <Navbaar />
    <Container>
    <h1>Search BY Details</h1>
    <Form onSubmit={handleSubmit}>
    
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleNameChange}
          placeholder="Enter task title"
        />
      </Form.Group>

      <Form.Group controlId="formTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="date"
        name="date"
        value={date}
        onChange={handleDateChange}
        placeholder="Enter task title"
      />
    </Form.Group>

      <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={status}
          onChange={handleStatusChange}
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
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Form.Control>
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>

    

    <Outlet />
  </Container>
  <div id="search-results">
  <Row xs={1} md={2} className="g-4">
  {datas.map((data) => (
 
          <Card style={{ width: '18rem' }} key={data._id}>
            <p>Title: {data.title}</p>
            <p>Status: {data.status}</p>
            <p>Priority: {data.priority}</p>
            <p>DATE: {data.date}</p>
            <p>Description: {data.description}</p>
            </Card>
            
            ))}
            </Row>
        </div>
    </div>
  );
}

export default Ser;
