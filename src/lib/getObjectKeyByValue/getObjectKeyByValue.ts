/**
 * @description 透過 Value 取得對應的 Object Key
 * @param object Object data
 * @param value Value data
 */
const getObjectKeyByValue = <O extends {}, V>(object: O, value: V) => {
  return Object.keys(object).find((key) => object[key as keyof O] === value);
};

export default getObjectKeyByValue;
