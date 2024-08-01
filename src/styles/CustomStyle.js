import styled from 'styled-components';
export const PricingSection = styled.div`
   max-width:1110px;
	margin: 0 auto;
	padding-inline: 1rem;
	padding-top: 3rem;
`;
export const TabWrapper = styled.div`
 align-items: center;
 justify-content: center;
 display: flex;
`;
export const CardWrapper = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const CardMain =styled.div`
    background: #fff;
    border: 1px solid #eaeff2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 24px 20px;
    position: relative;
    transition: all .25s;
    --parent-bg: #4cb3fd;
	--parent-secondary-bg: #e5f2ff;
    border-top: 8px solid var(--parent-bg);
    color: var(--parent-bg);
    &:nth-of-type(4n+2) {
        --parent-bg: #ffb72c;
        --parent-secondary-bg: #fff0d9;
    }
    &:nth-of-type(4n+3) {
        --parent-bg: #68cb9b;
        --parent-secondary-bg: #d8fdf0;
    }
    &:nth-of-type(4n+4) {
        --parent-bg: #b78deb;
	    --parent-secondary-bg: #000;
    }
`
export const PlanWrapper=styled.div`
   padding-bottom: 1rem;
`
export const PlanName=styled.span`
 font-size: 1.1rem;
	color: #000
`
export const PlanPrice=styled.div`
    align-items: baseline;
    -moz-column-gap: 10px;
    column-gap: 10px;
    display: inline-flex;
    margin-bottom: 4px;
    padding: 10px 0;
    position: relative;
    width: 100%;
`
export const PlanSpan=styled.span`
	font-size: 2rem;
	font-weight: 600;
`
export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
	
`;

export const TooltipText = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: #fff;
  color: var(--text-color);
  text-align: left;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the text */
  left: 50%;
  margin-left: -60px; /* Use half of the width to center the tooltip */
  opacity: 0;
	font-size: 14px;
  transition: opacity 0.3s;
    box-shadow: 0 0 18px 0 rgba(73, 104, 126, .2);
	
  &::after {
    content: '';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }

    img {
	    width:100%
    }
`;