import { render, screen, waitFor } from '@testing-library/react';
import { FilterableSliceTableInternal } from 'pages/Home/FilterableSliceTable/FilterableSliceTable';

describe('FilterableSliceTable tests suite', () => {
  it('Should render without crashing', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { low: 0, high: 1000, rate: 0 },
            { low: 10065, high: 27794, rate: 14 },
            { low: 27795, high: 74517, rate: 30 },
          ]),
      }),
    );
    render(<FilterableSliceTableInternal fetchInjected={fetchMock} />);
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(4);
    });
    expect(screen.getAllByLabelText('tranche')[0]).toHaveTextContent(
      'de 0€ à 1000',
    );
    expect(screen.getAllByLabelText('taux imposition')[0]).toHaveTextContent(
      '0%',
    );
  });
});
