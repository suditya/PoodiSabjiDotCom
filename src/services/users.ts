export const isLoggedIn = () => {
  return (
    localStorage.getItem("LoggedInEmail") != null &&
    localStorage.getItem("LoggedInEmail") != undefined
  );
};

export const getEmailId = () => {
  return localStorage.getItem("LoggedInEmail");
};
