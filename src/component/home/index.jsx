import React, { useEffect, useState } from 'react';
import mainPlansData from "../../libs/plansData.json";
import { useDispatch, useSelector } from 'react-redux';
import { getCombinedData } from "../../utils/helper";
import { setPlanData } from "../../redux/slice/planDataSlice";
import { CardWrapper, PricingSection } from "styles/CustomStyle";
import TabSection from "component/home/TabSection";
import Card from "component/ui/Card";

const Home = () => {
	const [activeTab, setActiveTab] = useState('monthly');
	const dispatch = useDispatch();
	const { planData } = useSelector((state) => state.planData);
	
	useEffect(() => {
		try {
			const combinedPlanData = getCombinedData(mainPlansData);
			dispatch(setPlanData(combinedPlanData));
		} catch (error) {
			console.error('Error processing plan data:', error);
		}
	}, [dispatch]);
	
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
