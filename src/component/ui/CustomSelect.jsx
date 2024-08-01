
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setSelectedOption} from "@/redux/slice/planDataSlice";

const SelectContainer = styled.div`
  position: relative;
  width: 200px;
`;

const SelectedOption = styled.div`
  padding: 8px 10px;
  background-color: white;
  border: 1px solid ;
  border-radius: 4px;
  cursor: pointer;
	font-size: 12px;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

const Option = styled.div`
	background-color:${(props)=>props.isactive?'#f0f0f0':'#ffff'};
	color:${(props)=>props.isactive?'':'var(--text-color)'};
  padding: 10px;
  cursor: pointer;
	font-size: 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// CustomSelect component
const CustomSelect = ({ options }) => {
	const dispatch = useDispatch();
	const {selectedOption}=useSelector((state)=>state.planData)
	const [isOpen, setIsOpen] = useState(false);
	//const [selectedOption, setSelectedOption] = useState(null);
	
	const toggleOptions = () => {
		setIsOpen(!isOpen);
	};
	
	const handleOptionClick = (option) => {
		dispatch(setSelectedOption(option));
		setIsOpen(false);
	};
	
	useEffect(() => {
		dispatch(setSelectedOption(options[0]));
	}, []);
	
	return (
		<SelectContainer>
			<SelectedOption onClick={toggleOptions}>
				{selectedOption ? selectedOption.label : options[0]?.label }
			</SelectedOption>
			{isOpen && (
				<OptionsContainer>
					{options.map((option) => (
						<Option  isactive={selectedOption?.label===option?.label} key={option.value} onClick={() => handleOptionClick(option)}>
							{option.label}
						</Option>
					))}
				</OptionsContainer>
			)}
		</SelectContainer>
	);
};

export default CustomSelect;
