import React, { Fragment } from 'react';

function Header() {

    const HeaderStyle = {
        color: 'red',
        margin:'20px 0 20px 150px ',
        display: 'block'
    }
    return (
        <Fragment>
            <h1 style={HeaderStyle}>ProJect 01</h1>
        </Fragment>
    )
}
export default Header