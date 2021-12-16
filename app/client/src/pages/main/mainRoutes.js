import Messenger from "./Messenger/Messenger";
import ProtectedRoute from "../../components/common/ProtectedRoute";
import pathName from "../../pathname";

const MainRoutes = [

    {
        path: pathName.MESSENGER,
        component: <ProtectedRoute element={<Messenger />} path={pathName.MESSENGER}/>
    }

];


export default MainRoutes;