import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";
import NoPageFound from "../components/NoPageFound";
import SalesReport from "../components/Sales/SalesReport";
import Overview from "../components/Overview/Overview";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Overview />} />
          <Route path="salesreport" element={<SalesReport />} />
        </Route>
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
