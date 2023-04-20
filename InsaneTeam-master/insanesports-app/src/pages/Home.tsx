import React from 'react'
import Menubar from '../components/Menubar'
import styled from 'styled-components';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Widgets from '../components/Widgets';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Top = styled.div`
    margin-top: 20px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 20px;
    .left {
        display: flex;
        flex-direction: column;
        .title {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
        .name {
            font-size: 1.4rem;
            font-weight: bold;
        }
    }
    .right {
        display: flex;
        align-items: center;
        .profile {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            margin-left: 20px;
        }
    }
    .icon {
        font-size: 30px;
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
const MainContainer = styled.div`
    flex: 1;
`;

function Home() {
  return (
    <Container>
        <Menubar />
        <MainContainer>
            <Top>
                <div className="left">
                    <span className="title">Welcome</span>
                    <span className="name">Cindy Lim</span>
                </div>
                <div className="right">
                    <Link to="/list"><ThumbUpOffAltIcon className="icon" /></Link>
                    <Link to="/profile"><img className="profile" src="https://static.independent.co.uk/2022/09/07/01/newFile.jpg?quality=75&width=982&height=726&auto=webp"/></Link>
                </div>
            </Top>
            <Tabs>
                <Widgets type="Basketball" />
            </Tabs>
            <Tabs>
                <Widgets type="Soccer"/>
            </Tabs>
            <Tabs>
                <Widgets type="Badminton"/>
            </Tabs>        
        </MainContainer>
    </Container>
  )
}

export default Home