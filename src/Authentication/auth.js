export default {
	// called when the user attempts to log in and checking password matched to the user
	login: ({ username, password }) => {
		localStorage.setItem('username', username);		
		return fetch('https://my-json-server.typicode.com/vladshatilov/test_json/db')
				.then(response => {
					return response.clone().json();
				})
				.then(json =>{
					let username_corrected = username.toLowerCase();
					if (password === json[username_corrected]["pass"]) {
						return Promise.resolve();
					} else { return Promise.reject();}
				})				
			;
	},
	// called when the user clicks on the logout button
	logout: () => {
		localStorage.removeItem('username');
		return Promise.resolve();
	},
	// called when the API returns an error
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem('username');
			return Promise.reject();
		}
		return Promise.resolve();
	},
	// called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		
		return localStorage.getItem('username')
			? Promise.resolve()
			: Promise.reject();
	},
	// called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => Promise.resolve(),
};