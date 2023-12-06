import React from 'react';
import {
    Card, Typography, CardContent, Grid
} from '@mui/material';
import {  GlobalContext   } from "./GlobalState";
import { useContext } from "react";


const DailyWeatherCard = () => {

    const { weather } = useContext(GlobalContext);

    if (!weather) {
        return <p>Lokasyon erisimine izin vermeniz gerekir...</p>;
    }

    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >

                <Grid item xs={3}>
                    <Card>
                        <Card sx={{ background: '#0074B7' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" align="center" gutterBottom>
                                    {new Date(weather.dt * 1000).toLocaleDateString()}
                                </Typography>
                                <Typography align="center" sx={{ mb: 1.5 }} color="text.secondary">
                                    {weather.name}
                                </Typography>
                                <Typography align="center" variant="h4" sx={{ mb: 1.5 }} color='#BFD7ED'>
                                    {weather.main.temp} ℃
                                </Typography>
                                <Typography align="center" variant="h5" component="div" sx={{ mb: 1.5, paddingLeft: 1 }} color='#BFD7ED'>
                                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='' />
                                    {weather.weather.map((data) => data.description).join(", ")}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default DailyWeatherCard