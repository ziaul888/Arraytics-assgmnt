import React from 'react';
import styled from "styled-components";

const PlanButton = ({text, href}) => {
	return (
		<ButtonWrapper href={href}>
			{text}
		</ButtonWrapper>
	);
};

export default PlanButton;
export const ButtonWrapper = styled.a`
    background-color: var(--parent-bg);
    border-radius: 8px;
	color: #ffffff;
    box-sizing: border-box;
    display: block;
    font-weight: 400;
    line-height: 40px;
    margin-top: auto;
    text-align: center;
    text-decoration: none;
    transition: background-color .3s;
`