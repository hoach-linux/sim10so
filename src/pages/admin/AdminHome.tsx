import * as React from "react";
import Header from "../../components/Admin/Header/AdminHeader";
import { useCheckingRegister } from "../../hooks/useCheckingRegister";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AdminHome = () => {
  const [checkRegister] = useCheckingRegister("/admin/login");

  useEffect(() => {
    checkRegister();
  }, []);

  return (
    <motion.div>
      <Header />
    </motion.div>
  );
};

export default AdminHome;
