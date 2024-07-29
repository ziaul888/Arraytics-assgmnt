import React from 'react';
import styled from "styled-components";
import {CardMain, PlanName, PlanPrice, PlanSpan, PlanWrapper} from "@/styles/CustomStyle";
import InfoIcon from "@/component/icon/InfoIcon";
import PlanButton from "@/component/ui/Button";
import Tooltip from "@/component/ui/CustomTooltips";

const Card = () => {
	return (
		<CardMain>
			<PlanWrapper>
			  <PlanName>
				  Free
			  </PlanName>
				<PlanPrice>
				<PlanSpan>
					Free
				</PlanSpan>
					<PlanType>
					   <span className='plan_type'>Free</span>
					</PlanType>
				</PlanPrice>
				<PlanVisitor>
				<span>  Up to {' '}
				 <strong>
					 500
				 </strong>
					{' '}  visitors/month
				</span>
					<Tooltip text="tooltips">
					<InfoIconWrapper>
					    <InfoIcon/>
					</InfoIconWrapper>
					</Tooltip>
				</PlanVisitor>
				<PlanFeature>
				  <FeatureTitle>
					  Free includes:
				  </FeatureTitle>
					<FeatureList>
						<Tooltip text="tooltips">
							<Feature>
								Unlimited widgets
							</Feature>
						</Tooltip>
					</FeatureList>
				</PlanFeature>
			</PlanWrapper>
			<PlanButton text="Select Plan" href="https://go.chaty.app/register"/>
		</CardMain>
	);
};

export default Card;
export const PlanVisitor = styled.div`
    background: #e5f2ff;
    border-radius: 32px;
    
    font-size: 13px;
    padding: 5px 15px;
    align-items: center;
    display: inline-flex;
    column-gap: 5px;
    white-space: nowrap;
`
export const InfoIconWrapper = styled.div`
    font-size: 13px;
`
export const PlanFeature=styled.div`
margin-top: 1.1rem;
`
export const FeatureTitle=styled.h2`
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 0;
	margin: 0px;
`
export const FeatureList=styled.ul`
    list-style-type: none;
    margin-bottom: 12px;
	padding:0px;
	font-size: 14px;
	margin: 0px;
`
export const Feature=styled.li`
        line-height: 1.4;
        margin: 0;
        padding: 10px 0;
	    //color:#49687e;
`

export const PlanType=styled.div`
 display: flex;
`