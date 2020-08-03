export default {
	// called when the user attempts to log in
	login: ({ username, password }) => {
		localStorage.setItem('username', username);
		console.log(username);
		// if (username == 'admin') {
		// 	console.log('check admin');
		// const pass_admin = fetch('https://my-json-server.typicode.com/vladshatilov/test_json/db')
		// 	.then(response => response.json())
		// 	.then(json => console.log(json.admin));

		// }
		return fetch('https://my-json-server.typicode.com/vladshatilov/test_json/db')
				.then(response => {
					// console.log(response.json());
					return response.clone().json();
				})
				.then(json =>{
					let username_corrected = username.toLowerCase();
					console.log(username_corrected);
					if (password === json[username_corrected]["pass"]) {
						return Promise.resolve();
					} else { return Promise.reject();}
				})
				
			;


		// console.log(username);
		// console.log(password);
		// accept all username/password combinations
		// return (
		// 		Promise.resolve()
		// 	);
		// console.log('login2');
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