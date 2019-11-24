import React from 'react';
import { connect } from 'react-redux';

import FormEdit from '../components/FormEdit/FormEdit.jsx';

import { cancelEditTask, editTask } from '../actions/actionCRUD';

const FormEditContainer = props => <FormEdit {...props} />;

const mapDispatchToProps = {
  handleCanceleditTask: cancelEditTask,
  handleeditTask: editTask,
};

export default connect(null, mapDispatchToProps)(FormEditContainer);
