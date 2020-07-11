import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import "./style.css"

const AllEpisodes = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [next, setNext] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const fetchEpisodes = async () => {
    setLoading(true);
    let number = 1;
    if (next) {
      number += 1;
    } else {
      number = 1;
    }
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode/?page=${number}`
    );

    if (res.data.info.next) {
      setNext(true);
    } else {
      setNext(false);
    }
    setPageCount(res.data.info.pages);
    let allRes = { ...res.data };
    setPosts(allRes.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);
  
  const currentPosts = posts;
 
  const paginate = pageNumber => {
    if (currentPage === pageNumber) {
      return;
    }
    setCurrentPage(pageNumber);
    fetchEpisodes();
  };

  return (
    <div className="text-monospace">
      <button className="btn btn-secondary text-justify p-3 mx-4 mt-4">
        <Link to="/search" className="text text-light">
          To Find an Episode, enter it's name
        </Link>
      </button>
      <div className="container mt-5 ">
        <h1 class="text-main">Rick And Morty</h1>
        <h2 class="text-sub">Episode List</h2>
        <Post posts={currentPosts} loading={loading} />
        <Pagination totalPage={pageCount} paginate={paginate} />
      </div>
    </div>
  );
};

export default AllEpisodes;
