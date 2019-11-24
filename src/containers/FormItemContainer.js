import React from 'react';
import { connect } from 'react-redux';

import FormItem from '../components/FormItem/FormItem.jsx';

import { completeTask } from '../actions/actionCRUD';

const FormItemContainer = props => <FormItem {...props} />;

const mapDispatchToProps = {
  handlecompleteTask: completeTask,
};

export default connect(null, mapDispatchToProps)(FormItemContainer);
