// Demo component
// this is only example component
// you can find tests in __test__ folder

import React from 'react';

class NavBar extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return (
            <div className="my-component">
              <h1>NavBar</h1>
            </div>
        )
    }
};

export default NavBar;