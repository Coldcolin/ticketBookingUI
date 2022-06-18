import React from "react"
import styled from "styled-components"
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import logo from "../Images/logo.png"
import { deepPurple } from '@mui/material/colors';

const TopCard = ()=>{
    return(
        <Hold>
            <TopCar>
                <Dist>
                    <Image src={logo} alt=""/>
                    <Destination>
                        <div>V/ISL</div>
                        <div>EKO ATL</div>
                    </Destination>
                    <Ports>
                        <div>Port</div>
                        <div>Port</div>
                    </Ports>
                </Dist>
                <Details>
                    <Duration>
                        <Icons>
                            <AirlineSeatReclineNormalIcon sx={{ fontSize: 15, color: deepPurple[800] }}/>
                        </Icons>
                        <div>Sat 12 Mar - Fri 23 Mar</div>
                    </Duration>
                    <Passengers>
                    <Icons>
                    <AirlineSeatReclineNormalIcon sx={{ fontSize: 15, color: deepPurple[800] }}/>
                    </Icons>
                        <div>8 Passengers</div>
                    </Passengers>
                </Details>
                <Button>Change</Button>
            </TopCar>
        </Hold>
    )
}

export default TopCard;

const Hold = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    font-family: poppins;
`
const TopCar = styled.div`
    width: 80%;
    height: 70px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
`
const Button = styled.div`
    width: 100px;
    height: 30px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #5448C8;
    color: white;
    font-size: 10px;
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
const Dist = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100% ;
    padding: 5px 40px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-around;
    width: 40%;
    font-size: 10px;
`
const Duration = styled.div`
    display: flex;
    font-weight: 500;
`
const Passengers = styled.div`
    display: flex;
    font-weight: 500;
`
const Image = styled.img`
    width: 100%;
    height: 20px;
    object-fit: cover;
    margin-top: 10px;
`
const Destination = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
`
const Ports = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 10px;
`
const Icons = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 2px;
    background-color: #dbcff3;
`