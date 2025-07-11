import { AuthForm, type AuthFormData } from "../components/AuthForm";
import api from "../../../lib/api";
import { Link } from "react-router";

interface LoginResponse {
  token: string;
}

export const LoginPage = () => {
  const handleLogin = async (data: AuthFormData) => {
    try {
      await api.post<LoginResponse>("/auth/login", data, {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="p-8 w-full max-w-md">
      <AuthForm onSubmit={handleLogin} buttonLabel="Login" />
      <div className="mt-4 text-center">
        <Link
          to="/auth/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
};
