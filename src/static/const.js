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
  if (localStorage.getItem("id") || sessionStorage.getItem("id")) return true;
  return false;
};

const removeSpace = (string) => {
  return string.split(" ").join("");
};

const ArrayIsEmpty = (array) => {
  if (array.length > 0) return false;
  else return true;
};

// const courses = [
//   {
//     courseCode: "ACC 101",
//     courseName: "Principles of Accounting",
//     faculty: "	Faculty of Economics and Administrative Sciences",
//     description:
//       "This foundation course is designed to introduce students to the fundamentals of preparing and recording financial documentation from originating documents and processing ledger transactions up to the trial balance stage. The course mainly covers the knowledge of fundamental accounting concepts for different types of business entities, including the purpose of accounting, the users of accounting information and an introduction to recording transactional accounting data in the double entry bookkeeping system. The course specifically concentrates in depth on recording, processing, and reporting business transactions and events, including the specific accounting for basic financial statement items, which are prerequisites for preparation of final accounts. Overall, the course aims to help students to develop knowledge and understanding of the main types of business transactions and documentation and how these are recorded in an accounting system up to the trial balance stage. ",
//   },
//   {
//     courseCode: "ACC 201",
//     courseName: "Principles of Accounting I",
//     faculty: "	Faculty of Economics and Administrative Sciences",
//     description: "",
//   },
// ];

export {
  BASE_URL,
  isNumber,
  isEmail,
  UUID_API_URL,
  stringToBoolean,
  isLoggedIn,
  removeSpace,
  ArrayIsEmpty,
};
