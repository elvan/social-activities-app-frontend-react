import { LockOpen } from '@mui/icons-material';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import TextInput from '../../app/shared/components/TextInput';
import { useAccount } from '../../lib/hooks/useAccount';
import AccountFormWrapper from './AccountFormWrapper';

export default function ForgotPasswordForm() {
  const { forgotPassword } = useAccount();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    try {
      await forgotPassword.mutateAsync(data.email, {
        onSuccess: () => {
          toast.success('Password reset requested - please check your email');
          navigate('/login');
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AccountFormWrapper
      title="Please enter your email address"
      icon={<LockOpen fontSize="large" />}
      submitButtonText="Request password reset link"
      onSubmit={onSubmit}
    >
      <TextInput rules={{ required: true }} label="Email address" name="email" />
    </AccountFormWrapper>
  );
}
