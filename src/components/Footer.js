import React, { Fragment } from "react"

function Footer() {

    const FooterStyle = {
        color: 'red',
        textAlign: 'center',
        display: 'block',
        bottom: '0px',
        // position:'fixed',
        // width: '100%',
        // marginLeft: '55px'
    }
    return (
        <Fragment>
            <h1 style={FooterStyle}>Tao là thằng ML Footer</h1>
        </Fragment>
    )
}
export default Footer