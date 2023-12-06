import React from 'react';
import {
    Box, Slide, Paper
} from '@mui/material';
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import { useContext } from "react";
import {  GlobalContext } from "./GlobalState";

const MoreWeatherCard = () => {
    const { weeklyWeather, moreWeather } = useContext(GlobalContext);

    var result = moreWeather.list.filter(e => !weeklyWeather.list.find(a => e.dt === a.dt));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: '#BFD7ED',
        border: '2px solid #003B73',
        boxShadow: 15,
        p: 4,
    };

    if (!weeklyWeather) {
        return <p>Lokasyon erisimine izin vermeniz gerekir...</p>;
    }

    return (
        <div>
            <Slide in={true} >
                <Paper elevation={4}>
                    <Box sx={style}>
                        <WeeklyWeatherCard result={result} />
                    </Box>
                </Paper>
            </Slide>
        </div>
    )
}

export default MoreWeatherCard
