import React from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from '@material-ui/core'
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    marginTop: '25px'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  select:{
    minWidth: 200,
    
  }
}))

const Form = props => {
  const classes = getStyles()
  return (
    <form onSubmit={props.onSubmit} className = "form-search">
      <TextField
        label='Search'
        name='search'
        className={classes.textField}
        onChange={e => props.onInputChange(e.target.value)}
        margin='normal'
        variant='outlined'
      />
      <FormControl variant="outlined" className="form-select">
            <InputLabel id="demo-simple-select-outlined-label">
              Search-Type
            </InputLabel>
            <Select
              className={classes.select}
              onChange={e => props.onSelectChange(e.target.value)}
              labelId="demo-simple-select-outlined-label"
              
            >

              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="multi">Multi</MenuItem>
              <MenuItem value="tv">TV</MenuItem>
              
            </Select>
          </FormControl>
      <Button variant='outlined' className={classes.button} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form
