import React, { Component } from 'react';
import {TextField, Button, Divider, Card, Typography, CardContent, CardActions} from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
 
import Grid from '@material-ui/core/Grid';
	const style = {
				  card: {
				    maxWidth: 345,

				  },
				  media: {
				    height: 0,
				    paddingTop: '56.25%' // 16:9
				  }
				}
  	
export default class Banner1 extends Component {
	
	state = {
		open: false,
		form: {
				title: '',
				descriptions: '',
				muscles: '' 
		}
	}

  render() {
  	const {open, form: {title, description, muscles}} = this.state
    return (
    	<div>
    	<Card style={style.card}>
     	     <Typography variant="headline" component="h2">
                Hacer Pedido
          </Typography>
      <CardContent>
      <Grid container>
      <Grid item sm={6} >
            Aqui imagen??

      </Grid>
      
      <Grid item sm={6} >
            <li> Realiza tu pedido </li>
            <li> Realiza tu pedido </li>
            <li> Realiza tu pedido </li>
      </Grid>
      </Grid>
      </CardContent>
      </Card>
      </div>
    );
  }
}
