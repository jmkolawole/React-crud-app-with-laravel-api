import React,{useState, useEffect} from "react";
import {Link, Route} from "react-router-dom";
import Listing from "./Listing";
import Add from "./Add";
import axios from "axios";
import Error from "./../partials/Error";
import Success from "./../partials/Success";



const Edit = (props) => {

    const [category,setCategory] = useState('');
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');


    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategory(category);

        axios.put("http://127.0.0.1:8000/api/category/update/"+props.match.params.id,{
            category: category
        }).then(res => {
            setSuccess("success");
        }, (error => {
            setError("error");
        })).catch(error=>{
            setError("error");
        });
    }
    useEffect( () => {
        getCategory();
    },[]);

    const getCategory = async () => {
        await axios.get("http://127.0.0.1:8000/api/category/edit/" + props.match.params.id).then(res => {
            setCategory(res.data.name);

        });
        //const data = await response.json();

        //You can use .then too here
    }



    const text = "Category Successfully Updated";
    return (
        <div>

            <br/>
            <Link to="/categories" className="btn btn-success">Listing</Link>&nbsp;&nbsp;
            <Link to="/category/add" className="btn btn-secondary">Add</Link>
            <Route exact path="/categories" component={Listing}/>
            <Route exact path="/category/add" component={Add}/>

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

export default Edit;