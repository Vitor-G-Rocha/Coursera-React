import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false

        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render() {
        return (
            <>
                <Button color='light' className='btn btn-outline-secondary' onClick={this.toggleModal}>
                    <span className='fa fa-pencil'></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label md={2}>Rating</Label>
                                <Col md={12}>
                                    <Control.select defaultValue={'0'} model=".rating" className="form-control" name='rating'>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label md={3}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model='.yourname' id='yourname' name='yourname'
                                        placeholder='Your Name' className='form-control' validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.yourname'
                                        show='touched'
                                        messages={{
                                            required: 'Required* ',
                                            minLength: 'Must be greater than 2 characters.',
                                            maxLength: 'Must be 15 characters or less.'
                                        }}
                                    />


                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea style={{resize: 'none'}} model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentButton;