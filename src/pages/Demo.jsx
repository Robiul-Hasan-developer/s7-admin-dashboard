import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import PageBreadcrumb from "../components/PageBreadcrumb";
import { SidebarContext } from "../components/context/SidebarContext";

const Demo = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

  // Access environment variables using import.meta.env
  const apiUrl = import.meta.env.VITE_API_KEY;
  const authToken = import.meta.env.VITE_AUTH_TOKEN;

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);


  return (
    <>
      <TopNav />
      <div className="body-area">
        <Sidebar />

        <main className={`s7__main ${sidebarOpen ? "collapsed" : ""}`}>
          <PageBreadcrumb title="Demo Page" />

          <div className="py-5">
            <div className="row">
              <div className="col-lg-10">
                <div className="card">
                  <div className="card-header">
                    <h4 className="mb-0">
                      This is data coming From .env file by API
                    </h4>
                  </div>
                  <div className="card-body d-flex align-items-center gap-5">
                    {apiData && (
                      <>
                        <div
                          className="product-thumb"
                          style={{
                            maxHeight: "300px",
                            maxWidth: "300px",
                            overflow: "hidden",
                          }}
                        >
                          <img src={apiData.image} className="mh-50" alt="" />
                        </div>
                        <div className="content">
                            <span className="mt-4 d-inline-block">ID: {apiData.id}</span>
                            <h6 className="mt-2">Price: {apiData.price}</h6>
                            <h4 className="mt-4">{apiData.title}</h4>
                            <p>{apiData.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Demo;
