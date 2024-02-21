import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/dashboard" exact Component={Dashboard} />
      <Route path="/projects" exact Component={Projects} />
      <Route path="/projects/:id" Component={ProjectDetails} />
      <Route path="/team" Component={Team} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

export default AppRouter;
