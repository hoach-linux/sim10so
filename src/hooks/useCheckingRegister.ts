import { useNavigate } from "react-router-dom";

export const useCheckingRegister = (link: string) => {
  const navigate = useNavigate();
  const regitered = localStorage.getItem("sb-vxdcqhvkrmgpvrdwujld-auth-token");

  const checkRegister = () => {
    if (regitered) return;

    return navigate(link);
  };

  return checkRegister;
};
