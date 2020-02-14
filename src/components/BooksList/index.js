import React, { useState } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import Book from '../Book';
import Pagination from '@material-ui/lab/Pagination';
import BooksSearchInput from '../BooksSearchInput';

const BooksList = (props) => {
  const { classes, booksList, count, page, setPage, useFilters } = props;
  const [input, useInput] = useState('');
  const [showDeleteIcon, useShowDeleteIcon] = useState(false)

  const handleChange = (event, value) => {
    localStorage.setItem('page', value)
    setPage(value)
  };
  
  const onInputChange = event => useInput(event.target.value)

  const searchFilters = () => {
    if(input){
      useFilters([{type: "all", values: [input]}])
      useShowDeleteIcon(true)
    }
  }

  const deleteFilters = () => {
    useFilters('delete')
    useShowDeleteIcon(false)
    useInput('')
  }

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <br/>
          {!booksList && <CircularProgress style={{marginTop: 50}}/>}
          {booksList && (
            <React.Fragment>
              <BooksSearchInput onInputChange={onInputChange} showDeleteIcon={showDeleteIcon} input={input} searchFilters={searchFilters} deleteFilters={deleteFilters}/>
              <br/>
              {booksList.length == 0 && (<Grid item xs={12}><h3 style={{textAlign: 'center'}}>No results found</h3></Grid>)}
              {booksList.length > 0 && (
                <React.Fragment>
                  <div className={classes.paginationContainer}>
                    <Pagination count={parseInt(count / 20) + 1} page={Number(page) || 1} onChange={handleChange} color="primary" />
                  </div>
                  {booksList.map(book => (
                    <Book book={book} key={book.id}/>
                  ))}
                  <div className={classes.paginationContainer}>
                    <Pagination count={parseInt(count / 20) + 1} page={Number(page) || 1} onChange={handleChange} color="primary" />
                  </div>
                  <br/><br/>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </Grid>
      </Container>
    </div>
  )
}


export default withStyles(style)(BooksList);
