// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Components/Login'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from './Components/Dashboard'  
// import Home from './Components/Home'
// import Category from './Components/Category'
// import Employee from './Components/Employee'
// import Profile from './Components/Profile'

// function App() {
  

//   return (
//     <BrowserRouter>  
//     <Routes>
//       <Route path='/adminlogin' element={<Login />}></Route>
//       <Route path='/dashboard' element={<Dashboard />}></Route>
//       <Route path='' element={<Home />}></Route>
//       <Route path='/dashboard/employee' element={<Employee />}></Route>
//       <Route path='/dashboard/category' element={<Category />}></Route>
//       <Route path='/dashboard/profile' element={<Profile />}></Route>
//     </Routes>
//     </BrowserRouter>  
//   )
// }

// export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Category from './Components/Category'
import Employee from './Components/Employee'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import { useEffect } from 'react'
import axios from 'axios'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/employee_detail/:id" element={<EmployeeDetail />} />
        
        {/* Dashboard içinde nested routing kullanalım */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={<Home />} /> {/* /dashboard */}
          <Route path="employee" element={<Employee />} /> {/* /dashboard/employee */}
          <Route path="category" element={<Category />} /> {/* /dashboard/category */}
          <Route path="profile" element={<Profile />} /> {/* /dashboard/profile */}
          <Route path="add_category" element={<AddCategory />} /> 
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="edit_employee/:id" element={<EditEmployee />} />
        </Route>
        
        {/* Ana sayfa */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
