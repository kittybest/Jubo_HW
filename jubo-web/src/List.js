import React from 'react'
import ReactDOM from 'react-dom'
//import './List.css'

var clients = [
   {
      "id": 1, 
      "name": "John",
      "age": 65,
      "orderId": 1
   },
   {
      "id": 2, 
      "name": "Mary",
      "age": 60,
      "orderId": 2
   },
   {
      "id": 3, 
      "name": "Jennie",
      "age": 80,
      "orderId": 3
   },
   {
      "id": 4, 
      "name": "August",
      "age": 67,
      "orderId": 4
   },
   {
      "id": 5, 
      "name": "Zoe",
      "age": 78,
      "orderId": 5
   }
];

class Clients extends React.Component {
   render() {
      return (
         <table>
            {clients.map((value, key) => {
               return (
                  <tr>
                     <td>{value.id}</td>
                     <td>{value.name}</td>
                     <td>{value.age}</td>
                     <td>{value.orderId}</td>
                     <td><a href="#">EDIT</a></td>
                  </tr>
               );
            })}
         </table>
      );
   }
} 

function List() {
   return <Clients />;
}

export default List;
