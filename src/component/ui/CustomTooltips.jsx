import React from 'react';
import {TooltipText, TooltipWrapper} from "@/styles/CustomStyle";

const Tooltip = ({ text, children }) => {
	return (
		<TooltipWrapper>
			{children}
			<TooltipText dangerouslySetInnerHTML={{__html: text}}/>
		</TooltipWrapper>
	);
};

export default Tooltip;
