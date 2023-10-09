export const getLoggedUser = () => {
    const userJSON = localStorage.getItem("user");
  
    if (userJSON) {
      // Parse the JSON string into an object
      const user = JSON.parse(userJSON);
      return user;
    } else {
      return null; // Handle the case where "user" is not found in localStorage
    }
  };
  