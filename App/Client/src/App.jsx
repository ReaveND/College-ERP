import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Admin/login1.jsx';
import AdminLogin from './Login/Admin-Login.jsx';
import StudentLogin from './Login/Student-Login.jsx';
import FacultyLogin from './Login/Faculty-Login.jsx';

import HomePage from "./Homepage/HomePage";
import AcademicPage from "./Homepage/AcademicPage";
import FacultyPage from "./Homepage/FacultyPage";
import PlacementPage from "./Homepage/placementpage.jsx";
import Admission from "./Homepage/Admission.jsx";
import ContactUs from "./Homepage/ContactUs";
import AboutUs from "./Homepage/AboutUs.jsx";
import CampusView from "./Homepage/campusview.jsx"; 
import EventLife from "./Homepage/EventLife.jsx"
import AcademicCalendar from "./Homepage/AcademicCalender.jsx";


// import Admin from './Admin/Admin';
// import Dashboard from './Admin/Dashboard';
// import Admission from './Admin/Admission';
// import Users from './Admin/Users';
// import StudentTable from './Admin/StudentTable';
// import AddAdmin from './Admin/AddAdmin';
// import AdminTable from './Admin/AdminTable';
// import AddFaculty from './Admin/AddFaculty';
// import FacultyTable from './Admin/FacultyTable';

// import Student from './Student/Student';
// import Dashboard from './Student/Dashboard';
// import StudentProfile from './Student/Profile';
// import StudentData from './Student/StudentData';
// import ExamForm from './Student/Examform';
// import ResultCard from './Student/ResultCard';
// import AssignmentPage from './Student/assignmentPage';
// import SemExamFeesClearance from './Student/SemExamFeesClearance';
// import AdmitCard from './Student/AdmitCard';
// import StudyMaterials from './Student/StudyMaterials';
// import Library from './Student/Library';
// import AttendancePage from './Student/AttendancePage';


// import Faculty from './Faculty/Faculty';
// import Dashboard from './Faculty/Dashboard';
// import FacultyProfile from './Faculty/FacultyProfile';
// import FacultyTimeTable from './Faculty/FacultyTimeTable';
// import Attendance from './Faculty/Attendance';
// import FacultyStudyMaterial from './Faculty/StudyMaterial';
// import MarksUpload from './Faculty/MarksUpload';
// import Assignment from './Faculty/Assignment';
// import LeaveRequest from './Faculty/LeaveRequest';


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <Router>
        <Routes>
          {/* HomePage */}
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/AcademicPage' element={<AcademicPage/>}></Route>
          <Route path='/FacultyPage' element={<FacultyPage/>}></Route>
          <Route path='/PlacementPage' element={<PlacementPage/>}></Route>
          <Route path='/Admission' element={<Admission/>}></Route>
          <Route path='/ContactUS' element={<ContactUs/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/AcademicCalendar' element={<AcademicCalendar/>}></Route>         
          <Route path='/EventLife' element={<EventLife/>}></Route>
          <Route path='/CampusView' element={<CampusView/>}></Route>

          {/* Login Pages */}
          <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
          <Route path='/StudentLogin' element={<StudentLogin/>}></Route>
          <Route path='/FacultyLogin' element={<FacultyLogin/>}></Route>
          

          {/* Admin Panel */}
          {/* <Route path="/" element={<Admin />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admission" element={<Admission />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/StudentTable" element={<StudentTable />} />
            <Route path="/AddAdmin" element={<AddAdmin />} />
            <Route path="/AdminTable" element={<AdminTable />} />
            <Route path="/AddFaculty" element={<AddFaculty />} />
            <Route path="/FacultyTable" element={<FacultyTable />} />
          </Route> */}
          
          {/* Student Panel */}
          {/* <Route path='/' element={<Student />}>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/StudentProfile' element={<StudentProfile StudentData={StudentData} />} />
            <Route path='/StudyMaterials' element={<StudyMaterials />} />
            <Route path='/Library' element={<Library />} />
            <Route path='/AttendancePage' element={<AttendancePage />} />
            <Route path='/ExamForm' element={<ExamForm />} />
            <Route path='/ResultCard' element={<ResultCard />} />
            <Route path='/AssignmentPage' element={<AssignmentPage />} />
            <Route path='/AdmitCard' element={<AdmitCard />} />
            <Route path='/SemExamFeesClearance' element={<SemExamFeesClearance />} />
          </Route> */}

          {/* Faculty Panel */}
          {/* <Route path='/' element={<Faculty />}> 
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/FacultyProfile' element={<FacultyProfile />} />
            <Route path='/FacultyTimeTable' element={<FacultyTimeTable />} />
            <Route path='/Attendance' element={<Attendance />} />
            <Route path='/FacultyStudyMaterial' element={<FacultyStudyMaterial />} />
            <Route path='/MarksUpload' element={<MarksUpload />} />
            <Route path='/Assignment' element={<Assignment />} />
            <Route path='/LeaveRequest' element={<LeaveRequest />} />
          </Route> */}

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
