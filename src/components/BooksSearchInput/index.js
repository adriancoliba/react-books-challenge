import React from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputBase, Divider, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';

const BooksSearchInput = (props) => {
  const { classes, onInputChange, input, searchFilters, deleteFilters, showDeleteIcon } = props;

  return (
    <Grid item className={classes.paperInput}>
      <InputBase name='name' placeholder='Search by Title / Author'
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
      {showDeleteIcon && (
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
  )

}


export default withStyles(style)(BooksSearchInput);
