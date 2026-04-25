import dotenv from 'dotenv';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const AttendEaseContext = createContext();

const AttendEaseContextProvider = ({ children }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState(localStorage.getItem("id")?localStorage.getItem("id"):"");
  const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");

  const [day, setDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" }),
  );
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [timeTableData, setTimeTableData] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [attendance, setAttendance] = useState([]);
  

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(BACKEND_URL + "/api/user/login", formData);

      if (response.data.success) {
        setToken(response.data.token);
        setId(response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        navigate("/home");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const response = await axios.post(BACKEND_URL + "/api/user/register", formData);
      if(response.data.success){
        setToken(response.data.token);
        setId(response.data.id);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('id',response.data.id);
        navigate("/home");
        toast.success(response.data.message);
      } else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  
  const getLectures = async (day) => {
    // setLoading(true);
    try {
      const response = await axios.get(BACKEND_URL + `/api/lectures/day/${day}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );     
      
      if (response.data.success) {
        setTimeTableData(response.data.lectures);
        setLoading(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Unable to load lectures. Please try again later.");
    }
  };

  const getSubjects = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(BACKEND_URL + `/api/subjects?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        setSubjects(response.data.subjects);
        setLoading(false);
      } else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Unable to load courses. Please try again later.");
    }
  };

  const getAttendance = async () => { 
    setLoading(true);
    try {
      const response = await axios.get(
        BACKEND_URL + `/api/attendance/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      if (response.data.success) {
        setAttendance(response.data.attendance);
        setLoading(false);
      } else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Unable to load attendance. Please try again later.");
    }
  };


  
  useEffect(()=>{
    if(!token){
      navigate("/login");
      return;
    }
    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
  }, [token, id]);


  
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/attendance/overall" 
    ) {
      getAttendance();
    }
  }, [location.pathname]);



  const object = {
    handleRegister,
    handleLogin,
    id,
    setId,
    token,
    setToken,
    location,
    loading,
    error,
    setDay,
    day,
    openSidebar,
    setOpenSidebar,
    activeTab,
    setActiveTab,
    timeTableData,
    getLectures,
    subjects,
    getSubjects,
    attendance,
    getAttendance,
  };

  return (
    <AttendEaseContext.Provider value={{ object }}>
      {children}
    </AttendEaseContext.Provider>
  );
};

export { AttendEaseContext, AttendEaseContextProvider };
