import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <div>
                <p><Link to='/'>home</Link></p>
                <h1>About page</h1>
            </div>
        )
    }
}

export default About;