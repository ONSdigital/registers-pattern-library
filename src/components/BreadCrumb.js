import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class BreadCrumb extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  render() {
    return (
      <div className="page-intro background--gallery">
        <div className="wrapper">
          <div className="col-wrap">
            <div className="col">
              <nav>
                <div className="breadcrumb print--hide">
                  <ol className="breadcrumb__list">
                    {
                      this.props.breadCrumbItems.map((breadcrumb) => {
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
  }
}

BreadCrumb.propTypes = {
  breadCrumbItems: PropTypes.array.isRequired,
};

export default BreadCrumb;
