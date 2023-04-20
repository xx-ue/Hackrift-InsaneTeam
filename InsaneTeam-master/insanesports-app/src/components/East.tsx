import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: 100%;
  gap: 20px;
  padding: 20px;
  .empty {
    background-color: transparent;
    box-shadow: none;
  }
  .last {
    margin-bottom: 90px;
  }
  &:last-child {
    margin-bottom: 90px;
  }
`;
const Card = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f2f6;
  height: 200px;
  width: 100%;
  min-width: 150px;
  max-width: 150px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);

  .title {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .image {
    width: 100px;
    height: 50px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .detail {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .bookBtn {
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 10px;
    border: 1px solid #b21f31;
    border-radius: 10px;
    padding: 5px;
    width: 80px;
  } 
`;

function East() {
  const { state } = useLocation();
  var data;
    switch(state.type){
        case "basketball":
            data = [
              {
                id: 19,
                title: "Simei Court",
                price: "price: $2",
                image: <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>,
              },
              {
                id: 20,
                title: "Bedok Court",
                price: "price: $2",
                image: <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>,
              },
            ]
        break;
        case "soccer":
            data = [
              {
                id: 21,
                title: "Simei Stadium",
                price: "price: $3",
                image: <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>,
              },
              {
                id: 22,
                title: "Bedok Stadium",
                price: "price: $2",
                image: <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>,
              },
            ]
        break;
        case "badminton":
            data = [
              {
                id: 23,
                title: "Simei Indoor",
                price: "price: $4",
                image: <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>,
              },
              {
                id: 24,
                title: "Bedok Indoor",
                price: "price: $4",
                image: <img className="image" src="https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg"/>,
              },
            ]
        break;
        default: 
        break;
    }
  return (
    <Container>
      <MainContainer>
        {data?.map(location => 
          <Card>
            <div className="title">{location.title}</div>
            <div className="detail">{location.price}</div>
            {location.image}
            <Link to={`/${location.id}`} state={{title: `${location.title}`, price: `${location.price}`}}><div className="bookBtn">Book</div></Link>
          </Card>)}
      </MainContainer>
    </Container>
  )
}

export default East