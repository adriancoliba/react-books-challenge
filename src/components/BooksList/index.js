import React, { useState, useEffect, useRef } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Paper, Button, Container, Typography, Grid, InputBase, Divider, CssBaseline, Tooltip} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PanToolIcon from '@material-ui/icons/PanTool';
import Book from '../Book';
import Pagination from '@material-ui/lab/Pagination';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';


const BooksList = (props) => {
  const { classes, booksList, count, page, setPage, useFilters } = props;
  const [input, useInput] = useState('');
  const [showDeleteFilters, useShowDeleteFilters] = useState(false)

  const handleChange = (event, value) => {
    localStorage.setItem('page', value)
    setPage(value)
  };
  
  const onInputChange = event => useInput(event.target.value)

  const searchFilters = () => {
    if(input){
      useFilters([{type: "all", values: [input]}])
      useShowDeleteFilters(true)
    }
  }
  const deleteFilters = () => {
    useFilters('delete')
    useShowDeleteFilters(false)
    useInput('')
  }
  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <br/>
          {!booksList && <CircularProgress />}
          {booksList && (
            <React.Fragment>
              <Grid item className={classes.paperInput}>
                <InputBase name='name' placeholder='eg: Renew gym'
                  className={classes.input}
                  value={input}
                  onChange={onInputChange}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <Tooltip title={'search for'} placement="top-end">
                  <SearchIcon color="primary" onClick={searchFilters}
                    className={classes.iconButton} aria-label="directions"
                  />
                </Tooltip>
                {showDeleteFilters && (
                  <React.Fragment>
                    <Divider className={classes.divider} orientation="vertical" />
                    <Tooltip title={'Delete Filters'} placement="top-end">
                      <DeleteIcon color="secondary" onClick={deleteFilters}
                        className={classes.iconButton} aria-label="directions"
                      />
                    </Tooltip>
                  </React.Fragment>
                )}
              </Grid>
              <br/>
              {booksList.length == 0 && (<Grid item xs={12}><h3 style={{textAlign: 'center'}}>No results found</h3></Grid>)}
              {booksList.length > 0 && (
                <React.Fragment>
                  <div className={classes.paginationContainer}>
                    <Pagination count={parseInt(count / 20) + 1} page={Number(page)} onChange={handleChange} color="primary" />
                  </div>
                  {booksList.map(book => (
                    <Book book={book} key={book.id}/>
                  ))}
                  <div className={classes.paginationContainer}>
                    <Pagination count={parseInt(count / 20) + 1} page={Number(page)} onChange={handleChange} color="primary" />
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
