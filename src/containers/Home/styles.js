import styled from "styled-components";

import Background from "../../assets/background.svg"

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const InputLabel = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.408px;

    margin-left: 25px;

    color: #eeeeee;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px #00000040;
    
    border: none;
    outline: none;
    padding-left: 25px;
    margin-bottom: 34px;

    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    line-height: 28px;

    color: #ffffff;
`;