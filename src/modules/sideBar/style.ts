import styled from "styled-components";

export const SidebarComponent = styled.section`
    background: #18283b;
    max-width:256px;
    width: 40%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: 1px 10px 10px rgb(209 213 219);
    h1{
        color: rgb(209 213 219);
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 4px;
    }
`
export const SidebarWrapper = styled.section`
    p{
        font-size: 21px;
    }
`
export const SelectorTab = styled.div`
    padding: 20px 0px;
    margin: 10px 20px;
    /* background: #131313; */
    /* border-radius: 10px; */
    border-bottom: 1px solid #ffffff24;
    .headerContainer{
        display: flex;
        align-items: center;
        padding: 0 30px;
        gap: 1.5rem;
    }
`
export const ImgWrapper = styled.div`
    width: 40px;
    img{
        width: 100%;
    }
`
export const ListContainer = styled.div`
    margin: 20px 0;
    svg{
        font-size: 21px;
    }
    li{
        font-family: "Nunito", sans-serif;
        text-transform: capitalize;
        font-size: 16px;
    }
    .listHandler{
        transition: 250ms;
        display: flex;
        gap: 1.5rem;
        color:rgb(117, 131, 150);
        align-items: center;
        padding: 16px 20px;
        border-radius: 10px;
        margin-left: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .listHandler:hover{
        background: #2c3e50;
    }
    .listHandlerActive{
        background:rgb(236 237 238);
    }
`