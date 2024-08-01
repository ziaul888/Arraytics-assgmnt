'use client'
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TabSection from "@/component/home/TabSection";
import {CardWrapper, PricingSection} from "@/styles/CustomStyle";
import Card from "@/component/ui/Card";
import {useDispatch, useSelector} from "react-redux";
import {setPlanData} from "@/redux/slice/planDataSlice";
import {getCombinedData, getCombinedPlans} from "@/utils/helper";


const Home = () => {
	const [activeTab, setActiveTab] = React.useState("monthly");
	const dispatch = useDispatch();
	const {planData}=useSelector((state)=>state.planData)
	const [plans, setPlans] = useState([]);
	
	useEffect(() => {
		const fetchPlans = async () => {
			try {
				const res = await fetch('/api/plans');
				if (!res.ok) {
					throw new Error('Failed to fetch plans');
				}
				const data = await res.json();
				const tempPlanData=getCombinedData(data)
				console.log({tempPlanData})
				dispatch(setPlanData(tempPlanData));
			} catch (error) {
				console.error('Error fetching plans:', error);
			}
		};
		
		fetchPlans();
	}, []);
	
	return (
		<PricingSection>
			<TabSection setActiveTab={setActiveTab}
			            activeTab={activeTab}
			            plansInfo={planData?.plansInfo}/>
			<CardWrapper>
				{planData?.plans && planData?.plans?.slice(0,4)?.map((plan,index)=>{
					return (
						<Card activeTab={activeTab} key={index} plan={plan}/>
					)
				}) }
			</CardWrapper>
		</PricingSection>
	);
};

export default Home;

