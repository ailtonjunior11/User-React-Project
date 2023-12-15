import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 74px;
    margin-top: 130px;

    background: ${props => props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
    border-radius: 14px;
    border: ${props => props.isBack ? "1px solid #ffffff" : "none"};

    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    line-height: 28px;

    color: #FFFFFF;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.6;
    }

    img{
        transform: ${props => props.isBack && "rotateY(180deg)"};
    }
`;