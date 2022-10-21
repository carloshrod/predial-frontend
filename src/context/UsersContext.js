import { http } from "../helpers/http";
import { createContext, useContext, useState, useEffect } from "react";
import { config } from "../config";

const UsersContext = createContext();

const { URL } = config;
const { LIST_USERS } = config.USERS_API;

const UsersProvider = ({ children }) => {
    const [usersDb, setUsersDb] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);
    const [usersError, setUsersError] = useState(null);
    const [usersErrorMsg, setUsersErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    // ********** Obtener Usuarios **********
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await http().get(URL + LIST_USERS);
                if (!res.error) {
                    return setUsersDb(res.users);
                }
                await Promise.reject(res);
            } catch (error) {
                setUsersError(true);
                setUsersErrorMsg(`${error.status ? "Users Database Error -" : ""} ${error.msg}`);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    const data = {
        usersDb, setUsersDb,
        userToEdit, setUserToEdit,
        usersError, usersErrorMsg, loading
    }

    return (
        <UsersContext.Provider value={data}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsersContext = () => useContext(UsersContext);
export { UsersProvider };
