import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menubar from "../components/Menubar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";


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
  .statusBtn {
    width: 90%;
  }
  .btnBox {
    margin-top: -20px;
    .btn {
      font-size: 0.8rem;
    }
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #f1f2f6;
  height: 400px;
  width: 90%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135, 125, 125, 0.71);
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .location {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .cost {
      font-weight: bold;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    .image {
      margin-top: 50px;
      width: 100px;
    }
  }
  .members {
    flex: 1;
  }
`;

const StatusSpan = styled.span`
  padding: 5px;
  border-radius: 5px;
  width: 70px;
  &.Pending {
    color: goldenrod;
    background-color: rgba(189, 189, 3, 0.103);
  }
  &.Confirmed {
    color: green;
    background-color: rgba(0, 128, 0, 0.151);
  }
`;

function Schedule() {
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState([]);
  const getMatch = async () => {
    const json = await (await fetch("http://localhost:5000/getmatched")).json();
    setMatch(json);
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMatch();
  }, []);
  return (
    <Container>
      <Menubar />
      <MainContainer>
        <Top>
          <Link to="/">
            <ArrowBackIosNewRoundedIcon className="icon" />
          </Link>
          <h1>Schedule</h1>
        </Top>
        <Tabs>
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <>
              <Card>
                <div className="left">
                  <StatusSpan className="Confirmed">Confirm</StatusSpan>
                  <div className="location">Khatib Court</div>
                  <div className="cost">price: $2</div>
                  <h3>Players:</h3>
                  <p>1.SyeLoong</p>
                  <p>2.CaoQi</p>
                  <p>3.Lawrence</p>
                  <p>4.Peter</p>
                  <p>5.Jeanie</p>
                </div>
                <div className="right">
                  <img
                    className="image"
                    src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"
                  />
                  <p></p>
                  <p>6.Malcolm</p>
                  <p>7.Ryan</p>
                  <p>8.Jacob</p>
                  <p>9.Arthur </p>
                  <p>10.Cindy </p>
                </div>
              </Card>
            </>
          )}
        </Tabs>
      </MainContainer>
    </Container>
  );
}

export default Schedule;
