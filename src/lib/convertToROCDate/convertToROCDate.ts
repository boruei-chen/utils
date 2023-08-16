import moment from 'moment';

/**
 * @description 西元日期轉民國日期
 * @param date 日期
 */
const convertToROCDate = (date: string): string => {
  const ROCDate = +moment(date).format('YYYYMMDD') - 19110000;
  const pattern = /(\d{3}|\d{2}|\d{1})(\d{2})(\d{2})/;
  const formatedDate = String(ROCDate).replace(pattern, '$1/$2/$3');
  return formatedDate;
};

export default convertToROCDate;
