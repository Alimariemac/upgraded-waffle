import React, {Component} from 'react'
import Home from './HomeComponent'
<<<<<<< HEAD
import Messages from './MessagesComponent'
=======
>>>>>>> 68d11b15bf2e3b6fe64f7678a88ebf5cc0b4c9af
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
<<<<<<< HEAD
                    <Route path ='/messages' component={Messages}/>
=======
>>>>>>> 68d11b15bf2e3b6fe64f7678a88ebf5cc0b4c9af
                    <Redirect to='/home' />
                </Switch>
               <Footer/>
            </div>
          
       )
   }
}

export default withRouter(connect(mapStateToProps)(Main));