import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class BreadCrumb extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  getBreadCrumbItems() {
    return this.props.breadCrumbItems.map((obj) => {
      if (obj.link === '') {
        return (<li key={obj.name} className="breadcrumb__item">
          {obj.name}
        </li>);
      }
      return (<li key={obj.name} className="breadcrumb__item">
        <Link to={obj.link} style={{ cursor: 'pointer' }}>
          {obj.name}
        </Link>
      </li>);
    });
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
                    <li className="breadcrumb__item">
                      <Link to="/Home" className="breadcrumb__link">
                        Home
                      </Link>
                    </li>
                    {this.getBreadCrumbItems()}
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

export default BreadCrumb;
