import React, { useRef, useState, useEffect } from "react";
import { requestData, getTableDataFromJSONObject } from "./common/CommonFunctions.js";

import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";

import "react-table/react-table.css";

//Set default values of React Table
Object.assign(ReactTableDefaults, {
  multiSort: false
});

const Dashboard = () => {

  const _isMounted = useRef(false);
  const userTableRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(null);
  const [data, setData] = useState([]);
  const sort = [{"id": "id","desc": false}];  
  
  function getUsers() {

    return requestData(
      "/users",
      {},
      "get"
    );
  }
  
  useEffect(() => {

    _isMounted.current = true;
    fetchData();

    return () => {
      _isMounted.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchData(state) {
    
    let pageSize = state === undefined ? 5 : state.pageSize;
    let page = state === undefined ? 0 : state.page;
    let sorted = state === undefined ? sort : state.sorted;
    
    getUsers()
      .then(res => {
        getTableDataFromJSONObject(res.data, pageSize, page, sorted, "users")
          .then(result => {
            if (_isMounted.current) {
              setLoading(false);
              setPages(result.pages === undefined ? 0 : result.pages);
              setData(result.rows[0].users);
            }
        })
        .catch(error => {
          console.warn(error);
          if (_isMounted.current) {
            setLoading(false);
          }
        });
      })
      .catch(error => {
        console.warn(error);
        if (_isMounted.current) {
          setLoading(false);
        }
      });
  }

  return (
    <React.Fragment>
    	<div style={{ textAlign: "center", padding: "35px" }}>
    		<b>This data is retrieved from API:</b> https://jsonplaceholder.typicode.com/users
        <p />
        <ReactTable
            ref={userTableRef}
            columns={[
              {
                Header: "Id",
                accessor: "id",
                width: 70,
                headerClassName: "BoldText ColoredText"
              },
              {
                Header: "Email",
                accessor: "email",
                className: "LeftAlignedText",
                headerClassName: "BoldText ColoredText"
              },
              {
                Header: "Name",
                accessor: "name",
                className: "LeftAlignedText",
                headerClassName: "BoldText ColoredText"
              },
              {
                Header: "Username",
                accessor: "username",
                className: "LeftAlignedText",
                headerClassName: "BoldText ColoredText"
              }
            ]}
            defaultSorted={[
              {
                id: "id",
                desc: false
              }
            ]}
            manual
            data={data}
            pages={pages}
            loading={loading}
            onFetchData={fetchData}
            defaultPageSize={5}
            className="-striped -highlight"
        />           
    	</div>
    </React.Fragment>
  );
}

export default Dashboard;