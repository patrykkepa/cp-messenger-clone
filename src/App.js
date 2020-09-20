import React, { useState, useEffect } from 'react'; 
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import Message from './Message';

import './App.css';

function App() {

  const [input, setInput ] = useState('');
  const [messages, setMessages ] = useState([])
  const [username, setUsername ] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []);

  const sendMessage = (event) => {

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput('');
    event.preventDefault();

  }

  return (
    <div className="App">
      <h1>Messenger Clone </h1>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h3>Welcome {username} </h3>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app__input" value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
        
      </form>
      
      
    <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
    </FlipMove>
      
    </div>
  );
}

export default App;
