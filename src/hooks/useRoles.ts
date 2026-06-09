// hooks/useRoles.ts

import { useAuth } from "../context/AuthContext";

export const ROLES = {
    SUPER_ADMIN: 1,
    ADMIN: 2,
    SUPERVISOR: 3,
    CLIENTE: 4,
    INVITADO: 5,
} as const;

export const useRoles = () => {
    const { user } = useAuth();

    return {
        user,

        role: user?.role,

        isSuperAdmin: user?.role === ROLES.SUPER_ADMIN,

        isAdmin: user?.role === ROLES.ADMIN,

        isSupervisor: user?.role === ROLES.SUPERVISOR,

        isCliente: user?.role === ROLES.CLIENTE,

        isInvitado: user?.role === ROLES.INVITADO,

        isLogged: !!user,

        hasRole: (...roles: number[]) =>
            roles.includes(user?.role ?? 0),
    };
};