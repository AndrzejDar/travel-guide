import React, { useState } from "react";
import {
  CircuralProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = ({ places }) => {
  const classes = useStyles();
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState("");

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels & Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value={"restaurants"}>Restaurants</MenuItem>
          <MenuItem value={"hotels"}>Hotels</MenuItem>
          <MenuItem value={"attractions"}>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={"0"}>all</MenuItem>
          <MenuItem value={"3"}>Above 3.0</MenuItem>
          <MenuItem value={"4"}>Above 4.0</MenuItem>
          <MenuItem value={"4.5"}>Above 4.5</MenuItem>
          <MenuItem value={"5"}>Above 5.0</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => {
            // console.log(place.name);          

          return (<Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>)
        })}
      </Grid>
    </div>
  );
};

export default List;