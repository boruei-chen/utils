import getObjectKeyByValue from './getObjectKeyByValue';

describe('getObjectKeyByValue', () => {
  it('returns expected key', () => {
    const mockObject = {
      keyA: 'a',
      keyB: 'b',
      keyC: 'c'
    };
    const mockValue = 'b';
    const expectedKey = 'keyB';
    expect(getObjectKeyByValue(mockObject, mockValue)).toEqual(expectedKey);
  });
});
