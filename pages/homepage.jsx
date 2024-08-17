import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Ser from '../pages/search';
import Navbaar from '../pages/navebar.jsx';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Homepage() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001');
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    async function delt(id) {
        let resu=await axios.delete('http://localhost:3001/pd/'+id);
        let dae=resu.data;
        fetchData();
      };
      async function deletall() {
        let resu=await axios.delete('http://localhost:3001/delet/all');
        let dae=resu.data;
        fetchData();
      };
   
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
    <>
            <Navbaar />
            <Button onClick={()=>deletall()}>DELET ALL documents</Button>
            <CardGroup>
            <Row xs={1} md={2} className="g-4">
            {data.map((item, index) => (
                    <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title> {item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Status: {item.status}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">priority: {item.priority}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">submited Date: {item.date}</Card.Subtitle>
                            <Card.Text>{item.description}</Card.Text>
                            <Button onClick={()=>delt(item._id)}>Delete</Button>
                            <Card.Link href="/update">Update</Card.Link>
                        </Card.Body>
                    </Card>
                    ))}
                    </Row>
                    </CardGroup>
                </>
            );
}

            export default Homepage;
