import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";


const routeList = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
];
export default routeList;