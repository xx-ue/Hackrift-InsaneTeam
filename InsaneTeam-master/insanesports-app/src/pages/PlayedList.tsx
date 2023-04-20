import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menubar from '../components/Menubar';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';


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
    height: 150px;
    width: 90%;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    display: flex;
    justify-content: space-between;
    .left {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .id {
            font-size: 0.9rem;
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
`;
const Tabs = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

function PlayedList() {
  return (
    <Container>
        <Menubar />
        <MainContainer>
            <Top>
                <Link to="/"><ArrowBackIosNewRoundedIcon className="icon"/></Link>
                <h1>History</h1>
            </Top>
            <Tabs>
                <Card>
                    <div className="left">
                        <span className="id">ID: 2174</span>
                        <span className="location">Toa Payoh Stadium</span>
                        <span className="date">Date: 29/04/2022</span>
                        <Link to={`/ratinglist`}><span className="rate">Rate</span></Link>
                    </div>
                    <div className="right">
                        <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>
                    </div>
                </Card>
            </Tabs>
            <Tabs>
                <Card>
                    <div className="left">
                        <span className="id">ID: 2132</span>
                        <span className="location">Serangoon Stadium</span>
                        <span className="date">Date: 21/04/2022</span>
                        <span className="rate">Rate</span>
                    </div>
                    <div className="right">
                        <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>
                    </div>
                </Card>
            </Tabs>
        </MainContainer>
    </Container>
  )
}

export default PlayedList