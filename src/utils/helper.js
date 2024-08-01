export const getCombinedData = (data) => {
	let combinedData = data
	data?.features.forEach(feature => {
		data?.plans.forEach(plan => {
			if (feature.is_pro === "0" && plan.price === "Free") {
				if (!plan.features) {
					plan.features = [];
				}
				plan.features.push({
					title: feature.feature_title,
					description: feature.feature_desc
				});
			} else if (feature.is_pro === "1" && plan.price !== "Free") {
				if (!plan.features) {
					plan.features = [
						{
							title: plan.title.replace(/<\/?strong>/g, ""),
							description: plan?.text
						}
					];
				}
				plan.features.push({
					title: feature.feature_title,
					description: feature.feature_desc
				});
			}
		});
	});
	const mergedData = getCombinedPlans(combinedData)
	const newCombinedData = {
		...combinedData,
		plans: mergedData
	}
	return newCombinedData
}

const getCombinedPlans = (planData) => {
	const mergedPlans = [];
	planData?.plans.forEach((item) => {
		const existingPlan = mergedPlans.find(p => p.name === item.name);
		if (existingPlan) {
			if (!existingPlan.same_plans) {
				existingPlan.same_plans = [];
			}
			existingPlan.same_plans.push(item);
		} else {
			mergedPlans.push({
				...item,
				same_plans: [item]
			});
		}
	});
	return mergedPlans;
}

export const getPlanPrice = (activeTab, selectedOption, plans) => {
	if (plans?.same_plans.length > 1) {
		const matchedPlan = plans?.same_plans?.find(plan => plan.title === selectedOption?.value);
		console.log({matchedPlan})
		if (matchedPlan) {
			return activeTab === 'monthly' ? matchedPlan?.details?.['1_year']?.price : matchedPlan?.details?.['2_year']?.price;
		}
	} else {
		return activeTab === 'monthly' ? plans?.details?.['1_year']?.price : plans?.details?.['2_year']?.price;
	}
};

