import React,{useState} from "react";
import {Link, Route} from "react-router-dom";
import Listing from "./Listing";
import axios from "axios";
import Error from "./../partials/Error";
import Success from "./../partials/Success";


const Add = () => {

    const [category,setCategory] = useState('');
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');


    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategory(category);
        console.log(category);

        axios.post("http://127.0.0.1:8000/api/category/store",{
            category: category
        }).then(res => {
            setSuccess("success");
        }, (error => {
            console.log(error);
        })).catch(error=>{
            setError("error");
        });

    }

      const text = "Category Added Successfully";
    return (
        <div>

            <br/>
            <Link to="/categories" className="btn btn-success">Listing</Link>

            <Route exact path="/categories" component={Listing}/>

            <br/>
            <br/>

            {success === "success" ? <Success
             text={text}
            /> : null}
            {error === "error" ? <Error/> : null}
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category_name"><b>Add Category Name</b></label>
                    <input type="text" className="form-control" id="category" onChange={handleChange} value={category} placeholder="Subject"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>



        </div>
    )
}

export default Add