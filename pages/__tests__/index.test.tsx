import { render } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import Home from '..';

describe('Testing Main Component', () => {
  it('Should be render correctly', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).not.toBeNull();
  });
});
