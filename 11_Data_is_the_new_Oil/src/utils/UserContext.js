import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Dummy Name", email: "dummy@gmail.com" },
});
export default UserContext;

// This is a global react variable
// context is like useState for your whole big application
