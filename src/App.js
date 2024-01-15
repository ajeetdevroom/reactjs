import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
// import About from './pages/About';
import Navbar from './pages/Navbar';
import ConfirmOrder from './pages/ConfirmOrder';
import ConfirmOrderWithReplaceHistory from './pages/ConfirmOrderWithReplaceHistory';
import NoMatch from './pages/NoMatch';
import Order from './pages/Order';
import ChildPageOneOfOrder from './pages/ChildPageOneOfOrder';
import ChildPageTwoOfOrder from './pages/ChildPageTwoOfOrder'
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';
import Admin from './pages/Admin';
const AboutLazy = React.lazy(() => import('./pages/About'));
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallBack='Loading....'>
            <AboutLazy />
          </React.Suspense>
          }
        />
         {/* <Route path='about' element={<About/>}/> */}
        <Route path='course' element={<Course />} />
        <Route path='/course/order-summary' element={<ConfirmOrder />} />
        <Route path='order-summary' element={<ConfirmOrder />} />
        <Route path='order' element={<Order />}>
          {/* <Route index element={<ChildPageOneOfOrder />} /> */}
          <Route path='order1' element={<ChildPageOneOfOrder />} />
          <Route path='order2' element={<ChildPageTwoOfOrder />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path='user/:id' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='order-replace-history' element={<ConfirmOrderWithReplaceHistory />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

    </>


  );
}

export default App;
