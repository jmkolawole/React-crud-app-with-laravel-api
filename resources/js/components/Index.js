import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import "./../../css/style.css"

function Index() {
    return (

        <div className="container">

            <div className="row">
                <div className="col-md-1 col-lg-1 col-xl-1"> </div>
                <div className="col-md-10 col-lg-10 col-xl-10">
                    <Header/>
                    <Footer/>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1"> </div>
            </div>


        </div>


    )
}

export default Index;


ReactDom.render(<BrowserRouter><Index/></BrowserRouter>,document.getElementById("app"));