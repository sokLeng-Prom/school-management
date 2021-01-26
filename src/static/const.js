const BASE_URL = "http://localhost:3001";
const UUID_API_URL = "https://www.uuidgenerator.net/api/version1";
const isNumber = (string) => {
  const reg = /^[0-9]+$/;
  if (string.length === 0) return true;
  return reg.test(string) && parseInt(string) !== NaN;
};
const isEmail = (string) => {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (string.length === 0) return true;

  return reg.test(string);
};
const stringToBoolean = (string) => {
  if (string === "true") return true;
  else if (string === "false") return false;
  else if (string === "null") return null;
};
const isLoggedIn = () => {
  if (localStorage.getItem("id")) return true;
  return false;
};
export {
  BASE_URL,
  isNumber,
  isEmail,
  UUID_API_URL,
  stringToBoolean,
  isLoggedIn,
};
