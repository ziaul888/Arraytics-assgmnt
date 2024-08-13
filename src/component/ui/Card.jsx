import React from 'react';
import styled from "styled-components";
import {CardMain, PlanName, PlanPrice, PlanSpan, PlanWrapper} from "styles/CustomStyle";
import CustomSelect from "component/ui/CustomSelect";
import Tooltip from "component/ui/CustomTooltips";
import InfoIcon from "component/icon/InfoIcon";
import PlanButton from "component/ui/Button";
import {getOption, getPlanPrice} from "../../utils/helper";


const Card = ({plan, activeTab}) => {
	const options = getOption(plan)
	const [selectedValue, setSelectedValue] = React.useState(options[0]);
	const price = getPlanPrice(activeTab, selectedValue, plan)
	const handleSelect = (value) => {
		setSelectedValue(value)
	};
	
	return (
		<CardMain>
			{plan?.name === "Pro" &&
				<Tag>
					Most popular
				</Tag>
			}
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
						<CustomSelect options={options} defaultOption={selectedValue} onSelect={handleSelect} />
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
							return <Tooltip arrowAlign="left" text={item?.description} key={index}>
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
    background: var(--parent-secondary-bg);
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
export const Tag = styled.div`
    background-color: var(--parent-bg);
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    padding: 6px 8px;
    position: absolute;
    right: 6px;
    top: 6px;
`
