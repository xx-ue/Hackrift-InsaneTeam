import React from 'react'
import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 90%;
    background-color: #a68c71;
    width: 90%;
    border-radius: 10px;
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 50px;
    width: 100%;
    .icon {
        font-size: 2rem;
        margin: 10px;
        color: #b21f31;
    }
`;


function Menubar() {
  return (
    <Container>
        <Contents>
            <Link to="/"><HomeOutlinedIcon className="icon"/></Link>
            <Link to="/schedule"><CalendarMonthOutlinedIcon className="icon" /></Link>
            <Link to="/profile"><PersonOutlineOutlinedIcon className="icon" /></Link>
        </Contents>
    </Container>
  )
}

export default Menubar