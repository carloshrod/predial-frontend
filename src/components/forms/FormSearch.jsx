import { useFormProperty } from '../../hooks';

export const initialForm = { owner_id_number: "" };

function FormSearch() {
    const { form, handleChange, handleSubmitSearch } = useFormProperty({ initialForm });

    return (
        <div className="card col-11 col-md-10 col-lg-8 col-xl-6 m-auto mb-4 p-2" id="rounded">
            <div className="card-body">
                <h5 className="card-title">
                    Buscar predios
                </h5>
                <form onSubmit={handleSubmitSearch} className="row">
                    <div className="col-9 col-sm-4 m-sm-auto">
                        <label className="blue-label" htmlFor="idDatos">
                            Documento del propietario:
                        </label>
                    </div>
                    <div className="col-8 col-sm-6 m-auto">
                        <input className="form-control form-transparent" type="text" name="owner_id_number"
                            id="IdOwner_id_number" onChange={handleChange} value={form.owner_id_number}
                        />
                    </div>
                    <div className="col text-center m-auto">
                        <button className="my-btn-success" type="submit">
                            <i className="bi bi-search" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormSearch;
