'use client'
import React from 'react';
import styled from 'styled-components';
import TabSection from "@/component/home/TabSection";
import {CardWrapper, PricingSection} from "@/styles/CustomStyle";
import Card from "@/component/ui/Card";

const Home = () => {
	return (
		<PricingSection>
			<TabSection/>
			<CardWrapper>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</CardWrapper>
		</PricingSection>
	);
};

export default Home;

