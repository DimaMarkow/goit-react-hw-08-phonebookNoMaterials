// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { isUserLogin } from 'redux/auth/auth-selectors';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return <LoginForm />;

  // const isLogin = useSelector(isUserLogin);

  // return (
  //   <div>
  //     {!isLogin && <LoginForm />}
  //     {isLogin && <Navigate to="/contacts" />}
  //   </div>
  // );
}
