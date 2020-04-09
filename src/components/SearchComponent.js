import React, { Component } from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form'
import {Button, Label, Col, Row, Card, CardBody} from 'reactstrap';
import DatePicker from 'react-datepicker';

class Search extends Component{
constructor(props){
    super(props);
    this.state={
        startDate:new Date()
    }
    this.handleChange = this.handleChange.bind(this)
}
    
handleChange = date =>{
    this.setState({
        startDate:date
    })
}

render(){
    return(
            <LocalForm onSubmit={values=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="from">From:</Label>
                                <Control.text 
                                    model=".from" 
                                    className="form-control" 
                                    id="from" 
                                    name="from"
                                    placeholder="Pick-up Location"
                                        />
                                </Col>
                                <Col>
                                <Label htmlFor="to">From:</Label>
                                <Control.text 
                                    model=".to" 
                                    className="form-control" 
                                    id="to" 
                                    name="to"
                                    placeholder="Appointment Location"
                                        />
                                </Col>                
                            </Row>
                            <Row>
                            <Col>
                                <Label htmlFor="date">Appointment Date:</Label>
                                <DatePicker
                                    selected={this.state.startDate} 
                                    onChange={this.handleChange}
                                    model=".date" 
                                    className="form-control" 
                                    id="date" 
                                    name="date"
                                        />
                                </Col>
                                <Col>
                                <Label htmlFor="time">Appointment Time:</Label>
                                <DatePicker
                                    selected={this.state.startDate} 
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    model=".time" 
                                    className="form-control" 
                                    id="time" 
                                    name="time"
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label htmlFor="people">Number of People:</Label>
                                    <Control.text
                                    type="number"
                                    model=".people" 
                                    className="form-control" 
                                    id="people" 
                                    name="people"
                                    placeholder="0"
                                        />
                                </Col>
                            </Row>
                        </LocalForm>
    )
}

}
export default Search

