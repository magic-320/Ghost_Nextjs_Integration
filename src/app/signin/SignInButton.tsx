import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignInButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Handle successful login
      const { access_token } = tokenResponse;
      
      const res = await axios.post<any>('/api/auth/google', {access_token: access_token});
      console.log(res);

    },
    onError: () => {
      console.error('Login failed');
    },
    scope: 'openid email profile https://www.googleapis.com/auth/calendar.events',
  });

  return <button onClick={() => login()}>Sign in with Google</button>;
};

export default SignInButton;
