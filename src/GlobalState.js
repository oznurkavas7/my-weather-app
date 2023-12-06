import React, { createContext, useEffect, useState } from "react";
import { usePosition } from "use-position";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [weather, setWeather] = useState();
    const [weeklyWeather, setWeeklyWeather] = useState();
    const [moreWeather, setMoreWeather] = useState();
    const { latitude, longitude } = usePosition();
    const key = process.env.REACT_APP_KEY;
    const lang = navigator.language.split("-")[0];

    const getWeatherData = async (lat, lon) => {
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
        ).then((result) => result.json())
            .then((dataWeather) => {
                if (!dataWeather.errors) {
                    setWeather(dataWeather)
                }
            });

        await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${key}&lang=${lang}&units=metric`
        ).then((resultWeekly) => resultWeekly.json())
            .then((dataWeekly) => {
                if (!dataWeekly.errors) {
                    setWeeklyWeather(dataWeekly);
                }
            });

        await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=13&appid=${key}&lang=${lang}&units=metric`
        ).then((resultMore) => resultMore.json())
            .then((dataMore) => {
                if (!dataMore.errors) {
                    setMoreWeather(dataMore);
                }
            });
    };

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]);

    return (
        <GlobalContext.Provider value={
            {
                weather,
                weeklyWeather,
                moreWeather
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    );
}