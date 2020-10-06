import React, { useState, useEffect } from "react";
import axios from "axios";


// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";
import Loading from "./loading";

const App = () => {
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)

  const unselectAuthor = () => setCurrentAuthor(null);

  const getContentView = () => {
    if (loading){
      return <Loading/>;
    } else if  (currentAuthor) {
      return <AuthorDetail author={currentAuthor} />;
    } else {
      return <AuthorList authors={authors} selectAuthor={selectAuthor} />;
    }
  };

  

  const getAuthors = async() => {
    try{
      const responce = await axios.get("https://the-index-api.herokuapp.com/api/authors/");
      console.log(responce.data)
      setAuthors(responce.data)
      setLoading(false)

    } catch (error) {
      console.error(error)
      }
  }

  useEffect( () => {
    getAuthors();
    }, []);

  const selectAuthor = async(author_id) => {
    try{
      setLoading(true)
      console.log(author_id)
      const responce = await axios.get("https://the-index-api.herokuapp.com/api/authors/" +author_id);
      console.log(responce.data)
      setCurrentAuthor(responce.data)
      setLoading(false)


    } catch (error) {
      console.log("sth went wrong")
      console.error(error)
      }
  }

  useEffect( () => {
    selectAuthor();
    }, []);

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar unselectAuthor={unselectAuthor} />
        </div>
        <div className="content col-10">{getContentView()}</div>
      </div>
    </div>
  );
};

export default App;
