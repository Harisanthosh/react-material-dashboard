import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';
import palette from 'theme/palette';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));


const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [data, setData] = React.useState({
    labels: ['1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov', '6 Nov'],
    datasets: [
      {
        label: 'This year',
        backgroundColor: palette.primary.main,
        data: Array(7).fill().map(() => Math.round(Math.random() * 30))
      },
      {
        label: 'Last year',
        backgroundColor: palette.neutral,
        data: Array(7).fill().map(() => Math.round(Math.random() * 30))
      }
    ]
  });

  const handleChange1 = event => {
    setAge1(event.target.value);   
    setData({
      labels: ['1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov', '6 Nov'],
      datasets: [
        {
          label: 'This year',
          backgroundColor: palette.primary.main,
          data: Array(7).fill().map(() => Math.round(Math.random() * 30))
        },
        {
          label: 'Last year',
          backgroundColor: palette.neutral,
          data: Array(7).fill().map(() => Math.round(Math.random() * 30))
        }
      ]
    });
  };

  const handleChange2 = event => {
    setAge2(event.target.value);   
    setData({
      labels: ['1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov', '6 Nov'],
      datasets: [
        {
          label: 'This year',
          backgroundColor: palette.primary.main,
          data: Array(7).fill().map(() => Math.round(Math.random() * 30))
        },
        {
          label: 'Last year',
          backgroundColor: palette.neutral,
          data: Array(7).fill().map(() => Math.round(Math.random() * 30))
        }
      ]
    });
  };

  return (
    <div>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Part Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age1}
          onChange={handleChange1}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Uncoated</MenuItem>
          <MenuItem value={20}>BALINIT® TRITON</MenuItem>
          <MenuItem value={20}>BALINIT® TRITON STAR</MenuItem>
          <MenuItem value={30}>BALINIT® FORMERA</MenuItem>
          <MenuItem value={40}>BALINIT® PERTURA</MenuItem>
          <MenuItem value={50}>BALINIT® FUTURA NANO</MenuItem>
          <MenuItem value={60}>BALINIT® LUMENA</MenuItem>
        </Select>
        <FormHelperText>Select the tool to compare</FormHelperText>
    </FormControl>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Part Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age2}
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Uncoated</MenuItem>
          <MenuItem value={20}>BALINIT® TRITON</MenuItem>
          <MenuItem value={20}>BALINIT® TRITON STAR</MenuItem>
          <MenuItem value={30}>BALINIT® FORMERA</MenuItem>
          <MenuItem value={40}>BALINIT® PERTURA</MenuItem>
          <MenuItem value={50}>BALINIT® FUTURA NANO</MenuItem>
          <MenuItem value={60}>BALINIT® LUMENA</MenuItem>
        </Select>
        <FormHelperText>Select the tool to compare</FormHelperText>
    </FormControl>
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Number of units processed last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Productivity"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
