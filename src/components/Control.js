import React, {useState} from 'react';
import Search from './Search';
import Sort from './Sort';
import Form from './Form';
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap';
import { InputGroup,FormControl } from 'react-bootstrap';


    

const Control = props => {

    const addQuestion = props.addQuestionFunc

    const [question, setQuestion] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleForm = (e) =>{
        setQuestion(e.target.value);
    }
    const handleAdd = (e) =>{
        e.preventDefault()
        if(question !==''){
            addQuestion(question)
            setQuestion('')
            handleClose()
        }
    }
    return (
        <div className="row" >
            <Search />
            <Sort />
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Button  variant="primary" onClick={handleShow} >Add Question</Button>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}> 
                <Modal.Header >
                    <Modal.Title>Add Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup >
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={handleForm}
                            value={question}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                <Button variant="primary" onClick={handleAdd}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )


}
Control.propTypes = {
    addQuestionFunc: PropTypes.func.isRequired
  }
export default Control