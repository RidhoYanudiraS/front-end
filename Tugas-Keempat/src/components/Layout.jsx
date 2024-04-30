import SideBar from "./sidebar"

const Layout = ({children}) => {
    return ( 
        <SideBar>
            {children}
        </SideBar>
     );
}
 
export default Layout;