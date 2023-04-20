import React from 'react'
import styled from 'styled-components';
import Menubar from '../components/Menubar';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Link, useLocation, Outlet, useMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

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

const Tab = styled.span<{isActive: boolean}>`
    color: ${(props) =>
    props.isActive ? "#b21f31" : "#a68c71"};
`;

function Basketball() {
    const eastMatch = useMatch(`/basketball/east`);
    const northMatch = useMatch(`/basketball/north`);
    const southMatch = useMatch(`/basketball/south`);
    const westMatch = useMatch(`/basketball/west`);
    return (
        <Container>
            <Menubar />
            <MainContainer>
                <Top>
                    <Link to="/"><ArrowBackIosNewRoundedIcon className="icon"/></Link>
                    <h1>Select Location</h1>
                </Top>
                <Tabs>
                  <Box className="btnBox">
                    <ButtonGroup color="inherit" variant="outlined" aria-label="outlined button group">
                      <Link to={`/basketball/North`} state={{type: `basketball`}}>
                        <Tab isActive={northMatch !== null}><Button className="btn">North</Button></Tab>
                      </Link>
                      <Link to={`/basketball/South`} state={{type: `basketball`}}>
                        <Tab isActive={southMatch !== null}><Button className="btn">South</Button></Tab>
                      </Link>
                      <Link to={`/basketball/East`} state={{type: `basketball`}}>
                        <Tab isActive={eastMatch !== null}><Button className="btn">East</Button></Tab>
                      </Link>
                      <Link to={`/basketball/West`} state={{type: `basketball`}}>
                        <Tab isActive={westMatch !== null}><Button className="btn">West</Button></Tab>
                      </Link>
                    </ButtonGroup>
                  </Box>
                </Tabs>
                <Outlet />
            </MainContainer>
        </Container>
    )
}

export default Basketball