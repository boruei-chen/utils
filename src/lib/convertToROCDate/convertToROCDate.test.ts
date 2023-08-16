import convertToROCDate from './convertToROCDate';

describe('convertToROCDate', () => {
  it('returns expected date', () => {
    const mockDate = '2023/05/22';
    const expectedDate = '112/05/22';
    expect(convertToROCDate(mockDate)).toEqual(expectedDate);
  });
});
