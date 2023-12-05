import React from 'react';
import {
    Box
} from '@mui/material';
import WeeklyWeatherCard from "./WeeklyWeatherCard";

function MoreWeatherCard({ weeklyWeather, moreWeather }) {
    var result = moreWeather.list.filter(e => !weeklyWeather.list.find(a => e.dt === a.dt));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    if (!weeklyWeather) {
        return <p>Lokasyon erisimine izin vermeniz gerekir...</p>;

    }

    return (
        <div>
            <Box sx={style}>
                <WeeklyWeatherCard weeklyWeather={result} />
            </Box>
        </div>
    )
}

export default MoreWeatherCard
