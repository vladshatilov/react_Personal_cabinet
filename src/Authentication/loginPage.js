
import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
	main: { background: 'url(https://res.cloudinary.com/wbd/image/upload/v1596468047/bfe264ec9af21ce3de7511b18ad452d3_h5bujx.jpg)' },
	// avatar: {
	// 	// background: 'url(https://res.cloudinary.com/wbd/image/upload/v1596468047/bfe264ec9af21ce3de7511b18ad452d3_h5bujx.jpg)',
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundSize: 'contain',
	// 	height: 80,
	// },
	// icon: { display: 'none' },
});

const CustomLoginForm = withStyles({
	button: { background: '#F15922' },
})(LoginForm);

const CustomLoginPage = props => (
	<Login
		loginForm={<CustomLoginForm />}
		{...props}
	/>
);

export default withStyles(styles)(CustomLoginPage);