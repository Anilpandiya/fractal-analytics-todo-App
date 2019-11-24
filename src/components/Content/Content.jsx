import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

import FormContainer from '../../containers/FormContainer';
import FormEditContainer from '../../containers/FormEditContainer';
import FormItemContainer from '../../containers/FormItemContainer';

import './Content.css';

const Content = props => {
  return (
    <div className="container main__content">
      <div className="row row__head">
        <span className="header__span">
          <FontAwesomeIcon className="d-inline-block" icon={faClipboardList} size="lg" alt="List emoji" />
        </span>
        <span className="header__span">{props.value}</span>
        <div className="d-inline-block form__content">
          <FormContainer bucketName={props.value} />
        </div>
      </div>
      {props.items.length ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl content__todos">
            <ul className="list-group content__todos__ul">
              <div>
                {props.items.map((item, index) => (
                  <div key={index} className="content__todos__li">
                    {props.editingItem.id === item.id && props.value === item.bucketName ? (
                      <FormEditContainer item={item} />
                    ) : (
                        <div>{props.value === item.bucketName ? <FormItemContainer item={item} /> : null}</div>
                      )}
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const contentPropTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  editingItem: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

Content.propTypes = contentPropTypes;

export default Content;
