import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Admin, Resource, authProvider,ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList, UserEdit, UserCreate} from './Users/users.js';
import authUser from './Authentication/auth.js';
import {PostList,PostEdit, PostCreate} from './posts.js';
// import {} from './postedit.js';
import connectToJson from './connectToJson.js';
import generated from './test2.json';
import fakeDataProvider from 'ra-data-fakerest';
import LoginPage from './Authentication/loginPage.js';

// const dataProvider = fakeDataProvider({
// 	// posts: [
// 	//	 { id: 0, userId: 0, title: "quia" },
// 	//	 { id: 1, userId: 1, title: "est" },
// 	// ],
// 	users: [
// 		{ id: 0, name: "Vlad", username: 'John Doe', body: 'Sensational!', website:'s.com' },
// 		{ id: 1, name: "Anna", username: 'Jane Doe', body: 'I agree', website:'s2.com' },
// 	],
// });
const dataProvider = fakeDataProvider(generated);
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const dataProvider = generated;
// console.log(generated);
// https://my-json-server.typicode.com/vladshatilov/test_json

// ,
//	 "admin":"admin",
//	 "user":"user"
const App = () => {
	console.log("check auth");
	// const data = 
	// fetch('https://jsonplaceholder.typicode.com/posts/1')
	// fetch('https://my-json-server.typicode.com/vladshatilov/test_json/db')
	// 	.then(response => response.json())
	// 	.then(json => console.log(json.admin));
console.log("check post");
	// fetch('https://my-json-server.typicode.com/vladshatilov/test_json/posts')
	//	 .then(response => response.json())
	//	 .then(json => console.log(json.admin));

	// fetch('https://my-json-server.typicode.com/vladshatilov/test_json/posts', {
	// 	method: 'POST',
	// 	body: JSON.stringify({
	// 		title: 'Hey there',
	// 	}),
	// 	headers: {
	// 		"Content-type": "application/json; charset=UTF-8"
	// 	}
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => console.log(json))


	


	// console.log(data);
	return(
	<Admin loginPage={LoginPage}  authProvider={authUser} dataProvider = {dataProvider}>
		{/*<Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />*/}
		<Resource name='users' list={UserList} edit={UserEdit} create={UserCreate}/>
	</Admin>)

}
// function App() {
//	 return (
//		 <div className="App">
//			 <header className="App-header">
//				 <img src={logo} className="App-logo" alt="logo" />
//				 <p>
//					 Edit <code>src/App.js</code> and save to reload.
//				 </p>
//				 <a
//					 className="App-link"
//					 href="https://reactjs.org"
//					 target="_blank"
//					 rel="noopener noreferrer"
//				 >
//					 Learn React
//				 </a>
//			 </header>
//		 </div>
//	 );
// }

export default App;
