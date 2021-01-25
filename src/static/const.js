const BASE_URL = "http://localhost:3001";
const isNumber = (string) => {
  const reg = /^[0-9]+$/;
  if (string.length === 0) return true;
  return reg.test(string) && parseInt(string) < 100 && parseInt(string) !== NaN;
};
const isEmail = (string) => {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (string.length === 0) return true;

  return reg.test(string);
};
export { BASE_URL, isNumber, isEmail };
