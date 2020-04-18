import React,{useEffect, useState} from "react";
import axios from "axios";
import {Link, Route} from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Error from "./../partials/Error";
import Success from "./../partials/Success";
import Pagination from "react-js-pagination";



const Listing = () =>{

    const [categories,setCategories] = useState([]);
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    const [activePage,setActivePage] = useState(1);
    const [itemsCountPerPage,setItemsCountPerPage] = useState(1);
    const [totalItemsCount,setTotalItemsCount] = useState(1);


        useEffect( () => {
        getCategories();
    },[]);

    const getCategories = async () => {
        await axios.get(`http://127.0.0.1:8000/api/categories`).then(res => {
            setCategories(res.data.data);
            setCategories(res.data.data);
            setActivePage(res.data.current_page);
            setItemsCountPerPage(res.data.per_page);
            setTotalItemsCount(res.data.total);
        });
        //const data = await response.json();


    }

    const onDelete = (category_id) =>{


        axios.delete("http://127.0.0.1:8000/api/category/delete/" + category_id).then(res => {
            setSuccess("success");
         }).catch(error=>{

            setError("error");
        });
        const items = categories.filter(category=>category.id !== category_id);
        setCategories(items);
    }

    const handlePageChange = async (pageNumber) => {

        await axios.get(`http://127.0.0.1:8000/api/categories?page=`+ pageNumber).then(res => {
            setCategories(res.data.data);
            setActivePage(res.data.current_page);
            setItemsCountPerPage(res.data.per_page);
            setTotalItemsCount(res.data.total);
        });

    }








    const text = "Category Deleted Successfully";
    return(
        <div>


            <br/>
            <Link to="/category/add" className="btn btn-secondary">Add</Link>

            <Route exact path="/category/add" component={Add}/>
            <Route exact path="/category/edit/:id" component={Edit}/>


            <br/>
            <br/>

            {success === "success" ? <Success
                text={text}
            /> : null}
            {error === "error" ? <Error/> : null}
            <br/>
            <br/>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Created On</th>
                    <th>Updated On</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>

                {
                    categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.active ===1 ? "Active" : "Inactive"}</td>
                            <td>{new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                            }).format(Date.now(category.created_at))}
                            </td>
                            <td>{new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                            }).format(Date.now(category.updated_at))}
                            </td>

                            <td>
                                <Link to={`/category/edit/${category.id}`} className="btn btn-primary danger">Edit</Link>
                                <a className="btn btn-danger"  onClick={() => {
                                    onDelete(category.id);
                                }}><span className="delete">Delete</span></a>

                            </td>

                        </tr>

                    ))
                }

                </tbody>
            </table>

            <div className="d-flex justify-content-center">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={3}
                    onChange={pageNumber => handlePageChange(pageNumber)
                    }
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>

        </div>

    )

}


export default Listing