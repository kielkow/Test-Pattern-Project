import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent  } from '@testing-library/react';

import { addTech } from '~/store/modules/techs/actions';
import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['NodeJS', 'ReactJS', 'React Native']
    }));

    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('NodeJS'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    expect(getByTestId('tech-list')).toContainElement(getByText('React Native'));
  });

  it('should be able to add new tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'NodeJS' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toHaveBeenCalledWith(addTech('NodeJS'));
  }); 
});