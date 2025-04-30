export const ENDPOINTS = {
    USERS: {
        LIST: "/admin/usuarios",
        ADD: "/admin/usuarios/novo",
        EDIT: (id: string) => `/admin/usuarios/${id}/editar`,
    },
    PROFESSIONALS: {
        ID: "/professionals"
    }
}