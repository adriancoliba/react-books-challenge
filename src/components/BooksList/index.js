import React, { useState, useEffect, useRef } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';

import {Paper, Button, Container, Grid, InputBase, Divider, CssBaseline, Tooltip} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PanToolIcon from '@material-ui/icons/PanTool';

const BooksList = (props) => {

  const { classes } = props

  return (
    <div>
      <br/><br/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <Button>This is great</Button>
        </Grid>
      </Container>
    </div>
  )

}


export default withStyles(style)(BooksList);
