import { Input, InputDate } from "../inputs";
import { inputDateProps, inputPrediosProps } from "./";
import { useFormPredio } from "../../hooks";

export const initialForm = {
    _id: null,
    codigo: "",
    nom_prop: "",
    doc_prop: "",
    email_prop: "",
    area_c: "",
    area_t: "",
    valor_predio: "",
    valor_predial: "",
    direccion_predio: "",
    barrio: "",
    fecha_pago: "",
    fecha_pago2: "",
    fecha_pago3: "",
};

function FormPredio({ createPredio, updatePredio,
    predioToEdit, setPredioToEdit, children }) {

    const {
        form,
        reset,
        handleChange,
        handleSubmit
    } = useFormPredio({ initialForm, createPredio, updatePredio, predioToEdit, setPredioToEdit });

    return (
        <form className="row g-3" onSubmit={handleSubmit} noValidate>
            {inputPrediosProps.map((input) => (
                <div key={input.id} className={input.className}>
                    <Input
                        key={input.id}
                        type={input.type}
                        {...input}
                        value={form[input.name]}
                        handleChange={handleChange}
                        reset={reset}
                    />
                </div>
            ))}
            <div>
                <hr className="mb-0" />
                <h5 className="card-title mb-0">
                    Fecha de Pago / Descuentos
                </h5>
            </div>
            {inputDateProps.map((input) => (
                <InputDate
                    key={input.id}
                    type={input.type}
                    {...input}
                    value={form[input.name]}
                    onChange={handleChange}
                    reset={reset}
                />
            ))}
            {children}
        </form>
    )
}

export default FormPredio;