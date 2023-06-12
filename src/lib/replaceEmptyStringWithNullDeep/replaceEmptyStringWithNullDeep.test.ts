import replaceEmptyStringWithNullDeep from './replaceEmptyStringWithNullDeep';

describe('replaceEmptyStringWithNullDeep', () => {
  it('(null) returns expected data', () => {
    const mockData = '';
    const expectedData = null;
    expect(replaceEmptyStringWithNullDeep(mockData)).toBe(expectedData);
  });

  it('(array) returns expected data', () => {
    const mockData = ['', '', ''];
    const expectedData = [null, null, null];
    expect(replaceEmptyStringWithNullDeep(mockData)).toEqual(expectedData);
  });

  it('(nested array) returns expected data', () => {
    const mockData = [
      '',
      ['', '', ''],
      ''
    ];
    const expectedData = [
      null,
      [null, null, null],
      null
    ];
    expect(replaceEmptyStringWithNullDeep(mockData)).toEqual(expectedData);
  });

  it('(object) returns expected data', () => {
    const mockData = {
      keyA: '',
      keyB: '',
      keyC: ''
    };
    const expectedData = {
      keyA: null,
      keyB: null,
      keyC: null
    };
    expect(replaceEmptyStringWithNullDeep(mockData)).toEqual(expectedData);
  });

  it('(nested object) returns expected data', () => {
    const mockData = {
      keyA: '',
      keyB: {
        keyB1: '',
        keyB2: '',
        keyB3: ''
      },
      keyC: ''
    };
    const expectedData = {
      keyA: null,
      keyB: {
        keyB1: null,
        keyB2: null,
        keyB3: null
      },
      keyC: null
    };
    expect(replaceEmptyStringWithNullDeep(mockData)).toEqual(expectedData);
  });

  it('(array of object) returns expected data', () => {
    const mockData = {
      keyA: '',
      keyB: [
        {
          keyB1: '',
          keyB2: '',
          keyB3: ''
        },
        {
          keyB1: '',
          keyB2: '',
          keyB3: ''
        },
        {
          keyB1: '',
          keyB2: '',
          keyB3: ''
        }
      ],
      keyC: ''
    };
    const expectedData = {
      keyA: null,
      keyB: [
        {
          keyB1: null,
          keyB2: null,
          keyB3: null
        },
        {
          keyB1: null,
          keyB2: null,
          keyB3: null
        },
        {
          keyB1: null,
          keyB2: null,
          keyB3: null
        }
      ],
      keyC: null
    };
    expect(replaceEmptyStringWithNullDeep(mockData)).toEqual(expectedData);
  });
});
