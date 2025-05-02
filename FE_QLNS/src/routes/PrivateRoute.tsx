import { getStorageJSON, USERLOGIN } from "@/config/config";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  role: "admin" | "user";
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role, children }) => {
  const userData = getStorageJSON(USERLOGIN);
  const role_id = Number(userData?.role_id);
  if (!userData?.token) {
    return <Navigate to="/login" />;
  }
  if (role === "admin" && role_id !== 1) {
    return <Navigate to="/user" />;
  }
  if (role === "user" && role_id !== 2) {
    return <Navigate to="/admin" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
