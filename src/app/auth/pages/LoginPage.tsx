import { AuthForm, type AuthFormData } from '../components/AuthForm';

export const LoginPage = () => {
  const handleLogin = (data: AuthFormData) => {
    console.log('Login with', data);
  };

  return (
    <div className="p-8 w-full max-w-md">
      <AuthForm onSubmit={handleLogin} buttonLabel="Login" />
    </div>
  );
};
