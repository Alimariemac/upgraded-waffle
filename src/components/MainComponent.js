import React, {Component} from 'react'
import Home from './HomeComponent'
import Messages from './MessagesComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {TESTIMONIALS} from "../shared/testimonials"
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return{
        testimonials: state.testimonials
    }
}

class Main extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            testimonials:TESTIMONIALS
        }
    }


   render(){
       return(
           <div>
               <Header/>
                <Switch>
                    <Route exact path = '/home' render={()=> <Home testimonials={this.props.testimonials}/>} />
                    <Route path ='/messages' component={Messages}/>
                    <Redirect to='/home' />
                </Switch>
               <Footer/>
            </div>
          
       )
   }
}

export default withRouter(connect(mapStateToProps)(Main));