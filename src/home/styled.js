import styled from 'styled-components'

const Container = styled.div`

    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        height: 25em;
        padding: 0em 3em;

        background-image: linear-gradient(#FFFF, #D7D5F9);
    }

    .title{
        font-family: Mukta-bold;
        font-size: 2.4em;
        color: #282828;
    }

    hr {
        margin: .8em 0em;
        border: 1px solid black;
        width: 18em;
    }

    .text{
        font-family: Mukta-regular;
        font-size: 1.2em;
        color: #494949;

        width: 29em;
        line-height: 2em;
    }

    .logo-frei{
        margin-left: 10em;
        width: 13em;
    }

    .body{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 2em;
    }

    .class{
        margin-top: 2em;
    }

    .hr-class{
        margin: .8em 0em;
        border: 1px solid #6E57E0;
        width: 100%;
    }

    .scroll{
        padding: 0em 2em;
        height: 22em;
        overflow-x: auto;
    }

    .title-class{
        font-family: Mukta-bold;
        font-size: 2em;
    }

    .content-line{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 40em;
        padding: 1em 0em 2em 0em;

        border-bottom: 1px solid #BEB9D8;
    }

    .align-line{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        width: 20em;
    }

    .logo-company{
        width: 4em;
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

    .align-button{
        display: flex;
        justify-content: end;

        width: 90%;
    }

    button{
        position: fixed;
        bottom: 2em;

        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button > img {
        width: 3em;
    }

    [data-anime] {
        opacity: 0;
        transition: .3s;
    }

    [data-anime].animate {
        opacity: 1;
    }

    .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 8em;
        background-color: #402F85;
    }

    .text-footer{
        font-family: Mukta-medium;
        color: white;
    }
`
export { Container }