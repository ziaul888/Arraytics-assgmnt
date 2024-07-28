import React from 'react';
import {TabWrapper} from "@/styles/CustomStyle";
import styled from 'styled-components';

const TabSection = () => {
	const [activeTab, setActiveTab] = React.useState("monthly");
	return (
		<TabWrapper>
			<TabItem>
			   <Button isActive={activeTab === 'monthly'} onClick={() => setActiveTab('monthly')}>
				Billed monthly
			   </Button>
			</TabItem>
			<TabItem isLast>
				<Button isActive={activeTab === 'yearly'} onClick={() => setActiveTab('yearly')}>
					Billed yearly
				</Button>
			</TabItem>
			<DiscountTag>
				Save 20% 😍
			</DiscountTag>
		</TabWrapper>
	);
};

export default TabSection;

export const TabItem =styled.div`
    border-right:${(props)=>props.isLast===true?'none':'1px solid #c6d7e3'} ;
	margin-right:${(props)=>props.isLast===true?'0':'1rem'} ;
	padding-right: ${(props)=>props.isLast===true?'0':'1rem'};
 
`
export const Button=styled.button`
    padding: .4rem 0;
	display: inline-block;
	font-size: 1rem;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	 border-bottom: ${(props) => (props.isActive ? '2px solid #b78deb' : '2px solid transparent')};
      color: ${(props) => (props.isActive ? '#b78deb' : '#49687e')};
	font-weight: ${(props) => (props.isActive ? '600' : '400')};
`
export const DiscountTag=styled.div`
    align-items: center;
    background: rgba(183, 141, 235, .15);
    border-radius: 40px;
    cursor: pointer;
    display: inline-flex;
    margin-left: 10px;
    padding: 5px 12px;
`