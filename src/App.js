import React from 'react';
import './App.css';
import {Admin, Resource} from 'react-admin';
import {UserList, UserEdit, UserCreate} from './Users/users.js';
import authUser from './Authentication/auth.js';
import generated from './generated_ContactList.json';
import fakeDataProvider from 'ra-data-fakerest';
import LoginPage from './Authentication/loginPage.js';
        //The app is built on using ReactAdmin

        // fake DataProvider usage is due to the inability to write to JSONPlaceholder. So json data is generated with json-generator.com
        // Note from 'MY JSON Server': "Changes are faked and aren't persisted (just like JSONPlaceholder)"
        
        //Authentication is provided with 'MY JSON Server' (login and password stored there).
const dataProvider = fakeDataProvider(generated);

const App = () => {
	return(
	<Admin loginPage={LoginPage}  authProvider={authUser} dataProvider = {dataProvider}>		
		<Resource name='users' list={UserList} edit={UserEdit} create={UserCreate}/>
	</Admin>)

}

export default App;
