import React from 'react';

function Footer(props){
    return(
        <div className="footer">
            <div className = "d-flex flex-md-row flex-column mr-auto">
                <div className = "mr-md-auto mr-auto ml-auto ml-md-0 footer-text">
                    <p>Made with ❤️ </p>
                </div>
                <div className = "ml-md-auto mr-md-0 ml-auto mr-auto">
                    <a href="#"><i className="fab fa-facebook-square fa-lg"/></a>
                    <a href="#"><i className="fab fa-linkedin fa-lg"/></a>
                    <a href="#"><i className="fab fa-twitter-square fa-lg"/></a>
                </div>
                </div>
        </div>
    )
}

export default Footer;