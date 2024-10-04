import {AppBar, Stack, Box} from '@mui/material';
import NavBar from './pages/main/components/NavBar';
import Feed from './pages/main/components/Feed';
import RightBar from './pages/main/components/RightBar';
import SideBar from './pages/main/components/SideBar';
import Signin from './pages/auth/components/Signin';
import Login from './pages/auth/components/Login';



function App() {
  return (
     <>
          <Box>
          <NavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <SideBar />
              <Feed />
              <RightBar />
             </Stack>
          </Box>
      </>
  );
}

export default App;
