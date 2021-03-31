
import './App.css';

import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';



 function App() {
	 if(!localStorage.getItem('username')) return <Login />
	

	return (
		<div>
	
		<ChatEngine
			height='100vh'
			userName= {localStorage.getItem('username')}
			userSecret= {localStorage.getItem('password')}
			projectID='d3965143-00e8-4ccf-a16e-b0728f783edd'
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps} />}
		/>
		</div>
	);
}


export default App;
