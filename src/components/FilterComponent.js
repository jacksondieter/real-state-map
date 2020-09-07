import React, { useState } from "react";
import { useStateValue } from '../State';
import {updateFilteredData} from '../actions'

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export default function FilterComponent() {
    const [{ geoData }, dispatch] = useStateValue();

    const classes = useStyles();
    const [typeB, setTypeB] = useState("");

    const [parking, setParking] = useState("");

    const [price, setPrice] = useState([20, 5000]);

    const handleChangeSelect = (event) => {
        setTypeB(event.target.value);
    };

    const handleChangePrice = (event, newPrice) => {
        setPrice(newPrice);
    };

    const handleChangeParking = (event) => {
        setParking(event.target.value);
    };

    const handleOnFilter = (event) => {
        //send
        dispatch(updateFilteredData({type:typeB,parking,price},geoData));
    }

    return (
        <div className={'filter-container'}>

            <FormControl className={classes.formControl} >
                <Select value={typeB} onChange={handleChangeSelect} 
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="">
                    All
                    </MenuItem>
                    <MenuItem value={"Residential"}>Residential</MenuItem>
                    <MenuItem value={"Offices"}>Offices</MenuItem>
                    <MenuItem value={"Commercial"}>Commercial</MenuItem>
                    <MenuItem value={"Industrial"}>Industrial</MenuItem>
                    <MenuItem value={"Mixed use"}>Mixed use</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl} >
                <Select value={parking} onChange={handleChangeParking} 
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="">
                    All
                    </MenuItem>
                    <MenuItem value={true}>with Parking</MenuItem>
                    <MenuItem value={false}>without Parking</MenuItem>
                </Select>
            </FormControl>

            <div>
                <Typography id="range-slider" gutterBottom>
                Price {`${price[0]} : ${price[1]}`}
                </Typography>
                <Slider
                value={price}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                max={5000}
                step={10}
                />
            </div>


            <Button variant="outlined" onClick={handleOnFilter}>
                Filter
            </Button>
        </div>
    );
}
