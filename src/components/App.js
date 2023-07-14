import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  //creating list
  const contacts = [
    {
        id:"1",
        name:"Jos",
        email:"jospaul223@gmail.com"
    },
    {
      id:"2",
      name:"Govind",
      email:"govind223@gmail.com"
  }
  ];

  return (
    <div className='ui container'>

      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>

    </div>
  );
}

export default App;
