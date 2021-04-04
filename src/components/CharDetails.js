import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    width: '550px',
    backgroundColor: grey[600],
    margin: '20px',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[500],
    fontSize: 50,
    height: 70,
    width: 70,
    color: grey[100],
  },
  name: {
    fontSize: '30px',
    fontWeight: 'bold',
    paddingLeft: '10px',
    color: '#ffffff',
    color: '#f1f1f1',
    '&:hover': {
      color: '#fdad5c',
    },
    cursor: 'pointer',
  },
  green: {
    fontSize: '24px',
    color: 'rgb(85, 204, 68)',
    fontWeight: 'bold',
    paddingLeft: '10px',
  },
  red: {
    fontSize: '24px',
    color: 'rgb(214, 61, 46)',
    fontWeight: 'bold',
    paddingLeft: '10px',
  },
  label: {
    fontSize: '30px',
    color: '#ffffff',
  },
}));

export default function CharDetails(props) {
  const classes = useStyles();

  console.log('LOCATION : ', props.location.state);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.location.state.name[0]}
          </Avatar>
        }
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className={classes.label}>Name : </div>
            <div className={classes.name}>{props.location.state.name}</div>
          </div>
        }
        subheader={
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '24px', color: 'white' }}>Status : </div>
              <div className={props.status === 'Alive' ? classes.green : classes.red}>
                {props.location.state.status}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '24px', color: 'white' }}>Last Known Location : </div>
              <div style={{ fontSize: '30px', fontWeight: 'bold', paddingLeft: '10px', color: '#ffffff' }}>
                {props.location.state.knownLocation}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '24px', color: 'white' }}>Gender : </div>
              <div style={{ fontSize: '30px', fontWeight: 'bold', paddingLeft: '10px', color: '#ffffff' }}>
                {props.location.state.gender}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '24px', color: 'white' }}>Species : </div>
              <div style={{ fontSize: '30px', fontWeight: 'bold', paddingLeft: '10px', color: '#ffffff' }}>
                {props.location.state.species}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '24px', color: 'white' }}>Type : </div>
              <div style={{ fontSize: '30px', fontWeight: 'bold', paddingLeft: '10px', color: '#ffffff' }}>
                {props.location.state.type}
              </div>
            </div>
          </>
        }
      />
      <CardMedia className={classes.media} image={props.location.state.image} title="Paella dish" />
    </Card>
  );
}
