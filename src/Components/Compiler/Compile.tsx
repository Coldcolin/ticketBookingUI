import React from "react"
import Listings from "../Container/Listings"
import Sidebar from "../Container/Sidebar"
import styled from "styled-components"

const Compile =()=>{
    return(
        <Container>
            <SideHold>
                <Sidebar/>
            </SideHold>
            <ListHold>
                <Listings/>
            </ListHold>
        </Container>
    )
}

export default Compile;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: #ebe8e8;
    position: absolute;
`
const SideHold = styled.div`
    display: flex;
    width: 40%;
`
const ListHold = styled.div`
    display: flex;
    width: 60%;
`