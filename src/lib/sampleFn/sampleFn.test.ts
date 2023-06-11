import sampleFn from './sampleFn';

describe('sampleFn', () => {
  it('returns expected data', () => {
    const mockData = true;
    expect(sampleFn(mockData)).toBe(mockData);
  });
});
