import React from 'react';
import Search from './SearchComponent'
import { Card } from 'reactstrap';
 
function Home(props){
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
        </div>
    )
}
export default Home;