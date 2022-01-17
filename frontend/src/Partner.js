import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput } from 'react-admin';

export const PartnerList = (props) => {
    console.log("PartnerList props:", props)
   return (
    <List {...props}>
        <Datagrid>
            <TextField source="loginName" />
            <EditButton basePath="/Partner" />
        </Datagrid>
    </List>
)};

const ContactTitle = ({ record }) => {
    console.log(record)
    return <span>Contact {record ? `"${record.firstname}"` : ''}</span>;
};

export const PartnerEdit = (props) => (
    <Edit title={<ContactTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
        </SimpleForm>
    </Edit>
);

export const ContactCreate = (props) => (
    <Create title="Create a Contact" {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
        </SimpleForm>
    </Create>
);