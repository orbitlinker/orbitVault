import styled from "styled-components";

export const HeadingWrapper = styled.h1`
    font-size: 21px;
    font-family: "Roboto Slab", serif;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #18283b;
    gap: 10px;
    margin: 20px 0;
    &::after {
        content: "";
        display: inline-block;
        width: 4px;
        height: 20px;
        border-radius: 10px;
        background: #47a79d;
    }
`