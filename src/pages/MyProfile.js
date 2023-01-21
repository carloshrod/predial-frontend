import { Button, NavTabs, ProfileOverview } from '../components/minors';
import { FormUser, FormChangePassword } from '../components/forms';
import { useUsersContext } from '../context/UsersContext';
import { useAuthContext } from '../context/AuthContext';

function MyProfile() {
    const { setUserToEdit } = useUsersContext();
    const { loggedUser, payload } = useAuthContext();
    const role = payload?.role;
    const isUserExt = role === 3; 

    const handleEdit = () => {
        setUserToEdit(loggedUser);
    }

    return (
        <div className="card" id={`${isUserExt ? "rounded" : ""}`}>
            <div className="card-body">
                <div className="profile col-12">
                    <NavTabs handleEdit={handleEdit} />
                    <div className="tab-content pt-3">
                        <ProfileOverview
                            loggedUser={loggedUser}
                        />
                        <div className="tab-pane" id="profile-edit">
                            <FormUser
                            >
                                <Button label="Editar"/>
                            </FormUser>
                        </div>
                        <div className="tab-pane" id="profile-change-password">
                            <FormChangePassword
                                loggedUser={loggedUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyProfile;
