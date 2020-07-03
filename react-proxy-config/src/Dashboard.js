import React, { useRef, useState, useEffect } from "react";
import { requestData } from "./common/CommonFunctions.jsx";

const Dashboard = () => {

  let _isMounted = useRef(false);
  
  function getUsers() {
    return requestData(
      "/users",
      {},
      "get"
    );
  }
  
  useEffect(() => {
    _isMounted.current = true;
    initGetUsers();

    return () => {
      _isMounted.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initGetUsers() {
    getUsers()
      .then(result => {
        if (result) {
          if (_isMounted.current) {
            setData(result.data);
          }
        }
      })
      .catch(error => {
        console.warn(error);
      });
  }

  const [data, setData] = useState([]);
  return (
    <React.Fragment>
    	<div style={{ textAlign: "center" }}>
    		<b>This data is retrieve from API:</b> https://jsonplaceholder.typicode.com/users
        <p />
        <table border="1" style={{ width: "100%" }}>
          <tbody>
            {Object.entries(data).map(([key, value]) => {
              return (
                <React.Fragment key={key}>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.email}</td>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
    	</div>
    </React.Fragment>
  );
}

export default Dashboard;