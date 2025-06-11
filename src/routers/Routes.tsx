import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Invoice } from "../pages/Invoice";
import { Invoice_Form_Route, Login_Page_Route } from "../constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Login_Page_Route} element={<Login />} />
      <Route path={Invoice_Form_Route} element={<Invoice />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
