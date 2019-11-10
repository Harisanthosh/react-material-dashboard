import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
}));

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe
        className={classes.iframe}
        src="http://35.208.2.28:8000/docs"
        title="Oerlikon API Explorer"
      />
    </div>
  );
};

export default Icons;
