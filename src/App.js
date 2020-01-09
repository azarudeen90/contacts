import React from 'react';
import './App.css';

class ContactList extends React.Component{
  render(){
    const people = this.props.contacts

    return <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
      {name:'Azar'}
      ,{name:'Ajju'}
      ,{name:'deenu'}
    ]}/>
     <ContactList contacts={[
      {name:'Jammy'}
      ,{name:'Jammu'}
      ,{name:'Chan'}
    ]}/>
    </div>
  );
}

export default App;
