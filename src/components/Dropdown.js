import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
    height: '30%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    fontSize: '40px',
  },
}));

export default function Dropdown(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label" style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.locationVal}
          onChange={props.handleChange}
          className={classes.label}
        >
          {props.location.map(loc => {
            return <MenuItem value={loc.key}>{loc.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
