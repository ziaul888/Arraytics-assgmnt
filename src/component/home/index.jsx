'use client';
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import TabSection from '@/component/home/TabSection';
import { CardWrapper, PricingSection } from '@/styles/CustomStyle';
import Card from '@/component/ui/Card';
import { setPlanData } from '@/redux/slice/planDataSlice';
import { getCombinedData } from '@/utils/helper';

const Home = () => {
	const [activeTab, setActiveTab] = useState('monthly');
	const dispatch = useDispatch();
	const { planData } = useSelector((state) => state.planData);
	
	const fetchPlans = useCallback(async () => {
		try {
			const res = await fetch('/api/plans');
			if (!res.ok) {
				throw new Error('Failed to fetch plans');
			}
			const data = await res.json();
			const combinedPlanData = getCombinedData(data);
			dispatch(setPlanData(combinedPlanData));
		} catch (error) {
			console.error('Error fetching plans:', error);
		}
	}, [dispatch]);
	
	useEffect(() => {
		fetchPlans();
	}, [fetchPlans]);
	
	return (
		<PricingSection>
			<TabSection
				setActiveTab={setActiveTab}
				activeTab={activeTab}
				plansInfo={planData?.plansInfo}
			/>
			<CardWrapper>
				{planData?.plans?.map((plan, index) => (
					<Card activeTab={activeTab} key={index} plan={plan} />
				))}
			</CardWrapper>
		</PricingSection>
	);
};

export default Home;
