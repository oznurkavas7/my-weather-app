import React from 'react';
import {
    Grid, Paper, Typography
} from '@mui/material';
import { useContext } from "react";
import {  GlobalContext } from "./GlobalState";

const WeeklyWeatherCard = ({result}) => {
    const { weeklyWeather } = useContext(GlobalContext);

    var resulArr = result ? result : weeklyWeather && weeklyWeather.list;

    if (!weeklyWeather) {
        return <p>Lokasyon erisimine izin vermeniz gerekir...</p>;
    }

    return (
        <div style={{marginTop: weeklyWeather && weeklyWeather.list && '2em'}}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={0.5}>
                        {resulArr.map((value) => (
                            <Grid key={value.dt_txt} item>
                                <Paper sx={{
                                    height: 200,
                                    width: 200,
                                    backgroundColor: '#0074B7'
                                }}>
                                    <div>
                                        <Typography sx={{ fontSize: 14, paddingLeft: 1, paddingTop: 1 }} color="text.secondary" gutterBottom>
                                            {value.dt_txt}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5, paddingLeft: 1, paddingTop: 1 }} color='#BFD7ED'>
                                            {value.main.temp} ℃
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ mb: 1.5, paddingLeft: 1}} color='#BFD7ED'>
                                            <img src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`} alt='' />
                                            {value.weather.map((data) => data.description).join(", ")}
                                        </Typography>
                                    </div>
                                </Paper>


                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default WeeklyWeatherCard