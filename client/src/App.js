import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import Modules from './components/Modules';
import Assignments from './components/Assignments';
import Marks from './components/Marks';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import StudentPage from './components/StudentPage';
import AdminNav from './components/AdminNav';
import StudentNav from './components/StudentNav';
import StudentAssignment from './components/StudentAssignment';
import StudentMarks from './components/StudentMarks';
import InstructorNav from './components/InstructorNav';
import InstructorPage from './components/InstructorPage';
import InstructorModules from './components/InstructorModules';
import InstructorAssignments from './components/InstructorAssignments';
import InstructorMarks from './components/InstructorMarks';
import AddAssignments from './components/AddAssignments';
import ViewAssignments from './components/ViewAssignments';
import SubmitAssignments from './components/SubmitAssignments';
import CreateModules from './components/CreateModules';
import SubmittedAssignments from './components/SubmittedAssignments';
import HomeNav from './components/HomeNav';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<div><HomeNav /><HomePage /></div>} />
          <Route path="/login" element={<div ><LoginPage /></div>} />
          <Route path="/about" element={<div ><HomeNav /><About /></div>} />

          <Route
            path="/admin/*"
            element={
              <div >
                <AdminNav />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="add" element={<CreatePost />} />
                  <Route path="modules" element={<Modules />} />
                  <Route path="modules/add" element={<CreateModules />} />
                  <Route path="assignments" element={<Assignments />} />
                  <Route path="marks" element={<Marks />} />
                  <Route path="edit/:id" element={<EditPost />} />
                  <Route path="post/:id" element={<PostDetails />} />
                </Routes>
              </div>
            }
          />

          <Route
            path="/student/*"
            element={
              <div >
                <StudentNav />
                <Routes>
                  <Route index element={<StudentPage />} />
                  <Route path="assignments" element={<StudentAssignment />} />
                  <Route path="viewAssignments" element={<ViewAssignments />} />
                  <Route path="viewAssignments/:moduleId" element={<ViewAssignments />} />
                  <Route path="submitAssignments" element={<SubmitAssignments />} />
                  <Route path="marks" element={<StudentMarks />} />
                </Routes>
              </div>
            }
          />

          <Route
            path="/instructor/*"
            element={
              <div>
                <InstructorNav />
                <Routes>
                  <Route index element={<InstructorModules />} />
                  <Route path="assignments" element={<InstructorAssignments />} />
                  <Route path="submissions" element={<SubmittedAssignments />} />
                  <Route path="marks" element={<InstructorMarks />} />
                  <Route path="addAssignments" element={<AddAssignments />} />
                </Routes>
              </div>
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
