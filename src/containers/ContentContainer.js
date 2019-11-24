import React from 'react';
import { connect } from 'react-redux';

import Content from '../components/Content/Content.jsx';

const ContentContainer = props => <Content {...props} />;

const mapStateToProps = state => ({
  items: state.items,
  editingItem: state.editingItem,
});

export default connect(mapStateToProps)(ContentContainer);
