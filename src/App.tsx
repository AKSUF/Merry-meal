
import HomePage from './pages/HomePage';
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';

import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import CaregiverPage from './pages/CaregiverPage';
import CaregivertimePage from './pages/CaregivertimePage';
import UpdateProfilePage from './pages/UpdateProfilePage';
import MealFormPage from './pages/MealFormPage';
import DeliverOrderFormPage from './pages/DeliverOrderFormPage';
function App() {
  return (
<Routes>
<Route path = '/' element = { <HomePage/> } /> 
<Route path = '/login' element = { <LoginPage/> } /> 
<Route path = '/registration' element = { <RegistrationPage/> } /> 
<Route path = '/profile' element = { <ProfilePage/> } /> 
<Route path = '/caregive' element = { <CaregiverPage/> } /> 
<Route path = '/caretime' element = { <CaregivertimePage/> } /> 
<Route path = '/updateprofile' element = { <UpdateProfilePage/> } /> 
<Route path = '/addmealform' element = { <MealFormPage/> } /> 
<Route path = '/deliveryorderform' element = { <DeliverOrderFormPage/> } /> 
</Routes>


  );
}

export default App;
