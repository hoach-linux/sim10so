import * as React from "react";
import Header from "../../components/Admin/Header/AdminHeader";
import { useCheckingRegister } from "../../hooks/useCheckingRegister";
import { useEffect } from "react";

const AdminHome = () => {
  const [checkRegister] = useCheckingRegister("/admin/login");

  useEffect(() => {
    checkRegister();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default AdminHome;
