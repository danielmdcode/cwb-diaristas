export const ENDPOINTS = {
    HOME: "/",
    USERS: {
        LIST: "/admin/usuarios",
        ADD: "/admin/usuarios/novo",
        EDIT: (id: string) => `/admin/usuarios/${id}/editar`,
    },
    PROFESSIONALS: {
        ID: "/professionals"
    },
    CHECKOUT: "/finalizar-agendamento"
}