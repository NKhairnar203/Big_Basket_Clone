import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [data, setData] = useState([]);



  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios({
  //         method: "GET",
  //         url: "http://localhost:3000/api/product/all-products",
  //       });
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const storeTokenLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIn :", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ storeTokenLS, isLoggedIn, LogoutUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
