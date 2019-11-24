import React from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form/Form.jsx';

import { addTask } from '../actions/actionCRUD';

const FormContainer = props => <Form {...props} />;

const mapDispatchToProps = dispatch => ({
  handleaddTask: (itemValue, bucketName) => dispatch(addTask(itemValue, bucketName)),
});

export default connect(null, mapDispatchToProps)(FormContainer);
