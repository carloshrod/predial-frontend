export const usersHeadersProps = [
    { name: "#", field: "index", sortable: false },
    { name: "Nombre", field: "nombres", sortable: true, className: "pointer", dataFor: "toolTipSort" },
    { name: "Nro. Documento", field: "nro_doc", sortable: false },
    { name: "Email", field: "email", sortable: true, className: "d-none d-sm-table-cell pointer", dataFor: "toolTipSort" },
    { name: "Rol", field: "rol", sortable: false, className: "d-none d-sm-table-cell pointer", dataFor: "toolTipInfo" },
    { name: "" },
];

export const prediosHeadersProps = [
    { name: "#", field: "index", sortable: false },
    { name: "Código", field: "codigo", sortable: true, className: "pointer", dataFor: "toolTipSort" },
    { name: "Nombre Propietario", field: "nom_prop", sortable: true, className: "pointer", dataFor: "toolTipSort" },
    { name: "Doc. Propietario", field: "doc_prop", sortable: false, className: "d-none d-sm-table-cell" },
    { name: "Dirección", field: "direccion_predio", sortable: false, className: "d-none d-sm-table-cell" },
    { name: "" },
];

