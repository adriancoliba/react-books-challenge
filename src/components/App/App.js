import React, { useState, useEffect } from 'react';
import style from './App.css';
import BooksList from '../BooksList'; 
import Navigation from '../Navigation'

const App = props => {
  const [booksList, useBooksList] = useState({books: null, count: null})
  const [page, setPage] = useState(1);
  const  [filters, useFilters] = useState([])

  useEffect(() => {
    if(!localStorage.getItem('page')){
      localStorage.setItem('page', 1)
      setPage(localStorage.getItem('page'))
    } else {
      setPage(localStorage.getItem('page'))
    }
    fetch("http://nyx.vima.ekt.gr:3000/api/books/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: page,
        itemsPerPage: 20,
      })
    })
    .then(response => response.json())
    .then(result => useBooksList(result))
  }, [page])

  useEffect(() => {
    if(typeof filters !== 'undefined' && filters.length > 0 && filters !== 'delete'){
      fetch("http://nyx.vima.ekt.gr:3000/api/books/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: 1,
        itemsPerPage: 20,
        filters: filters
      })
    })
    .then(response => response.json())
    .then(result => useBooksList(result))
    }
    if(filters == 'delete'){
      localStorage.setItem('page', 1)
      setPage(1)
      fetch("http://nyx.vima.ekt.gr:3000/api/books/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          page: page,
          itemsPerPage: 20,
        })
      })
      .then(response => response.json())
      .then(result => useBooksList(result))
      }
  }, [filters])

  console.log(booksList)
  return (
    <div>
        <Navigation/>
        <BooksList booksList={booksList.books} count={booksList.count} page={page} setPage={setPage} useFilters={useFilters}/>
    </div>
  )
}

export default App;

