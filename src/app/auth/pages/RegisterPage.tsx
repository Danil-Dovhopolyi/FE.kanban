import { AuthForm, type AuthFormData } from '../components/AuthForm';

export const RegisterPage = () => {
  const handleRegister = (data: AuthFormData) => {
    console.log('Register with', data);
  };

  return (
    <div className="p-8 w-full max-w-md">
      <AuthForm onSubmit={handleRegister} buttonLabel="Register" />
    </div>
  );
};
