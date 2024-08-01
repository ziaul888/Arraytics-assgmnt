import React from 'react';
import {TooltipText, TooltipWrapper} from "@/styles/CustomStyle";

const Tooltip = ({ text, children }) => {
	return (
		<TooltipWrapper>
			{children}
			<TooltipText>
				{text}
			</TooltipText>
		</TooltipWrapper>
	);
};

export default Tooltip;
