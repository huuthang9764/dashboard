import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Sort = () => {

    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">  
                    Sort
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default Sort
