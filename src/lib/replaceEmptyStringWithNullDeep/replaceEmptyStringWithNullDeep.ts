/**
 * @description 將資料內容為空字串的值轉為 null
 * @param data 資料內容
 */
const replaceEmptyStringWithNullDeep = <T>(data: T): T => {
  return typeof data === 'object' && !Array.isArray(data) && data !== null
    ? Object.keys(data).reduce((acc, key) => {
      const k = key as keyof T;
      acc[k] = (typeof data[k] === 'object' && !Array.isArray(data[k]) && data[k] !== null) || Array.isArray(data[k])
        ? replaceEmptyStringWithNullDeep(data[k])
        : data[k] !== ''
          ? data[k]
          : null;
      return acc;
    }, {} as { [k in keyof T]: any; })
    : Array.isArray(data)
      ? data.reduce((acc, o) => {
        acc.push(replaceEmptyStringWithNullDeep(o));
        return acc;
      }, [])
      : data !== ''
        ? data
        : null;
};

export default replaceEmptyStringWithNullDeep;
