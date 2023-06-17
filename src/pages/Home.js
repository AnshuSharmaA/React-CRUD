import React from "react";
import Header from "../master/Header";
import Footer from "../master/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-4">
            <h3 className="text-center">
              CRUD Application with React and Node Js
            </h3>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-6 d-flex justify-content-start">
            <Link to="/add/records" className="btn btn-outline-primary rounded">
              Add Records
            </Link>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12">
            <table class="table table-hover">
              <thead>
                <tr class="table-active">
                  <th scope="col">SR No.</th>
                  <th scope="col">Name </th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Anshu Sharma</td>
                  <td>anshusharma1298@gmail.com</td>
                  <td>7007976332</td>
                  <td>
                    <Link to="/edit">Edit</Link> |{" "}
                    <Link to="/edit">Delete</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
