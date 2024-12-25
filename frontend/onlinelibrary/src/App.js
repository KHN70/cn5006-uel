import React, { Component } from "react";
import { BrowserRouter as Router,Routes, Route, Link }
from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./Addbook"
import Book_UpdateForm from "./Book_UpdateForm"
import ShowBooks from "./DisplayData"

export default class App extends Component {
render() {
return (
<Router>
<div className="container">
<center><h2> On- Line Book Library using React </h2> </center>
<br/>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
<Link to="/" className="navbarbrand"><h4>Add a Book</h4></Link>
<Link to="/DisplayBooksF1"
className="navbar-brand"><h4>Display All books</h4>
    </Link>
    </nav>
    <br/>
<Routes>
<Route path="/" element={<Book_Form/>} />
<Route path="/edit/:id"element={<Book_UpdateForm/>} />

<Route path="/DisplayBooksF1"
element={<ShowBooks/>} />
</Routes>
</div>
</Router>
);}}