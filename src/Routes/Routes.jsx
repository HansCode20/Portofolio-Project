import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import PixelArt from "../Pages/PixelArt";
import Certificates from "../Pages/Certificates";


const routeList = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path : "/pixelart",
        element : <PixelArt/>
    },
    {
        path : "/certificates",
        element : <Certificates/>
    }
];
export default routeList;