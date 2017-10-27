import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const BreadCrumb = ({ breadCrumbItems }) => {
  return (
    <div className="page-intro background--gallery">
      <div className="wrapper">
        <div className="col-wrap">
          <div className="col">
            <nav>
              <div className="breadcrumb print--hide">
                <ol className="breadcrumb__list">
                  {
                    breadCrumbItems.map((breadcrumb) => {
                      if (breadcrumb.link === '') {
                        return (<li key={breadcrumb.name} className="breadcrumb__item">
                          {breadcrumb.name}
                        </li>);
                      }
                      return (<li key={breadcrumb.name} className="breadcrumb__item">
                        <Link to={breadcrumb.link} style={{ cursor: 'pointer' }}>
                          {breadcrumb.name}
                        </Link>
                      </li>);
                    })
                  }
                </ol>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadCrumb.propTypes = {
  breadCrumbItems: PropTypes.array.isRequired,
};

export default BreadCrumb;
