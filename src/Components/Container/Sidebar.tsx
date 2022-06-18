import React, { useState } from "react"
import styled from "styled-components"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { deepPurple } from '@mui/material/colors';



const Sidebar =()=>{
    const marks = [
        {
          value: 0,
          label: 'N0',
        },
        {
          value: 100,
          label: 'N200,000',
        },
      ];
      
      function valuetext(value: number) {
        return `${value}`;
      }
      
    return(
        <Container>
            <Wrapper>
            <Holder>
                <TopCard>
                    <ArrowBackIosIcon/>
                </TopCard>
                </Holder>
                <Card>
                    <p>Filter</p>
                    <Line></Line>
                    <h3>PRICE</h3>
                    <Price>
                    <Box sx={{ width: 280 }}>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={20}
                        getAriaValueText={valuetext}
                        step={1}
                        marks={marks}
                        valueLabelDisplay="on"
                        sx={{ color: deepPurple[800] }}
                    />
                    </Box>
                    <HoldButtons>
                        <But>Check out First</But>
                        <But>Payment First</But>
                    </HoldButtons>
                    </Price>
                    <Line></Line>
                    <Div>
                        <h3>STOPS</h3>
                        <Numbers>
                            <Counts>1</Counts>
                            <Count>2</Count>
                            <Count>3</Count>
                            <Count>4</Count>
                        </Numbers>
                    </Div>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    width: 40%;
    position: fixed; 
    z-index: 1; 
    top: 0; 
    left: 0;
    overflow-x: hidden;
    font-family: poppins;
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`
const Card = styled.div`
    width: 300px;
    min-height: 40vh;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 30px;
    p{
        color: grey;
    }
    h3{
        font-size: 12px;
    }
`
const Holder = styled.div`
    width: 50%;
    height: 100px;
    display: flex;
    padding-top: 20px; 
    padding-bottom: 20px; 
`
const TopCard = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
    transition: all 350ms;
    transition: scale(1);

    :hover{
        cursor: pointer;
        transition: all 350ms;
        transition: scale(1.005);
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);
    }
`
const Line = styled.div`
    background-color: #ebe8e8;
    width: 90%;
    height: 1px;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-size: 12px;
    }
`
const Numbers = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const Count = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid #ebe8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 350ms;
    transform: scale(1);
    color: grey;

    :hover{
        transition: all 350ms;
        transform: scale(1.005);
        cursor: pointer;
        background-color: #8f87df;
        color: white;
    }

    :active{
        background-color: #5448C8;
    }
`
const Counts = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid #ebe8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #5448C8;
    color: white;
    transition: all 350ms;
    transform: scale(1);

    :hover{
        transition: all 350ms;
        transform: scale(1.005);
        cursor: pointer;
        background-color: #8f87df;
    }

    :active{
        background-color: #5448C8;
    }
`
const Price = styled.div``
const HoldButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 40px;
`
const But = styled.div`
    padding: 1px 30px;
    height: 30px;
    border: 1px solid #ebe8e8;
    display: flex;
    justify-content: center;
    align-items: center; 
    color: grey;
    font-size: 12px;
    transition: all 350ms;

    :hover{
        transition: all 350ms;
        cursor: pointer;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);
    }
`