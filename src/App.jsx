import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import routeList from "./Routes/Routes";

const App = () => {
  const element = useRoutes(routeList);
  return element;
};

export default App;