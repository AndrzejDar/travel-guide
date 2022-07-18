import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {Box, Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import mapStyles from './mapStyles';


const Map = ({setCoordinates, setBounds, coordinates, places ,setChildClicked}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');
  

  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}        
        center={coordinates}
        defaultZoom={16}
        margin={[50,50,50,50]}
        options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        onChange={(e)=>{
          setCoordinates({lat: e.center.lat, lng: e.center.lng });
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child)=>{
          setChildClicked(child)
          console.log({child});
        }}
        >

          {places?.map((place, i )=> (
            //exclude locations without name
            place.name?(

              <div 
              className={classes.markerContainer}
              lat={place.latitude}
              lng={place.longitude}
              key={i}
              text={place.name}
              onClick={(e)=>{
                console.log(e)
              }}
              >
              {isDesktop?(
                <>
                <Box display='flex'  align="center" alignItems='center'>
                {/* <LocationOnOutlinedIcon fontSize='large' /> */}
                <Paper elevation={3} className={classes.markerInfo}>
                
                <Rating value={Number(place.rating)} size="small" readOnly />
                <Typography className={classes.typography} variant='h6' >
                {place.name}
                </Typography>
                {/* {console.log(place)} */}
                
                </Paper>
                </Box>
                {/* <LocationOnOutlinedIcon /> */}
                </>
                
                ):(
                  <LocationOnOutlinedIcon fontSize='large' />
                  
                  )}
                  
                  </div>
                  ):(<></>)
          ))}

      </GoogleMapReact>
    </div>
  )
}

export default Map;