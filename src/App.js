import './App.css';
import { useState } from "react";
import DailyWeatherCard from "./DailyWeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import MoreWeatherCard from "./MoreWeatherCard";
import { GlobalProvider } from "./GlobalState";
import {
  Button, Box, ClickAwayListener, Portal
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <GlobalProvider>
      <div>
        <h2 align="center">Hava Durumu</h2>
        <DailyWeatherCard />
        <WeeklyWeatherCard />
        <Box textAlign='center'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{ marginTop: '2em' }}>
              <Button style={{
                borderRadius: 10,
                backgroundColor: "#0074B7",
                fontSize: "15px",
                color: "#BFD7ED"
              }} variant="contained" onClick={handleClick}>
                More
              </Button>
              {open ? (
                <Portal>
                  <MoreWeatherCard></MoreWeatherCard>
                </Portal>
              ) : null}
            </div>
          </ClickAwayListener>
        </Box>
      </div>
    </GlobalProvider>
  );
}

export default App;
