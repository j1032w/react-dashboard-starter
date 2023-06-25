import { render } from '@testing-library/react';

import CommonComponent from './common-component';

describe('CommonComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonComponent />);
    expect(baseElement).toBeTruthy();
  });
});
