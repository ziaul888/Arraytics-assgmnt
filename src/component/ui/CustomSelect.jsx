import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
    position: relative;
    width: 200px;
`;

const SelectedOption = styled.div`
    padding: 8px 10px;
    background-color: white;
    border: 1px solid;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 8px;
        vertical-align: middle;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid ;
        transform: ${(props) => (props.isopen ? 'rotate(180deg)' : 'rotate(0)')};
        transition: transform 0.2s;
    }
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
    background-color: ${(props) => (props.isactive ? '#f0f0f0' : '#fff')};
    color: ${(props) => (props.isactive ? '' : 'var(--text-color)')};
    padding: 10px;
    cursor: pointer;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const CustomSelect = ({ onSelect,options,defaultOption }) => {
	const [selectedOption, setSelectedOption] = useState(defaultOption);
	const [isOpen, setIsOpen] = useState(false);
	
	const toggleOptions = () => {
		setIsOpen(!isOpen);
	};
	
	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		onSelect(option);
	};
	
	useEffect(() => {
		setSelectedOption(defaultOption);
	}, [defaultOption]);
	
	return (
		<SelectContainer>
			<SelectedOption isopen={isOpen} onClick={toggleOptions}>
				{selectedOption ? selectedOption.label : options[0]?.label}
			</SelectedOption>
			{isOpen && (
				<OptionsContainer>
					{options.map((option) => (
						<Option
							isactive={selectedOption?.label === option?.label}
							key={option.value}
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</Option>
					))}
				</OptionsContainer>
			)}
		</SelectContainer>
	);
};

export default CustomSelect;
