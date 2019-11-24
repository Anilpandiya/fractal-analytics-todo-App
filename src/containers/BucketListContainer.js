import React from 'react';
import { connect } from 'react-redux';

import BucketList from '../components/BucketList/BucketList.jsx';
import { addBucket } from '../actions/actionCRUD';

const BucketListContainer = props => <BucketList {...props} />;

const mapStateToProps = state => ({
    bucketName: state.bucketName,
});

const mapDispatchToProps = dispatch => ({
    handleaddBucket: bucketValue => dispatch(addBucket(bucketValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketListContainer);
