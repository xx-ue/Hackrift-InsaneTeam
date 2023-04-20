import * as React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Favicon from "react-favicon";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

import Button from "@mui/material/Button";

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
const Card = styled.div`
  position: relative;
  background-color: #f1f2f6;
  height: 50px;
  width: 95%;
  padding: 15px;
  box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .id {
      font-size: 0.6rem;
      font-weight: bold;
    }
    .rate {
      position: absolute;
      top: 80%;
      left: 5%;
      border-bottom: 1px solid grey;
      cursor: pointer;
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
  &:last-child {
    margin-bottom: 30px;
  }
`;
const Tabs = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const labels: { [index: string]: string } = {
  1: "Beginner",

  2: "Early Intermediate",

  3: "Intermediate",

  4: "Advanced",

  5: "Pro",
};
function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [value2, setValue2] = React.useState<number | null>(2);
  const [value3, setValue3] = React.useState<number | null>(2);
  const [value4, setValue4] = React.useState<number | null>(2);
  const [value5, setValue5] = React.useState<number | null>(2);
  const [value6, setValue6] = React.useState<number | null>(2);
  const [value7, setValue7] = React.useState<number | null>(2);
  const [value8, setValue8] = React.useState<number | null>(2);
  const [value9, setValue9] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(2);
  const [hover2, setHover2] = React.useState(2);
  const [hover3, setHover3] = React.useState(2);
  const [hover4, setHover4] = React.useState(2);
  const [hover5, setHover5] = React.useState(2);
  const [hover6, setHover6] = React.useState(2);
  const [hover7, setHover7] = React.useState(2);
  const [hover8, setHover8] = React.useState(2);
  const [hover9, setHover9] = React.useState(2);


  return (
    <Container>
      <MainContainer>
        <Top>
          <Link to="/">
            <ArrowBackIosNewRoundedIcon className="icon" />
          </Link>
          <h1>Rate your teammates</h1>
        </Top>
        <Tabs>
          <Card>
            <Typography component="legend">SyeLoong</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">CaoQi</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value2}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue2(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover2(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover2 !== -1 ? hover2 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Lawrence</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value3}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue3(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover3(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover3 !== -1 ? hover3 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Peter</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value4}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue4(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover4(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover4 !== -1 ? hover4 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Jeanie</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value5}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue5(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover5(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover5 !== -1 ? hover5 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Malcolm</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value6}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue6(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover6(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover6 !== -1 ? hover6 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Ryan</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value7}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue7(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover7(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover7 !== -1 ? hover7 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Jacob</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value8}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue8(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover8(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover8 !== -1 ? hover8 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
          <Card>
            <Typography component="legend">Arthur</Typography>

            <Box
              sx={{
                width: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value9}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue9(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover9(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover9 !== -1 ? hover9 : value]}</Box>
              )}
            </Box>
          </Card>
        </Tabs>
        <Tabs>
        <Link to="/">
          <Button variant="contained">Submit</Button>
          </Link>
        </Tabs>
      </MainContainer>
    </Container>
  );
}
