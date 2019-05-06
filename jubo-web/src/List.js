import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'reactstrap';
//import './List.css'

var clients = [
   {
      "id": 1, 
      "name": "John",
      "age": 65,
      "orderId": 1,
      "message": "Keep tracking."
   },
   {
      "id": 2, 
      "name": "Mary",
      "age": 60,
      "orderId": 2,
      "message": "Keep tracking."
   },
   {
      "id": 3, 
      "name": "Jennie",
      "age": 80,
      "orderId": 3,
      "message": "Keep tracking."
   },
   {
      "id": 4, 
      "name": "August",
      "age": 67,
      "orderId": 4,
      "message": "Keep tracking."
   },
   {
      "id": 5, 
      "name": "Zoe",
      "age": 78,
      "orderId": 5,
      "message": "Keep tracking."
   }
];

class ClientInfo extends React.Component {
   render() {
      return (
         <div class='client-info'>
            <h1>Client Information</h1>
            <p><label>ID: </label>{this.props.id}</p>
            <p><label>NAME: </label>{this.props.name}</p>
            <p><label>AGE: </label>{this.props.age}</p>
            <p><label>ORDERID: </label>{this.props.orderId}</p>
            <p><label>MESSAGE: </label>{this.props.message}</p>
         </div>
      );  
   } 
}

class Clients extends React.Component {
   constructor() {
      super();
      this.state = {
         showInfo: false,
         key: null
      };
   }
   
   toggleInfo(client_key) {
      client_key == this.state.key?
         this.setState({
            showInfo: !this.state.showInfo,
         })
         : this.setState({
            key: client_key 
      });
   }

   
   render() {
      return (
         <div>
         <Table striped>
            <thead>
            <tr>
               <td>Id</td>
               <td>Name</td>
               <td>Age</td>
               <td>Order Id</td>
               <td>EDIT</td>
            </tr>
            </thead>
            <tbody>
            {clients.map((value, key) => {
               return (
                  <tr>
                     <td>{value.id}</td>
                     <td>{value.name}</td>
                     <td>{value.age}</td>
                     <td>{value.orderId}</td>
                     <td><button onClick={() => this.toggleInfo(key)}>EDIT</button></td>
                  </tr>
               );
            })}
            </tbody>
         </Table>
         {
            this.state.showInfo?
            <ClientInfo id={clients[this.state.key].id} name={clients[this.state.key].name} age={clients[this.state.key].age} orderId={clients[this.state.key].orderId} message={clients[this.state.key].message}/>
            :null         
         }
         </div>
      );
   }
} 

function List() {
   return <Clients />;
}

export default List;
