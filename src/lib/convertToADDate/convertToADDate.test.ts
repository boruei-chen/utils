import convertToADDate from './convertToADDate';

describe('convertToADDate', () => {
  it('returns expected date', () => {
    const mockDate = '112/05/22';
    const expectedDate = '2023/05/22';
    expect(convertToADDate(mockDate)).toEqual(expectedDate);
  });
});
