import React from 'react';
import { Media } from 'reactstrap';

function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This webpage was made using a recursive function with the help of this flowchart created from the users
                u/Hessian14 and u/coolsideofyourpillow from r/Netflix.    
            </p>
            <Media object src='images/flowchart.png' alt='flowchart' width='100%' />
        </div>
    );
}

export default About;
