import './App.css';
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import DailyWeatherCard from "./DailyWeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import MoreWeatherCard from "./MoreWeatherCard";
import {
  Button, Box, ClickAwayListener, Portal
} from '@mui/material';

function App() {
  const [weather, setWeather] = useState();
  const [weeklyWeather, setWeeklyWeather] = useState();
  const [moreWeather, setMoreWeather] = useState();
  const { latitude, longitude } = usePosition();
  const key = process.env.REACT_APP_KEY;
  const lang = navigator.language.split("-")[0];
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };


  const getWeatherData = async (lat, lon) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      const result = await data.json();

      setWeather(result);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  const getWeeklyWeatherData = async (lat, lon) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${key}&lang=${lang}&units=metric`
      );
      const result = await data.json();

      setWeeklyWeather(result);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  const getMoreWeatherData = async (lat, lon) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=11&appid=${key}&lang=${lang}&units=metric`
      );
      const result = await data.json();

      setMoreWeather(result);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      getWeatherData(latitude, longitude);
      getWeeklyWeatherData(latitude, longitude);
      getMoreWeatherData(latitude, longitude);
    }
  }, [latitude, longitude]);

  return (
    <div >
      <h2 align="center">Hava Durumu</h2>
      <h2 align="center">Konumunuz: {weather.name}</h2>
      <DailyWeatherCard weather={weather} />
      <WeeklyWeatherCard weeklyWeather={weeklyWeather} />
      <Box textAlign='center'>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div style={{ marginTop: '2em' }}>
            <Button style={{
              borderRadius: 50,
              backgroundColor: "lightblue",
              fontSize: "15px",
              color: "#000"
            }} variant="contained" onClick={handleClick}>
              More
            </Button>
            {open ? (
              <Portal>
                <MoreWeatherCard weeklyWeather={weeklyWeather} moreWeather={moreWeather}></MoreWeatherCard>
              </Portal>
            ) : null}
          </div>
        </ClickAwayListener>
      </Box>
    </div>
  );
}

export default App;
