import React from 'react';
import {TooltipText, TooltipWrapper} from "@/styles/CustomStyle";

const Tooltip = ({ text,arrowAlign, children }) => {
	return (
		<TooltipWrapper>
			{children}
			<TooltipText arrowAlign={arrowAlign} dangerouslySetInnerHTML={{__html: text}}/>
		</TooltipWrapper>
	);
};

export default Tooltip;
