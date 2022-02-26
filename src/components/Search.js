import React, {useState} from 'react';
import { InputGroup, Button,FormControl } from 'react-bootstrap';

const Search = () => {
    
    
    const [Newinput, setNewinput] = useState('')

    const handleInputSearch = (e) =>{
        setNewinput(e.target.value);
    }

    const handleSearch = () =>{
        if(Newinput !== ''){
            console.log(Newinput);
        }
        

    }
    
    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" >
            <InputGroup >
                <FormControl
                    placeholder="Search Question"
                    aria-label="Search Question"
                    aria-describedby="basic-addon2"
                    onChange={handleInputSearch}
                    value={Newinput}
                />
                <Button variant="primary" id="button-addon2" onClick={handleSearch}>Tìm Kiếm</Button>
            </InputGroup>
        </div>
    )


}

export default Search