import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/tab.css'
import Navbaar from '../pages/navebar.jsx';

import Button from 'react-bootstrap/Button';
function GetReq() {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
       

      

        fetchData();
    }, []); // Empty dependency array to run effect only once
    const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:3001');
          console.log(response.data)
          
          setResponseData(response.data);
        
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

async function delt(id) {
  let resu=await axios.delete('http://localhost:3001/pd/'+id);
  let dae=resu.data;
  fetchData();
}



    return (
      <div>
      <Navbaar/>

        <table className="data-table">
        <thead>
          <tr>
            <th>First NAME</th>
            <th>Last Name</th>
            <th>Email</th>
            
            <th>Date Of Birth</th>
            <th>created_At</th>
            <th>DELETE</th>

          </tr>
        </thead>
        <tbody>
          {responseData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td>{item.created_at}</td>
              <td><Button onClick={()=>delt(item._id)}>remove</Button></td>
            </tr>
            
          ))}
        </tbody>
      </table>
        </div>
    );
}

export default GetReq;
