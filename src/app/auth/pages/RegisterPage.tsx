import api from "@/lib/api";
import { AuthForm, type AuthFormData } from "../components/AuthForm";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = async (data: AuthFormData) => {
    try {
      await api.post("/auth/register", data);
      await api.post("/auth/login", data, { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="p-8 w-full max-w-md">
      <AuthForm onSubmit={handleRegister} buttonLabel="Register" />
    </div>
  );
};
