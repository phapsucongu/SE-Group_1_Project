import AdminApplications from "./AdminApplications";
import Sidebar from "./Sidebar";
import AdminRouters from "../../routes/AdminRoutes";
import "./admin.css"

const AdminView = () => {
    return (
    
      <div className="layout-container">
        <Sidebar /> 
        <AdminRouters />
      </div>
    
      
    );
  };
  
  export default AdminView;