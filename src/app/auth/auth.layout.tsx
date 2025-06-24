import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Outlet, useLocation, useNavigate } from 'react-router';
export const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const current = location.pathname.includes('register') ? 'register' : 'login';
  const handleChange = (value: string) => {
    if (value === 'login') navigate('/auth/login');
    if (value === 'register') navigate('/auth/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Kanban Auth</h1>
        <Tabs value={current} onValueChange={handleChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
};
