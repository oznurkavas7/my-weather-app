import React from 'react';
import {
    Card, Typography, CardContent
} from '@mui/material';

function DailyWeatherCard({ weather }) {
    if (!weather) {
        return <p>Lokasyon erisimine izin vermeniz gerekir...</p>;

    }

    return (
        <div>
            <Card sx={{ minWidth: 275, background: 'lightblue'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" align="center" gutterBottom>
                        {new Date(weather.dt * 1000).toLocaleDateString()}
                    </Typography>
                    <Typography align="center" sx={{ mb: 1.5 }} color="text.secondary">
                        {weather.name}
                    </Typography>
                    <Typography align="center" variant="h4" sx={{ mb: 1.5 }}>
                        {weather.main.temp} ℃
                    </Typography>
                    <Typography align="center" variant="h5" component="div" sx={{ mb: 1.5, paddingLeft: 1}}>
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='' />
                        {weather.weather.map((data) => data.description).join(", ")}
                    </Typography>
                
                </CardContent>
            </Card>
        </div>
    )
}

export default DailyWeatherCard