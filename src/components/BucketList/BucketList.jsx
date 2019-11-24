import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './BucketList.css';
import ContentContainer from '../../containers/ContentContainer';

const addCard = true;

const addToDos = () => {
  return addCard;
};

const BucketList = props => {
  const [itemValue, setItemValue] = useState('');

  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();
    props.handleaddBucket(itemValue);
    setItemValue('');
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const AddBucketForm = () => (
    <form autoComplete="on" onSubmit={handleSubmitAndResetForm}>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="new-todo-item"
            name="new-todo-item"
            placeholder="add a bucket of todos..."
            aria-label="Todo item description"
            value={itemValue}
            onChange={handleItemChange}
            autoFocus
          />
        </div>

        <div className="col-auto">
          <button
            type="submit"
            onClick={addToDos}
            className="btn btn-primary"
            disabled={!itemValue}
            aria-label="Add bucket item">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="d-inline-block">
          <div className="bucket__form">
            <AddBucketForm />
          </div>
          <div></div>
        </div>
      </div>
      {addCard
        ? props.bucketName.map((value, index) => (
          <div key={index}>
            <ContentContainer value={value} />
          </div>
        ))
        : null}
    </div>
  );
};

const BucketListPropTypes = {
  className: PropTypes.string,
  bucketName: PropTypes.array,
  handleaddBucket: PropTypes.func.isRequired,
};

BucketList.propTypes = BucketListPropTypes;

export default BucketList;
