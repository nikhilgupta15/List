import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [responseData, setResponseData] = useState([]);
  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1 className="text-center">List of Users</h1>
      <table className="table m-3">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map((user) => (
            <tr>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>{user.website}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
