import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 40em;
    padding: 1em 0em 2em 0em;

    border-bottom: 1px solid #BEB9D8;

    .align-line{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        width: 20em;
    }

    .logo-company{
        width: 4em;
    }

    .content-company{
        width: 15em;
    }

    .title-company{
        font-family: Mukta-bold;
        font-size: 1.5em;
        color: #6E57E0;
    }

    .link{
        font-family: Mukta-medium;
        font-size: 1em;
        color: #363636;
    }

    .circle{
        width: .9em;
        height: .9em;
        border-radius: 50%;
        background-color: #6E57E0;

        margin-right: 2em;
    }
`

export { Container }