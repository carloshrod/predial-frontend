import { useUsersContext } from "../../context/UsersContext";
import { useAuthContext } from "../../context/AuthContext";
import { Message } from "../minors";
import { NavLink, useLocation } from "react-router-dom";

function Container({ children }) {
    const { error, msgError } = useUsersContext();
    const { payload, auth } = useAuthContext();
    const role = payload?.role;
    const { pathname } = useLocation();

    let title = (pathname.includes("dashboard") && "Dashboard") ||
        ((pathname.includes("admin/profile") || pathname.includes("ext/profile")) && "Mi Perfil") ||
        (pathname.includes("create-user") && "Crear Usuario") ||
        (pathname === "/admin/manage-users" && "Gestionar Usuarios") ||
        (pathname.includes("users/edit") && "Editar Usuario") ||
        (pathname.includes("users/profile") && "Perfil de Usuario") ||
        (pathname.includes("create-property") && "Crear Predio") ||
        (pathname === "/admin/manage-properties" && "Gestionar Predios") ||
        (pathname.includes("properties/edit") && "Editar Predio") ||
        (pathname.includes("associate") && "Asociar Predios") ||
        (pathname.includes("my-properties") && "Mis Predios")

    const isManageUsers = title === "Editar Usuario" || title === "Perfil de Usuario";
    const isManageProperties = title === "Editar Predio";
    let subtitle = isManageUsers ? "Gestionar Usuarios" : isManageProperties && "Gestionar Predios";
    let path = isManageUsers ? "/admin/manage-users" : isManageProperties ? "/admin/manage-properties" : "";
    let sep = (isManageUsers || isManageProperties) && "|";
    let errorMessage = (auth && title !== "Crear Usuario" && title !== "Crear Predio"
        && title !== "Editar Usuario" && title !== "Editar Predio" && title !== "Asociar Predios"
        && title !== "Mis Predios" && !pathname.includes("home") && error)
        &&
        <Message msg={msgError} bgColor="#dc3545" />;

    return (
        <main id={`${(auth && role !== 3) && "main"}`} className={`${(!auth || role === 3) && "vh-center"} min-vh-100`} >
            <div className={`${(!auth || role === 3) && "container"}`}>
                <div className={`${role === 3 && "mt-5"}`}>
                    {errorMessage}
                </div>
                <div className={`${(auth && role !== 3) && "pagetitle"}`}>
                    <h1 className={`${(!auth || role === 3) && "text-center font-weight-bold mt-5"}`}>
                        {title}
                    </h1>
                    {subtitle &&
                        <nav>
                            <ol className="breadcrumb">
                                <NavLink to={path}>
                                    {subtitle}
                                </NavLink>
                                <>&nbsp;{sep}&nbsp;</>
                                <NavLink to="#">
                                    {title}
                                </NavLink>
                            </ol>
                        </nav>
                    }
                </div>
                {!auth || role === 3
                    ?
                    <>
                        {title === "Mi Perfil" ?
                            <div className="card">
                                <div className="card-body">
                                    {children}
                                </div>
                            </div>
                            :
                            <>
                                {children}
                            </>
                        }
                    </>
                    :
                    <>
                        {pathname.includes("dashboard") ?
                            <>
                                <div className="row">
                                    {children}
                                </div>
                            </>
                            :
                            <>
                                <div className="card">
                                    <div className="card-body">
                                        {children}
                                    </div>
                                </div>
                            </>
                        }
                    </>
                }
            </div>
        </main>
    )
}

export default Container;
