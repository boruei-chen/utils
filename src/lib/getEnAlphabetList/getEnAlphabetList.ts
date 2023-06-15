/**
 * @description 取得英文字母列表
 */
const getEnAlphabetList = (): string[] => {
  return [...Array(26).keys()].map((index) => String.fromCharCode(index + 65));
};

export default getEnAlphabetList;
