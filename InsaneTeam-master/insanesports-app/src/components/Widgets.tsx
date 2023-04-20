import React from 'react'
import styled from 'styled-components';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: #f1f2f6;
    height: 150px;
    width: 90%;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
        .title {
            color: #b21f31;
            font-size: 1.1rem;
            font-weight: bold;
        }
        .icon {
            align-self: flex-end;
            color: #b21f31;
        }
    }
    .scheduleDetails {
        .time {
            display: flex;
            font-weight: bold;
            justify-content: space-around;
            margin-bottom: 10px;
            margin-top: 15px;
            color: #535c68;
        }
        .timeLabel {
            display: flex;
            justify-content: space-around;
        }
    }
    .equipmentDetails {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .image {
        width: 50px;
        height: 50px;
        margin-bottom: 20px;
        margin-top: 10px;
        align-self: flex-end;
    }
`;

interface IWidgets {
    type: string;
}

function Widgets({type}: IWidgets) {
    var data;
    switch(type){
        case "Basketball":
            data = {
                title: <div className="title">Basketball</div>,
                details: 
                <div className="equipmentDetails">
                    <span>Play with up to 15 Players</span>
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/889/889455.png" />
                </div>               
            };
        break;
        case "Soccer":
            data = {
                title: <div className="title">Soccer</div>,
                details: 
                <div className="equipmentDetails">
                    <span>Play with up to 22 Players</span>
                    <img className="image" src="https://p.kindpng.com/picc/s/791-7917287_low-price-e0154-396fd-soccerball-fiil-free-icon.png" />
                </div>               
            };
        break;
        case "Badminton":
            data = {
                title: <div className="title">Badminton</div>,
                details: 
                <div className="equipmentDetails">
                    <span>Play with up to 4 Players</span>
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/2828/2828920.png" />
                </div>               
            };
        break;
        default: 
        break;
    }
  return (
    <Container>
        <Link to={`/${type}`} state={{type: `${type}`}}>
            <div className="top">
                {data?.title}
                <span className="icon"><KeyboardArrowRightRoundedIcon /></span>
            </div>
        </Link>
        {data?.details}
    </Container>
  )
}

export default Widgets