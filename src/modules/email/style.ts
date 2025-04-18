import styled from "styled-components";

export const EmailContainer = styled.section`
    margin: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: center;
        justify-content: center;
        margin: 2rem 0;
        opacity: 0.7;
    }
`

export const EmailWrapper = styled.section`
    margin: 0rem auto;
    width: 80%;
    padding: 1rem 4rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(131, 146, 165, 0.23);
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    input,textarea{
        width: 100%;
        padding: 20px 15px;
        border-radius: 6px;
        outline: none;
        border: none;
        color:rgba(44, 62, 80, 0.69);
        font-size: 14px;
        background: #ecedeeb3;
    }
`
export const ButtonWrapper = styled.div`
    margin: 20px auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: none;
        font-size: 14px;
        padding:16px 0;
        cursor: pointer;
        text-transform: capitalize;
        background: #04AA6D;
        color: #fff;
        border-radius: 10px;
        width: 120px;
        transition: 250ms;
    }
    button:hover{
        background: transparent;
        color: #04AA6D;
        border: 1px solid rgb(5, 180, 116) ;
    }
`