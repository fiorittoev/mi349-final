import React from 'react';
import { Link } from 'react-router-dom';

function NotFound({ header, description }) {
  return (
    <div className="page not-found-page">
      <div className="page-content">
        {(header || description) && (
          <div className="page-header">
            {header && <h1 className="page-header-title">{header}</h1>}
            {description && <p className="page-header-description">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotFound;
