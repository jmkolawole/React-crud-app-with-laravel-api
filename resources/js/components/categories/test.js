import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Listing from "./Listing";
import Add from "./Add";

const [category,setCategory] = useState('');

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
        console.log(res);
    }, (error => {
        console.log(error);
    }));


}


return (
    <div>

        <br/>
        <Link to="/categories" className="btn btn-success">Listing</Link>&nbsp;&nbsp;
        <Link to="/category/add" className="btn btn-secondary">Add</Link>
        <Route exact path="/categories" component={Listing}/>
        <Route exact path="/category/add" component={Add}/>

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