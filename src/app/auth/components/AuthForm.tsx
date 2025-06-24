import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

export interface AuthFormData {
  email: string;
  password: string;
}

interface AuthFormProps {
  onSubmit: (data: AuthFormData) => void;
  buttonLabel: string;
}

export const AuthForm = ({ onSubmit, buttonLabel }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        placeholder="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <Input
        placeholder="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <Button type="submit" className="w-full">
        {buttonLabel}
      </Button>
    </form>
  );
};
