import React from "react";
import {Link} from "react-router-dom";


function Error404() {
    return(
        <div>

            <div className="alert alert-danger">
                404 Page not found<br/>
                <Link to="/" className="alert-link">Back to home</Link>
            </div>

        </div>
    )
}


export default Error404;
