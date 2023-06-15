import getEnAlphabetList from './getEnAlphabetList';

describe('getEnAlphabetList', () => {
  it('expected length', () => {
    const expectedLength = 26;
    expect(getEnAlphabetList()).toHaveLength(expectedLength);
  });

  it('expected EN alphabet content', () => {
    const expectedContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    expect(getEnAlphabetList().join('')).toEqual(expectedContent);
  });
});
