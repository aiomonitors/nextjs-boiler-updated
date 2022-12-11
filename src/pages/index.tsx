import React, {useState} from 'react';
import styled from 'styled-components';

const IndexPage = () => {
	const [counter, setCount] = useState(0);

	return (
		<IndexPageWrapper>
			<span>Hello World!</span>
			<span>Current Count is: {counter}</span>
			<CounterButton 
				onClick={() => {
					setCount(counter + 1); 
				}}
				disabled>
          Increment
			</CounterButton>
		</IndexPageWrapper>
	);
};

const IndexPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const CounterButton = styled.button`
  padding: 10px 15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
  }
`;

export default IndexPage;
