import React from "react";
import Header from "../master/Header";
import Footer from "../master/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const Edit = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name").min(3, "too Short"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .min(10, "Mobile number is not valid")
      .max(10, "Mobile number is not valid"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 mt-3">
            <h3 className="text-start mt-3">Edit Record</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label for="name" className="form-label mt-4">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder="Enter your name!"
                />
                {formik.errors.name ? (
                  <span name="error" className="text-danger">
                    {formik.errors.name}
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label for="email" className="form-label mt-4">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Enter your email"
                />
                {formik.errors.email ? (
                  <span name="error" className="text-danger">
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label for="mobile" className="form-label mt-4">
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control rounded"
                  id="mobile"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  placeholder="Enter your mobile "
                />
                {formik.errors.mobile ? (
                  <span name="error" className="text-danger">
                    {formik.errors.mobile}
                  </span>
                ) : null}
              </div>
              <div className="row mt-4">
                <div className="col-sm-12 d-flex justify-content-end">
                  <Link
                    className="btn btn-outline-danger rounded px-5"
                   to='/'
                  >
                    Cancel
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-outline-primary rounded px-5"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Edit;
