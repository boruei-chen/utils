import replaceNullWithEmptyStringDeep from './replaceNullWithEmptyStringDeep';

describe('replaceNullWithEmptyStringDeep', () => {
  it('(null) returns expected data', () => {
    const mockData = null;
    const expectedData = '';
    expect(replaceNullWithEmptyStringDeep(mockData)).toBe(expectedData);
  });

  it('(array) returns expected data', () => {
    const mockData = [null, null, null];
    const expectedData = ['', '', ''];
    expect(replaceNullWithEmptyStringDeep(mockData)).toEqual(expectedData);
  });

  it('(nested array) returns expected data', () => {
    const mockData = [
      null,
      [null, null, null],
      null
    ];
    const expectedData = [
      '',
      ['', '', ''],
      ''
    ];
    expect(replaceNullWithEmptyStringDeep(mockData)).toEqual(expectedData);
  });

  it('(object) returns expected data', () => {
    const mockData = {
      keyA: null,
      keyB: null,
      keyC: null
    };
    const expectedData = {
      keyA: '',
      keyB: '',
      keyC: ''
    };
    expect(replaceNullWithEmptyStringDeep(mockData)).toEqual(expectedData);
  });

  it('(nested object) returns expected data', () => {
    const mockData = {
      keyA: null,
      keyB: {
        keyB1: null,
        keyB2: null,
        keyB3: null
      },
      keyC: null
    };
    const expectedData = {
      keyA: '',
      keyB: {
        keyB1: '',
        keyB2: '',
        keyB3: ''
      },
      keyC: ''
    };
    expect(replaceNullWithEmptyStringDeep(mockData)).toEqual(expectedData);
  });

  it('(array of object) returns expected data', () => {
    const mockData = {
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
    const expectedData = {
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
    expect(replaceNullWithEmptyStringDeep(mockData)).toEqual(expectedData);
  });
});
