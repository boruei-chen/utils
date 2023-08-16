/**
 * @description 民國日期轉西元日期
 * @param date 日期
 */
const convertToADDate = (date: string): string => {
  const ADDate = +date.replace(/[^0-9]/ig, '') + 19110000;
  const pattern = /(\d{4})(\d{2})(\d{2})/;
  const formatedDate = String(ADDate).replace(pattern, '$1/$2/$3');
  return formatedDate;
};

export default convertToADDate;
