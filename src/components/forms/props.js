import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const CodMask = createNumberMask({
    prefix: 'PD-',
    includeThousandsSeparator: false,
    integerLimit: 9,
    allowLeadingZeroes: true
})

const AreaMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    requireDecimal: true
})

const CurrencyMask = createNumberMask({
    prefix: '',
    thousandsSeparatorSymbol: '.'
})

export const inputUsersProps = [
    {
        id: "IdNombres",
        name: "nombres",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-user",
        errorMessage: "Por favor, ingrese un nombre válido!!! (Letras y espacios en blanco)",
        label: "Nombres",
        pattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$",
        required: true,
    },
    {
        id: "IdApellidos",
        name: "apellidos",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-user",
        errorMessage: "Por favor, ingrese un apellido válido!!! (Letras y espacios en blanco)",
        label: "Apellidos",
        pattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$",
        required: true,
    },
    {
        id: "IdTipo_doc",
        name: "tipo_doc",
        type: "select",
        className: "col-10 col-sm-5 m-auto my-2",
        label: "Tipo de Documento",
        required: true,
    },
    {
        id: "IdNro_doc",
        name: "nro_doc",
        type: "number",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-fingerprint",
        errorMessage: "Por favor, ingrese un número de documento válido!!! (Números enteros sin comas ni puntos - Ej: 1145102365)",
        label: "Nro. de Documento",
        pattern: "^[0-9]+$",
        required: true,
    },
    {
        id: "IdEmail",
        name: "email",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-at",
        errorMessage: "Por favor, ingrese un correo electrónico válido!!! (Ej: ejemplo@mail.com)",
        label: "Correo Electrónico",
        pattern: "^(\\w+[/./-]?){1,}@[a-z]+[/.]\\w{2,}$",
        required: true,
    },
    {
        id: "IdTelefono",
        name: "telefono",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-phone",
        errorMessage: "Por favor, ingrese un número de teléfono válido!!! (Ej: (310) 654-3210 - Entre paréntesis indicativo fijo o celular)",
        label: "Teléfono",
        pattern: "^[(][1-9][0-9]{2}[)]\\s[1-9][0-9]{2}[-][0-9]{4}$",
        mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        required: true,
    },
    {
        id: "IdDireccion",
        name: "direccion",
        type: "text",
        className: "col-10 col-sm-11 m-auto my-2",
        icon: "fa-solid fa-location-dot",
        errorMessage: "Por favor, ingrese una dirección válida!!! (Ejs: Calle 12 # 34 - 56, Carrera 123a # 45b - 67)",
        label: "Dirección",
        pattern: "^(([C][a][l][l][e]\\s)|([C][a][r][r][e][r][a]\\s))[1-9]([0-9]+)?([a-z])?\\s[#]\\s[1-9]([0-9]+)?([a-z])?\\s[-]\\s[1-9]([0-9]+)?$",
        required: true,
    },
];

export const inputUsersRegisterProps = [
    {
        id: "IdNombres",
        name: "nombres",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-user",
        errorMessage: "Por favor, ingrese un nombre válido!!! (Letras y espacios en blanco)",
        label: "Nombres",
        pattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$",
        required: true,
    },
    {
        id: "IdApellidos",
        name: "apellidos",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-user",
        errorMessage: "Por favor, ingrese un apellido válido!!! (Letras y espacios en blanco)",
        label: "Apellidos",
        pattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$",
        required: true,
    },
    {
        id: "IdTipo_doc",
        name: "tipo_doc",
        type: "select",
        className: "col-10 col-sm-5 m-auto my-2",
        label: "Tipo de Documento",
        required: true,
    },
    {
        id: "IdNro_doc",
        name: "nro_doc",
        type: "number",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-fingerprint",
        errorMessage: "Por favor, ingrese un número de documento válido!!! (Números enteros 0-9)",
        label: "Nro. de Documento",
        pattern: "^[0-9]+$",
        required: true,
    },
    {
        id: "IdEmail",
        name: "email",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-at",
        errorMessage: "Por favor, ingrese un correo electrónico válido!!! (ejemplo@mail.com)",
        label: "Correo Electrónico",
        pattern: "^(\\w+[/./-]?){1,}@[a-z]+[/.]\\w{2,}$",
        required: true,
    },
    {
        id: "IdPassword",
        name: "password",
        type: "password",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-key",
        errorMessage: "La contraseña debe tener una longitud mínima de 8; contener al menos 1 mayuscula, 1 minuscula, 1 número y un caracter especial!!!",
        label: "Contraseña",
        pattern: "^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])((?=.*\\W)|(?=.*_)).*$",
        required: true,
    },
    {
        id: "IdTelefono",
        name: "telefono",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-phone",
        errorMessage: "Por favor, ingrese un tipo de documento válido!!! (Números enteros 0-9)",
        label: "Teléfono",
        pattern: "^[(][1-9][0-9]{2}[)]\\s[1-9][0-9]{2}[-][0-9]{4}$",
        mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        required: true,
    },
    {
        id: "IdDireccion",
        name: "direccion",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "bi bi-geo-alt-fill",
        errorMessage: "Por favor, ingrese una dirección válida!!! (Ejs: Calle 12 # 34 - 56, Carrera 123a # 45b - 67)",
        label: "Dirección",
        pattern: "^(([C][a][l][l][e]\\s)|([C][a][r][r][e][r][a]\\s))[1-9]([0-9]+)?([a-z])?\\s[#]\\s[1-9]([0-9]+)?([a-z])?\\s[-]\\s[1-9]([0-9]+)?$",
        required: true,
    },
];

export const inputPrediosProps = [
    {
        id: "IdCodigo",
        name: "codigo",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-barcode",
        errorMessage: "Por favor, ingrese un código válido!!! (Ej: PD-123456789)",
        label: "Código",
        pattern: "^[P][D][-][0-9]{9}$",
        mask: CodMask,
        required: true,
    },
    {
        id: "IdNom_prop",
        name: "nom_prop",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-user",
        errorMessage: "Por favor, ingrese un nombre válido!!! (Letras y espacios en blanco)",
        label: "Nombre del Propietario",
        pattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$",
        required: true,
    },
    {
        id: "IdDoc_prop",
        name: "doc_prop",
        type: "number",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-fingerprint",
        errorMessage: "Por favor, ingrese un número de documento válido!!! (Números enteros 0-9)",
        label: "Nro. Documento del Propietario",
        pattern: "^[0-9]+$",
        required: true,
    },
    {
        id: "IdEmail_prop",
        name: "email_prop",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-at",
        errorMessage: "Por favor, ingrese un correo electrónico válido!!! (Ej: ejemplo@mail.com)",
        label: "Correo Electrónico",
        pattern: "^(\\w+[/./-]?){1,}@[a-z]+[/.]\\w{2,}$",
        required: true,
    },
    {
        id: "IdArea_c",
        name: "area_c",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-building",
        errorMessage: "Por favor, ingrese un dato válido!!! (2 cifras decimales. Ejs: 10.00, 10.50)",
        label: "Área Construida (M²)",
        pattern: "^[1-9]([0-9]{1,2})?(([,][0-9]{3})+)?[.][0-9]{2}$",
        mask: AreaMask,
        required: true,
    },
    {
        id: "IdArea_t",
        name: "area_t",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-building",
        errorMessage: "Por favor, ingrese un dato válido!!! (2 cifras decimales. Ejs: 10.00, 10.50)",
        label: "Área Total (M²)",
        pattern: "^[1-9]([0-9]{1,2})?(([,][0-9]{3})+)?[.][0-9]{2}$",
        mask: AreaMask,
        required: true,
    },
    {
        id: "IdValor_predio",
        name: "valor_predio",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-dollar-sign",
        errorMessage: "Por favor, ingrese un valor!!!",
        label: "Valor del Predio",
        pattern: "^[1-9][0-9.]*$",
        mask: CurrencyMask,
        required: true,
    },
    {
        id: "IdValor_predial",
        name: "valor_predial",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-dollar-sign",
        errorMessage: "Por favor, ingrese un valor!!!",
        label: "Valor del Impuesto Predial",
        pattern: "^[1-9][0-9.]*$",
        mask: CurrencyMask,
        required: true,
    },
    {
        id: "IdDireccion_predio",
        name: "direccion_predio",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-location-dot",
        errorMessage: "Por favor, ingrese una dirección válida!!! (Ejs: Calle 12 # 34 - 56, Carrera 123a # 45b - 67)",
        label: "Dirección",
        pattern: "^(([C][a][l][l][e]\\s)|([C][a][r][r][e][r][a]\\s))[1-9]([0-9]+)?([a-z])?\\s[#]\\s[1-9]([0-9]+)?([a-z])?\\s[-]\\s[1-9]([0-9]+)?$",
        required: true,
    },
    {
        id: "IdBarrio",
        name: "barrio",
        type: "text",
        className: "col-10 col-sm-5 m-auto my-2",
        icon: "fa-solid fa-location-dot",
        errorMessage: "Por favor, ingrese un barrio válido!!!",
        label: "Barrio",
        pattern: "^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\\s]+$",
        required: true,
    },
];

export const inputDateProps = [
    {
        id: "IdFecha_pago",
        name: "fecha_pago",
        type: "date",
        className: "col-10 col-sm-5",
        errorMessage: "Por favor, ingrese una fecha válida!!!",
        label: "Fecha de Pago Máxima:",
        required: true,
    },
    {
        id: "IdFecha_pago2",
        name: "fecha_pago2",
        type: "date",
        className: "col-10 col-sm-5",
        errorMessage: "Por favor, ingrese una fecha válida!!!",
        label: "Fecha de Pago para descuento del 40%:",
        required: true,
    },
    {
        id: "IdFecha_pago3",
        name: "fecha_pago3",
        type: "date",
        className: "mb-3 col-10 col-sm-5",
        errorMessage: "Por favor, ingrese una fecha válida!!!",
        label: "Fecha de pago para descuento del 20%:",
        required: true,
    },
]

export const inputConvenioProps = [
    {
        id: "IdCuotaInicial",
        name: "cuotaInicial",
        type: "select",
        inputClass: "col-10 col-sm-5 m-auto my-3",
        labelClass: " text-center col-10 col-sm-5 m-auto",
        label: "Cuota Inicial:",
        required: true,
    },
    {
        id: "IdVrCuotaInicial",
        name: "vrCuotaInicial",
        type: "text",
        inputClass: "col-10 col-sm-5 m-auto my-3",
        labelClass: " text-center col-10 col-sm-5 m-auto",
        icon: "fa-solid fa-dollar-sign",
        errorMessage: "Por favor, ingrese un valor!!!",
        label: "Valor Cuota Inicial:",
        mask: CurrencyMask,
        required: true,
    },
    {
        id: "IdNroCuotas",
        name: "nroCuotas",
        type: "select",
        inputClass: "col-10 col-sm-5 m-auto my-3",
        labelClass: " text-center col-10 col-sm-5 m-auto",
        label: "Número de cuotas:",
        required: true,
    },
    {
        id: "IdVrCuotas",
        name: "vrCuotas",
        type: "text",
        inputClass: "col-10 col-sm-5 m-auto my-3",       
        labelClass: " text-center col-10 col-sm-5 m-auto",
        icon: "fa-solid fa-dollar-sign",
        errorMessage: "Por favor, ingrese un valor!!!",
        label: "Valor de cuota:",
        mask: CurrencyMask,
        required: true,
    }
]
