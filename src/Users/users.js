import React from 'react';
import {List, Datagrid, TextField, EmailField, UrlField, Filter, TextInput, ReferenceInput, SelectInput,Edit, SimpleForm,Create,useRefresh,useRedirect} from 'react-admin';

		//Adding search option
const SearchField = (props) => (
		<Filter {...props}>
			<TextInput label="Search" source='q' alwaysOn />
			<ReferenceInput label="User" source='userId' reference='users' allowEmpty>
				<SelectInput optionText='name' />
			</ReferenceInput>

		</Filter>
	);

		//Initialise contact list
export const UserList = props => (
		<List filters={<SearchField />} {...props}>
			<Datagrid rowClick='edit'>
			<TextField source='id' />
			<TextField source='name' />
			<TextField source='username' />
			<EmailField source='email' />
			<TextField source='address.street' label='Address' />
			<TextField source='phone' />
			<UrlField source='website' />
			<TextField source='company.name' label='Company' />
	</Datagrid>
		</List>
	)
		
		//Editing user list
export const UserEdit = props => (
		<Edit {...props}>
			<SimpleForm>
				<TextInput disabled source='id' />
				<TextInput source='name' />
				<TextInput source='username' />
				<TextInput source='email' />
				<TextInput source='address.street' label='Address' />
				<TextInput source='phone' />
				<UrlField source='website' />
				<TextInput source='company.name' label='Company' />
			</SimpleForm>
		</Edit>
	)

		//Adding user  and redirecting to the to list
export const UserCreate = props => {

	const refresh = useRefresh();
	const redirect = useRedirect();
	const onSuccess = ({data}) => {
		redirect('/users');
		refresh();
	}
	return (
		<Create onSuccess={onSuccess} {...props}>
			<SimpleForm>
				<TextInput source='name' />
				<TextInput source='username' />
				<TextInput source='email' />
				<TextInput source='address.street' label='Address' />
				<TextInput source='phone' />
				<TextInput source='website' />
				<TextInput source='company.name' label='Company' />
			</SimpleForm>
		</Create>
	)
	}