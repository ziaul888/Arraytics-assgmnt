import React from 'react';
import styled from "styled-components";

const PlanButton = ({text,href}) => {
	return (
		<ButtonWrapper href={href}>
			{text}
		</ButtonWrapper>
	);
};

export default PlanButton;
export const ButtonWrapper=styled.a`
    background: #4cb3fd;
    border-radius: 8px;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-weight: 400;
    line-height: 40px;
    margin-top: auto;
    text-align: center;
    text-decoration: none;
    transition: background-color .3s;
`