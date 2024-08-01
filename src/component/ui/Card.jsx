import React from 'react';
import styled from "styled-components";
import {CardMain, PlanName, PlanPrice, PlanSpan, PlanWrapper} from "@/styles/CustomStyle";
import InfoIcon from "@/component/icon/InfoIcon";
import PlanButton from "@/component/ui/Button";
import Tooltip from "@/component/ui/CustomTooltips";
import CustomSelect from "@/component/ui/CustomSelect";
import {useSelector} from "react-redux";
import {getPlanPrice} from "@/utils/helper";

const Card = ({plan, activeTab}) => {
	const {selectedOption} = useSelector((state) => state.planData)
	const options = plan?.same_plans?.map((item) => {
		return {label: item.title.replace(/<\/?strong>/g, ""), value: item.title}
	})
	const price = getPlanPrice(activeTab, selectedOption, plan)
	
	return (
		<CardMain>
			<PlanWrapper>
				<PlanName>
					{plan.name}
				</PlanName>
				<PlanPrice>
					<PlanSpan>
						{price}
					</PlanSpan>
					{plan.price !== "Free"
						&& <PlanType>
							<span className='plan_type'>/month</span>
							{activeTab === "yearly" &&
								<DiscountSpan>{plan?.details?.['1_year']?.price}/month</DiscountSpan>}
						</PlanType>
					}
				</PlanPrice>
				{plan?.same_plans?.length > 1 ?
					(<div className="select_wrapper">
						<CustomSelect options={options}/>
						<Tooltip text={plan?.text}>
							<InfoIconWrapper>
								<InfoIcon/>
							</InfoIconWrapper>
						</Tooltip>
					</div>) :
					<PlanVisitor>
						<div dangerouslySetInnerHTML={{__html: plan.title}}/>
						<div className="select_wrapper">
							<Tooltip text={plan?.text}>
								<InfoIconWrapper>
									<InfoIcon/>
								</InfoIconWrapper>
							</Tooltip>
						</div>
					</PlanVisitor>
				}
				<PlanFeature>
					<FeatureTitle>
						{price === "Free" ? "Free includes:" : "Everything in free plus:"}
					</FeatureTitle>
					<FeatureList>
						{plan?.features?.map((item, index) => {
							return <Tooltip text={item?.description} key={index}>
								<Feature>
									{item?.title}
								</Feature>
							</Tooltip>
						})}
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
export const PlanFeature = styled.div`
    margin-top: 1.1rem;
`
export const FeatureTitle = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 0;
    margin: 0px;
`
export const FeatureList = styled.ul`
    list-style-type: none;
    margin-bottom: 12px;
    padding: 0px;
    font-size: 14px;
    margin: 0px;
    display: grid;
`
export const Feature = styled.li`
    line-height: 1;
    margin: 0;
    padding: 10px 0;
    //color:#49687e;
`

export const PlanType = styled.div`
    display: flex;
`
export const DiscountSpan = styled.span`
    color: #ff424d;
    font-size: 12px;
    line-height: 1;
    position: absolute;
    text-decoration: line-through;
    top: 4px;
`
