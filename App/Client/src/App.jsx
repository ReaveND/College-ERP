import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Admission from './components/Admission';
import Users from './components/Users';
import StudentTable from './components/StudentTable';

// import Student from './Student/Student';
// import StudentProfile from './Student/Profile';
// import StudentData from './Student/StudentData';
// import ExamForm from './Student/Examform';
// import ResultCard from './Student/ResultCard';
// import AssignmentPage from './Student/assignmentPage';
// import SemExamFeesClearance from './Student/SemExamFeesClearance';
// import AdmitCard from './Student/AdmitCard';

// import Login from './components/login';



function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <Router>
        <Routes>
          <Route path="/" element={<Admin />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admission" element={<Admission />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/StudentTable" element={<StudentTable />} />
          </Route>
          
          {/* <Route path='/' element={<Student />}>
            <Route path='/StudentProfile' element={<StudentProfile StudentData={StudentData} />} />
            <Route path='/ExamForm' element={<ExamForm />} />
            <Route path='/ResultCard' element={<ResultCard />} />
            <Route path='/AssignmentPage' element={<AssignmentPage />} />
            <Route path='/AdmitCard' element={<AdmitCard />} />
            <Route path='/SemExamFeesClearance' element={<SemExamFeesClearance />} />
          </Route> */}
          {/* <Route path='/' element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
