import React from 'react';
import Search from './SearchComponent'
import {Button, Label, Col, Row, Card, CardBody,CardTitle} from 'reactstrap';
 
function RenderTestimonials({testimonial}){
 return(
     <Row>
         <Col className = "col col-3">
             <img src = {testimonial.img} className="rounded-circle card-img"/>
         </Col>
         <Col className = "col col-9">
             <p className = "card-title">
                 {testimonial.firstName} {testimonial.lastName}
             </p>
             <p className="small-text">
                 {testimonial.type}
             </p>
            <p>
                {testimonial.quote}
            </p>
         </Col>
     </Row>   
 )
}

function Home(props){
    const directory = props.testimonials.map(testimonial=>{
        return(
            <CardBody className="card card-body slide drop-shadow" key ={testimonial.id}>
            <RenderTestimonials testimonial={testimonial}/>
            </CardBody>
        )
    })
    return(
        <div className = "container-fluid-hidden">
           <div className = "row">
               <div className = "col-7 ml-auto main-img d-none d-lg-block">
               </div>
           </div>
        <div className = "top-container absolute d-flex">
            <div className="align-self-center top-side">
            <h1>
                Get the support you need and deserve.
            </h1>
            <Card className="p-4 mt-5 front-card">
            <Search/>
            </Card>
            </div>
        </div>
        <div className = "section">
        <Row>
            <Col className="col-12 col-lg-3 col-md-6 col-sm-12 icon-container">
                <div className="icon">
                    <img src="https://img.icons8.com/wired/64/000000/reminder.png"/>
                </div>
                <p>Externally set up your women’s health appointment. </p>
            </Col>
            <Col className="col-12 col-lg-3 col-md-6 col-sm-12 icon-container">
                <div className="icon">
                <img src="https://img.icons8.com/wired/64/000000/flash-light.png"/>
                </div>
                <p>Search “app name” for people who are available to help you get to your appointment. </p>
            </Col>
            <Col className="col-12 col-lg-3 col-md-6 col-sm-12 icon-container">
                <div className="icon">
                <img src="https://img.icons8.com/wired/64/000000/third-eye-symbol.png"/>
                </div>
                <p>Connect over chat to set up a meeting place.</p>
            </Col>
            <Col className="col-12 col-lg-3 col-md-6 col-sm-12 icon-container">
                <div className="icon">
                    <img src="https://img.icons8.com/wired/64/000000/messaging-.png"/>
                </div>
                <p>Externally set up your women’s health appointment. </p>
            </Col>
        </Row>  
        </div>
        <div className="icon-section">
            <div className="d-flex flex-lg-row flex-column mr-auto">
                <div className = "side-img">          
                </div>
                <div className = "half align-self-center ml-auto">
                    <h2 className = "padding-bottom">Don’t let lack of access stop you from having control over your body.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus velit vitae lectus fermentum, 
                            in maximus odio porttitor. Duis porttitor tristique varius. Suspendisse elementum nunc at tellus luctus 
                            lobortis. Nullam fringilla tincidunt porta. Aliquam erat volutpat. Nullam quis leo sem. Nunc posuere quis lorem.
                    </p>
                </div>
            </div>
        </div>
        <div className = "section-bottom">
        <Row className="row flex-row flex-nowrap card-deck items">
            {directory}
        </Row>
        </div>
        </div>
    )
}
export default Home;