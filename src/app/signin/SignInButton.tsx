import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignInButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Handle successful login
      const { access_token } = tokenResponse;
      
      // Send token to the backend for further processing or secure storage
      const response = await axios.post('/api/auth/google', { access_token });

      console.log('User authenticated:', response.data);
    },
    onError: () => {
      console.error('Login failed');
    },
    scope: 'openid email profile https://www.googleapis.com/auth/calendar.events',
  });

  return <button onClick={() => login()}>Sign in with Google</button>;
};

export default SignInButton;
