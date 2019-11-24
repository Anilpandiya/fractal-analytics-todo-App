import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const headerPropTypes = {
  className: PropTypes.string,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span navbar-brand">
          <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
        </span>
        <span className="header__span">Fractal Analytics- Todo App</span>
      </nav>
      <a className="header__span" target="_blank" href="https://anilpandiya.github.io" rel="noopener noreferrer">@anil_kumar</a>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
