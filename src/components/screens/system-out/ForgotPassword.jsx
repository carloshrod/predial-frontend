import { CrudUsers } from '../../../services'
import { toastValidate } from '../../../tools';
import { useFormUser } from '../../../hooks';

export const initialForm = {
    email: "",
}

function ForgotPassword() {
    const { getResetLink } = CrudUsers()
    const { form, handleChange } = useFormUser({ initialForm })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email) {
            toastValidate({ msg: "Por favor, ingresa tu correo electrónico!!!" });
            return false;
        }
        getResetLink(form);
    }

    return (
        <div className="row justify-content-center">
            <div className="card col-11 col-lg-6 col-md-8 py-3" id="rounded">
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="card-title fs-4 pb-0">
                            ¿Olvidaste tu contraseña?
                        </h5>
                        <p className="small">
                            Ingresa el correo electrónico con el que te registraste a continuación
                            y te enviaremos un enlace para restablecer tu contraseña
                        </p>
                    </div>
                    <form
                        className="row g-3 pt-2"
                        onSubmit={handleSubmit} noValidate>
                        <div className="input-container col-10 m-auto my-3">
                            <i className="fa-solid fa-at input-icon" />
                            <input
                                className="form-control" type="email" name="email" id="yourEmail"
                                placeholder="Correo Electrónico" onChange={handleChange} value={form.email} required
                            />
                        </div>
                        <div className="col-7 col-sm-6 m-auto mt-2">
                            <button className="my-btn-success w-100" type="submit">
                                Restablecer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword