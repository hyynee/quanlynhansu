import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Layout/Topbar";
import Overview from "./pages/AdminDashBoard/Overview/Overview";

import AddNhanVien from "./components/modal/Add/AddNhanVien";
import ViewDetailNhanVien from "./components/modal/View/Admin/ViewDetailNhanVien";
import ViewDetailPhongBan from "./components/modal/View/Admin/ViewDetailPhongBan";
import { Toaster } from "./components/ui/sonner";
import Account from "./pages/AdminDashBoard/Account/Account";
import BangCap from "./pages/AdminDashBoard/Degree/BangCap";
import Phongban from "./pages/AdminDashBoard/Department/Phongban";
import Disciplines from "./pages/AdminDashBoard/Disciplines/Disciplines";
import DisciplinesEmployees from "./pages/AdminDashBoard/Disciplines/employees/DisciplinesEmployees";
import KindOfDisciplines from "./pages/AdminDashBoard/Disciplines/KindOfDisciplines/KindOfDisciplines";
import Dantoc from "./pages/AdminDashBoard/Nation/Dantoc";
import Nhanvien from "./pages/AdminDashBoard/NhanVien/Nhanvien";
import Charts from "./pages/AdminDashBoard/Overview/Charts";
import Position from "./pages/AdminDashBoard/Positon/Position";
import Project from "./pages/AdminDashBoard/Project/Project";
import RewardEmployee from "./pages/AdminDashBoard/Rewards/employees/RewardEmployee";
import KindOfRewards from "./pages/AdminDashBoard/Rewards/kindOfRewards/KindOfRewards";
import Reward from "./pages/AdminDashBoard/Rewards/Reward";
import BoardSalary from "./pages/AdminDashBoard/Salary/Board/BoardSalary";
import Salary from "./pages/AdminDashBoard/Salary/Salary";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserHome from "./pages/UserDashBoard/OverviewUser/UserHome";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  // const { user } = useAuth();
  return (
    <div className="min-h-screen transition-opacity duration-700">
      <Toaster position="top-right" richColors />
      <Topbar />
      {/* {!user && <Navbar />} */}
      <div>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* User Route */}
          <Route path="/user" element={<PrivateRoute role="user" />}>
            <Route index element={<UserHome />} />
          </Route>

          {/* Admin Route */}
          {/* <Route path="/admin" element={<PrivateRoute role="admin"><Overview /></PrivateRoute>}> */}
          <Route path="/admin" element={<Overview />}>
            <Route index element={<Charts />} />
            <Route path="/admin/employees" element={<Nhanvien />} />
            <Route path="/admin/employees/:id" element={<ViewDetailNhanVien />} />
            <Route path="/admin/employees/add" element={<AddNhanVien />} />
            <Route path="/admin/employees/nations" element={<Dantoc />} />
            <Route path="/admin/employees/degrees" element={<BangCap />} />
            <Route path="/admin/department" element={<Phongban />} />
            <Route path="/admin/department/:id" element={<ViewDetailPhongBan />} />
            <Route path="/admin/project" element={<Project />} />
            <Route path="/admin/position" element={<Position />} />
            <Route path="/admin/salaries" element={<Salary />} />
            <Route path="/admin/salaries/board" element={<BoardSalary />} />
            <Route path="/admin/rewards" element={<Reward />} />
            <Route path="/admin/rewards/kindOfrewards" element={<KindOfRewards />} />
            <Route path="/admin/rewards/employees" element={<RewardEmployee />} />
            <Route path="/admin/discipline" element={<Disciplines />} />
            <Route path="/admin/discipline/kindOfDisciplines" element={<KindOfDisciplines />} />
            <Route path="/admin/discipline/employees" element={<DisciplinesEmployees />} />
            <Route path="/admin/account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
