import { useSelector} from 'react-redux';
import Login from './pages/Auth/Login';
import Home from './pages/Shop/Home';
const App = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? <Home />:<Home />}
    </>
  );
}
 
export default App;