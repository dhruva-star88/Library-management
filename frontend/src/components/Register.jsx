import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/images/home-library-j0f5epsruiuypf5g.webp";
import img2 from "./assets/images/home-library-uxfooi9id0mxvzdq.webp";
import img3 from "./assets/images/home-library-ey7wp5pfmhiy7hof.webp";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupValidation } from "./SignupValidation";
import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";
import { VITE_BACKEND_URL } from '../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBook, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const initialValues = {
  studentid: "",
  name: "",
  course: "",
  yearandsection: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setIsLoading(true);
        const response = await axios.post(`${VITE_BACKEND_URL}/api/register`, values);
        toast.success(`Save ${response.data.name} successfully`);
        setIsLoading(false);
        navigate("/");
      } catch (error) {
        toast.error(error.message);
        setIsLoading(false);
      }
    },
  });

  return (
    <Container className="my-8">
      <h1 className="text-4xl italic text-center text-green-600">Enchanted Wisdom Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-full h-80 object-cover"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption className="bg-black bg-opacity-50 p-4 rounded">
                <h5>Library Slide 1</h5>
                <p>This school library is a great help to us because here we learn many things by reading different types of books</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full h-80 object-cover"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption className="bg-black bg-opacity-50 p-4 rounded">
                <h5>Library Slide 2</h5>
                <p>This library is for all our fellow students so that we can advance study.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full h-80 object-cover"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption className="bg-black bg-opacity-50 p-4 rounded">
                <h5>Library Slide 3</h5>
                <p>It's really quiet so you can focus on your studies here in the library</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h5 className="text-2xl font-bold mb-4">Registration</h5>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name="studentid"
                placeholder="Enter Student ID Number"
                value={values.studentid}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.studentid && <p className="text-red-500 text-xs italic">{errors.studentid}</p>}

            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}

            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faBook} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name="course"
                placeholder="Enter Course Name"
                value={values.course}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.course && <p className="text-red-500 text-xs italic">{errors.course}</p>}

            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faBook} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name="yearandsection"
                placeholder="Enter Year and Section"
                value={values.yearandsection}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.yearandsection && <p className="text-red-500 text-xs italic">{errors.yearandsection}</p>}

            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}

            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}

            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={values.confirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            {errors.confirmpassword && <p className="text-red-500 text-xs italic">{errors.confirmpassword}</p>}

            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Register;
