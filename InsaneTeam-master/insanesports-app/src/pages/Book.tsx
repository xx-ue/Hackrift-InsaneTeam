import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack, TextField } from "@mui/material/";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import Menubar from "../components/Menubar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  height: 80px;
  padding: 20px;
  .icon {
    position: absolute;
    left: 5%;
    margin-right: 50px;
    color: #a68c71;
    font-size: 1.5rem;
  }
  h1 {
    font-size: 2rem;
    color: #a68c71;
  }
`;
const MainContainer = styled.div`
  flex: 1;
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  .statusBtn {
    width: 90%;
  }
  .btnBox {
    margin-top: -20px;
    .btn {
      font-size: 0.8rem;
    }
  }
  .updateBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 90%;
    background-color: #b21f31;
    border-radius: 10px;
    color: #f1f2f6;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .detail {
    position: absolute;
    left: 10%;
    font-weight: bold;
    color: #a68c71;
    /* display: flex;
        align-items: flex-start; */
  }
`;
const Card = styled.div`
  position: relative;
  background-color: #f1f2f6;
  height: 150px;
  width: 90%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  .left {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .label {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .rate {
      position: absolute;
      top: 80%;
      left: 5%;
      font-size: 1.1rem;
    }
    .location {
      font-size: 1.2rem;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      width: 100px;
      height: 50px;
    }
  }
`;

function Book() {
  const { state } = useLocation();
  const { locationId } = useParams();
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs("2020-10-16T21:11:54")
  );
  const handleDate = (newValue: Dayjs | null) => {
    setDate(newValue);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };
  console.log(time);
  var information = {
    id: locationId,
    time: time,
    skill: "Intermediate",
    name: "Cindy",
  };
  const uploadData = () => {
    axios
      .post("http://localhost:5000/addparticipant", information)
      .then(function (response: any) {
        console.log(response);
      })
      .catch((error: any) => console.log(error));
  };

  const [match, setMatch] = useState([0,0,0,0,0,0,0,0,0,0]);
  const getMatch = async () => {
    const json = await (await fetch("http://localhost:5000/getmatched")).json();
    setMatch(json);
    console.log(json);
  };

  const fetchAndMatch = async () => {
    uploadData()
    await getMatch();
    if (match.length>=10){
        alert("Successful")
    }
    else{
        console.log(match.length)
        alert("Pending")
    }
  }
  
  return (
    <Container>
      <Menubar />
      <MainContainer>
        <Top>
          <Link to="/">
            <ArrowBackIosNewRoundedIcon className="icon" />
          </Link>
          <h1>BOOK</h1>
        </Top>
        <Tabs>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={handleDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </Tabs>
        <Tabs>
          <Box sx={{ minWidth: 260 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="Time"
                onChange={handleChange}
              >
                <MenuItem value={0}>10:00 - 12:00</MenuItem>
                <MenuItem value={1}>12:00 - 14:00</MenuItem>
                <MenuItem value={2}>14:00 - 16:00</MenuItem>
                <MenuItem value={3}>16:00 - 18:00</MenuItem>
                <MenuItem value={4}>18:00 - 20:00</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Tabs>
        <Tabs>
          <div className="detail">Details: </div>
        </Tabs>
        <Tabs>
          <Card>
            <div className="left">
              <span className="label">LOCATION: </span>
              <span className="location">{state.title}</span>
              <span className="rate">{state.price}</span>
            </div>
            <div className="right">
              <img
                className="image"
                src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"
              />
            </div>
          </Card>
        </Tabs>
        <Tabs>
          <Link to={`/`}><button onClick={fetchAndMatch} className="updateBtn">Confirm</button></Link>
        </Tabs>
      </MainContainer>
    </Container>
  );
}

export default Book;
