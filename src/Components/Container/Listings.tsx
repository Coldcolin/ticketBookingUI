import React from "react"
import styled from "styled-components"
import ListingCards from "./ListingCards"
import TopCard from "./TopCard"

const Listings = () =>{
    return(
        <Container>
            <Wrapper>
                <Holder>
                    <TopCard/>
                    <Title> Trip Listings</Title>
                </Holder>
                <Div>
                <ListingCards/>
                </Div>
            </Wrapper>
        </Container>
    )
}

export default Listings;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Holder = styled.div`
    width: 50%;
    height: 150px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 750px;
    padding-top: 60px;
`
const Div = styled.div`
    margin-top: 200px;
    width: 75%;
    min-height: 80vh;
    overflow-y: scroll;

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ebe8e8;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c2c2c2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #818181;
}
`
const Title = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100px;
    background-color: #ebe8e8;
    font-weight: 500;
`