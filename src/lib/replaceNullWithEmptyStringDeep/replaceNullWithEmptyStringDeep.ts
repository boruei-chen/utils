/**
 * @description 將資料內容中為 null 的值轉為空字串
 * @param data 資料內容
 */
const replaceNullWithEmptyStringDeep = <T>(data: T): T => {
  return typeof data === 'object' && !Array.isArray(data) && data !== null
    ? Object.keys(data).reduce((acc, key) => {
      const k = key as keyof T;
      acc[k] = (typeof data[k] === 'object' && !Array.isArray(data[k]) && data[k] !== null) || Array.isArray(data[k])
        ? replaceNullWithEmptyStringDeep(data[k])
        : data[k] !== null
          ? data[k]
          : '';
      return acc;
    }, {} as { [k in keyof T]: any; })
    : Array.isArray(data)
      ? data.reduce((acc, o) => {
        acc.push(replaceNullWithEmptyStringDeep(o));
        return acc;
      }, [])
      : data !== null
        ? data
        : '';
};

export default replaceNullWithEmptyStringDeep;
