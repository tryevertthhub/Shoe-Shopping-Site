import { useSelector} from 'react-redux';
import Login from './Auth/Login';
import Home from './Shop/Home';
const Index = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? <Home />:<Login />}
    </>
  );
}
 
export default Index;