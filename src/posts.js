import React from 'react';
import { List, Datagrid, TextField, ReferenceField,Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';


export const PostList = props => (
	<List {...props}>
		<Datagrid rowClick='edit'>
			<TextField source='id' />
			<ReferenceField source='userId' reference='users'>
				<TextField source='name' />
			</ReferenceField>
			
			<TextField source='title' />
		</Datagrid>
	</List>
);


export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <ReferenceInput source='userId' reference='users'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <TextInput source='title' />
            <TextInput multiline source='body' />
        </SimpleForm>
    </Edit>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source='userId' reference='users'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <TextInput source='title' />
            <TextInput multiline source='body' />
        </SimpleForm>
    </Create>
);