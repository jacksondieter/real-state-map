import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
    const classes = useStyles();
    const [typeB, setTypeB] = useState("");

    const [parking, setParking] = useState(true);

    const [price, setPrice] = useState([20, 100]);

    const handleChangeSelect = (event) => {
        setTypeB(event.target.value);
    };

    const handleChangePrice = (event, newPrice) => {
        setPrice(newPrice);
    };

    const handleChangeParking = (event) => {
        setParking(event.target.checked);
    };

    const handleOnFilter = (event) => {
        //send
        //{type:typeB,parking,price}
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

        <div>
            <Typography id="range-slider" gutterBottom>
            Price {`${price[0]} : ${price[1]}`}
            </Typography>
            <Slider
            value={price}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={1000}
            step={10}
            />
        </div>

            <FormControlLabel
            control={
                <Switch
                checked={parking}
                onChange={handleChangeParking}
                name="parking"
                color="primary"
                />
            }
            label="Parking"
            labelPlacement="top"
            />
            <Button variant="outlined" onClick={handleOnFilter}>
                Filter
            </Button>
        </div>
    );
}
