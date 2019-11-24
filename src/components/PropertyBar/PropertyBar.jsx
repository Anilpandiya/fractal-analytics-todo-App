import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './PropertyBar.css';

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleSelecteditTask: PropTypes.func.isRequired,
  handledeleteTask: PropTypes.func.isRequired,
};

const PropertyBar = props => (
  <div className="property_bar__component">
    <button
      data-testid="property-bar-edit-button"
      className="btn btn-secondary property_bar__button"
      onClick={() => props.handleSelecteditTask(props.id)}>
      <FontAwesomeIcon icon={faEdit} size="sm" />
    </button>
    <button
      data-testid="property-bar-delete-button"
      className="btn btn-danger property_bar__button"
      onClick={() => props.handledeleteTask(props.id)}>
      <FontAwesomeIcon icon={faTrash} size="sm" />
    </button>
  </div>
);

PropertyBar.propTypes = propertyBarPropTypes;

export default PropertyBar;
