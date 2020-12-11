import { render } from '@testing-library/react';
import { SliceTableHeader } from 'pages/Home/FilterableSliceTable/SliceTableHeader/SliceTableHeader';
import { SliceTableRow } from 'pages/Home/FilterableSliceTable/SliceTableRow/SliceTableRow';

describe('SliceTableRow tests suite', () => {
  it('SliceTableRow should render without crashing', () => {
    const { asFragment } = render(
      <SliceTableRow lowBorn="200" highBorn="50000" rate="2" />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
