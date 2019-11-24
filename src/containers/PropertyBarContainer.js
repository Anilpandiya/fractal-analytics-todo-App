import React from 'react';
import { connect } from 'react-redux';

import PropertyBar from '../components/PropertyBar/PropertyBar.jsx';

import { deleteTask, selectEditTask } from '../actions/actionCRUD';

const PropertyBarContainer = props => <PropertyBar {...props} />;

const mapDispatchToProps = {
  handledeleteTask: deleteTask,
  handleSelecteditTask: selectEditTask,
};

export default connect(null, mapDispatchToProps)(PropertyBarContainer);
