import React, { useState, useEffect, useRef } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Paper, Button, Container, Typography, Grid, InputBase, Divider, CssBaseline, Tooltip} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PanToolIcon from '@material-ui/icons/PanTool';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BooksList = (props) => {
  const [seeMore, useSeeMore] = useState(false)
  const { classes, book } = props

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography variant="h6">{book.book_title}</Typography>
      <Typography variant="subtitle2"><span style={{fontSize: 13}}>by</span> {book.book_author}</Typography>
      {!seeMore && <ExpandMoreIcon onClick={() => useSeeMore(true)} className={classes.button}/>}
      {seeMore && (
        <Typography variant="caption" component={'h6'}>
          {`Published in
          ${book.book_publication_city && book.book_publication_city + ','}
          ${book.book_publication_country && book.book_publication_country + ','}
          ${book.book_publication_year}.
          `}
          &nbsp; {book.book_pages} pages
        </Typography>   
      )}
    </Paper>
  )

}


export default withStyles(style)(BooksList);
