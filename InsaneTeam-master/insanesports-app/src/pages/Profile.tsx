import React from 'react'
import styled from 'styled-components';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsTennis from '@mui/icons-material/SportsTennis';
import Menubar from '../components/Menubar';

const Container = styled.div`
    .menubar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Header = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 30px;
    &::before {
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        top: 0;
        left: 0;
        max-width: 100%;
        min-height: 40px;
        display: inline-block;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform: scaleX(1.5);
        background-position: right top;
        background-size: 100vw 200px;
        background-color: #ff7979;
    }
    .profile {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: 30px;
    }
`;

const MainHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 500px;
    background-color: transparent;
    gap: 10px;
    .name {
        font-weight: bold;
    }
    .skill {

    }
`;

const Tabs = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
`;

function Profile() {
  return (
    <Container>
        <div className="menubar">
            <Menubar />
        </div>
        <Header>
            <MainHeader>
                <img className="profile" src="https://static.independent.co.uk/2022/09/07/01/newFile.jpg?quality=75&width=982&height=726&auto=webp"/>
                <span className="name">Cindy Lim</span>
                <span className="skill">Basketball Enthusiast</span>
            </MainHeader>
        </Header>
        <Tabs>
            <LocalPhoneIcon /> +65 86231273
        </Tabs>
        <Tabs>
            <EmailIcon /> cindyLim@gmail.com
        </Tabs>
        <Tabs>
            <SportsBasketballIcon /> Basketball: Intermediate
        </Tabs>
        <Tabs>
            <SportsSoccerIcon /> Soccer: Beginner
        </Tabs>
        <Tabs>
            <SportsTennis /> Badminton: Beginner
        </Tabs>
    </Container>
  )
}

export default Profile