import React, { useState, useEffect } from 'react';
import './App.css'
import BooksList from '../BooksList'; 
import Navigation from '../Navigation'

const App = props => {
  const [booksList, useBooksList] = useState({books: null, count: null})
  const [page, setPage] = useState(1);
  const [filters, useFilters] = useState([])
  
  const fetchData = (page = 1, filters = []) => {
    return fetch("http://nyx.vima.ekt.gr:3000/api/books/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: page,
        itemsPerPage: 20,
        filters: filters == 'delete' ? [] : filters
      })
    })
    .then(response => response.json())
    .then(result => useBooksList(result))
    .catch(err => useBooksList({books: [], count: 0}))
  }

  useEffect(() => {
    if(!localStorage.getItem('page')){
      localStorage.setItem('page', 1)
      setPage(localStorage.getItem('page'))
    } else {
      setPage(localStorage.getItem('page'))
    }
    fetchData(page, filters)
  }, [page])

  useEffect(() => {
    if(typeof filters !== 'undefined' && filters.length > 0 && filters !== 'delete'){
      fetchData(1, filters)
    }
    if(filters == 'delete'){
      localStorage.setItem('page', 1)
      setPage(1)
      fetchData(1, [])
    }
  }, [filters])

  return (
    <div>
        <Navigation/>
        <BooksList booksList={booksList.books} count={booksList.count} page={page} setPage={setPage} useFilters={useFilters}/>
    </div>
  )
}

export default App;

