import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  display: flex;
  width: 550px;
  box-sizing: border-box;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100vh;
  }
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-areas: "left center right";
  padding: 20px;
  background-color: #3498db;
  color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;
export const NickName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  grid-area: center;
`;
export const IconHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  grid-area: right;
`;
export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 10px;
`;
export const ContentBox = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 150px 1fr 20px;
  grid-template-areas: "left center right";
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  background-image: ${({ avatar }) => `url(${avatar})`};
  border: 5px solid #e6e6e6;
  svg {
    display: none;
    color: #fff;
    font-size: 30px;
    position: absolute;
  }
  :hover {
    background-image: none;
    background-color: #3498db;
    border: 5px solid #5cc0ff;
    svg {
      display: block;
    }
  }
`;
export const Message = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: #e6e6e6;
  box-sizing: border-box;
  grid-area: center;
  border-radius: 10px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const Arrow = styled.div`
  position: absolute;
  left: 140px;
  bottom: 35%;
  height: 0;
  width: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #e6e6e6;
`;
export const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  color: #95a5a6;
`;
