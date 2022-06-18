import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import  Icon from "../Images/BoatIcon.png"
import axios from "axios"


const ListingCards = () =>{
    interface ticketData {
        id?: any | null,
        boatType: string,
        scheduledDate: any,
        price: number,
        currency: string,
        tripId: number,
    }
    const [data, setData] = useState<ticketData[]>([])
    const getAll=async()=>{
        try{
            const res = await axios.get<Array<ticketData>>("https://afrifex-backend.vercel.app/api/flights") 
            setData(res.data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAll()
    }, [])

    return(
        <Container>
                    {
                        data?.map((props: ticketData)=>(
                            <Card key={props.id}>
                        <Div>
                            <div>{props.tripId}</div>
                            <img src={Icon} alt=""/> 
                        </Div>
                        <Line></Line>
                        <DivT>
                            <Track>
                            <Type>{props.boatType} (4)</Type>
                            <Date>
                                <Day>Sat, 12 May</Day>
                                <Time>9:00 AM</Time>
                            </Date></Track>
                        </DivT>
                        <Line></Line>
                        <Divs>{props.currency} {props.price}.00
                            <Button>Book Ride</Button>
                        </Divs>
                    </Card>
                        ))
                    }
        </Container>
    )
}

export default ListingCards;

const Container = styled.div`
    width: 100%;
    font-family: poppins;
    margin-top: 70px;
`

const Card = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0;
    display: flex;
    transition: all 350ms;
    :hover{
        cursor: pointer;
        transition: all 350ms;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);
    }
`

const Div = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;


    img{
        width: 60px;
        height: 40px;
        margin-left: 20px;
        object-fit: contain;
    }
    div{
        font-size: 17px;
        font-weight: 500;
        font-family: poppins;
    }
`
const DivT = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Divs = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`
const Line = styled.div`
width: 2px;
background-color: #ebe8e8;;
height: 100%;
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
const Type = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`
const Date = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: #EFEDFA;
    font-size: 10px;
    border-radius: 3px;
    justify-content: space-between;
    align-items: center;
`
const Day = styled.div`
    margin-left: 5px;
`
const Time = styled.div`
    margin-right: 5px;
`
const Track = styled.div`
    width: 80%;
`