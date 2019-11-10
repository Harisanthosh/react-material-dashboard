import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';


import palette from 'theme/palette';

import mockData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center'
  },
  // content: {
  //   padding: 0
  // },
  image: {
    height: 48,
    width: 48
  },
  button: {
    margin: theme.spacing(5),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
   actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [products] = useState(mockData);

  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [hasError, setErrors] = useState(false);
  const [reasons, setReasons] = useState({});

  // async function fetchData() {
  //   const res = await fetch("http://localhost:8000/readeolreasons");
  //   res
  //     .json()
  //     .then(res => setReasons(res))
  //     .catch(err => setErrors(err));
  // }
  
  // useEffect(() => {
  //   fetchData();
  // });

  const handleChange1 = event => {
    setAge1(event.target.value);
  };

  const handleChange2 = event => {
    setAge2(event.target.value);
  };

  const submitButton = () => {
    setOpen(true);
    alert("Coating Case updated successfully");
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={`${products.length} tools in total`}
        title="Update Tool Coating details"
      />
      <Divider />
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <h2 id="modal-title">
          Success
        </h2>
        <p id="modal-description">
          Coating Case updated successfully
        </p>
      </Modal> */}
      <FormControl className={classes.formControl}>
        <InputLabel>End of Life Reasons</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age1}
          onChange={handleChange1}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {reasons.map((reason, i) => (
           <MenuItem value={reason[0]}>{reason[1]}</MenuItem>
          ))} */}
          <MenuItem value={1}>Tool (and test) still running</MenuItem>
          <MenuItem value={2}>Tool needed regular recoating</MenuItem>
          <MenuItem value={3}>Coating failed</MenuItem>
          <MenuItem value={4}>Tool worn, had to be scrapped</MenuItem>
          <MenuItem value={5}>Tool cracked</MenuItem>
          <MenuItem value={6}>Tool still ok, part not produced anymore</MenuItem>
          <MenuItem value={7}>other … fill in manually</MenuItem>
        </Select>
        {/* <FormHelperText>Select the reason for end of life</FormHelperText> */}
    </FormControl>
    <Divider />
    <FormControl className={classes.formControl}>
        <InputLabel>Coating type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age2}
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Uncoated</MenuItem>
          <MenuItem value={2}>BALINIT® TRITON</MenuItem>
          <MenuItem value={3}>BALINIT® TRITON  STAR</MenuItem>
          <MenuItem value={4}>BALINIT® FORMERABALINIT® FORMERA</MenuItem>
          <MenuItem value={5}>BALINIT® PERTURA</MenuItem>
          <MenuItem value={6}>BALINIT® FUTURA NANO</MenuItem>
          <MenuItem value={7}>BALINIT® LUMENA</MenuItem>
        </Select>
    </FormControl>
    <Divider />
    <TextField
          id="standard-basic"
          className={classes.textField}
          label="Total Parts Produced"
          margin="normal"
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Total Cost of tools"
          margin="normal"
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Total Cost of tools"
          margin="normal"
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Parts Produced per hour"
          margin="normal"
        />
      <Button size="large" variant="contained" color="primary" className={classes.button} onClick={submitButton} >
        Submit
      </Button>
      
      <Divider />
      
      
      {/* <CardContent className={classes.content}>
        <List>
          {products.map((product, i) => (
            <ListItem
              divider={i < products.length - 1}
              key={product.id}
            >
              <ListItemAvatar>
                <img
                  alt="Product"
                  className={classes.image}
                  src={product.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={`Updated ${product.updatedAt.fromNow()}`}
              />
              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent> */}

      <Divider />

    {/* <div>{JSON.stringify(reasons)}</div>; */}
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
