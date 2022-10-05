import { screen } from '@testing-library/react';
import { Header } from './Header';
import { customRender } from '../../utils/test-utils'
import { FormContextType } from '../../contexts/FormContext';

describe('Header', () => {
  it('should render header', () => {
    customRender(<Header title="Header Title" description="Header Description"></Header>, {} as FormContextType)
    expect(screen.queryByTestId('headerid')).toBeInTheDocument()
    expect(screen.queryByText('Header Title')).toBeInTheDocument()
    expect(screen.queryByText('Header Description')).toBeInTheDocument()
  })
});
