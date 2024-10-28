// Definimos una interfaz para el servicio de usuario
interface IUserService {
    getUserById(id: number): User | undefined;
    getAllUsers(): User[];
}

// Tipo para representar un usuario
type User = {
    id: number;
    name: string;
    role: string;
};

// Clase concreta que implementa el servicio de usuario
class UserService implements IUserService {
    private users: User[] = [
        { id: 1, name: 'Gabriel', role: 'admin' },
        { id: 2, name: 'Luna', role: 'user' },
    ];

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getAllUsers(): User[] {
        return this.users;
    }
}

// Función para crear el proxy
function createUserServiceProxy(userService: IUserService, currentUser: User): IUserService {
    return new Proxy(userService, {
        get(target, propKey: keyof IUserService) {
            // Verificamos si el método solicitado es getAllUsers y si el usuario es admin
            if (propKey === 'getAllUsers' && currentUser.role !== 'admin') {
                throw new Error('Acceso denegado: solo los administradores pueden ver todos los usuarios.');
            }

            // Retorna la propiedad o método solicitado
            return target[propKey];
        }
    });
}

// Uso del proxy en TypeScript
const userService = new UserService();

// Usuario actual sin permisos de admin
const currentUser: User = { id: 3, name: 'Usuario', role: 'user' };

// Creamos el proxy
const proxy = createUserServiceProxy(userService, currentUser);

try {
    // Intentamos acceder a todos los usuarios
    console.log(proxy.getAllUsers()); // Error: Acceso denegado
} catch (error) {
    console.error(error.message); // "Acceso denegado: solo los administradores pueden ver todos los usuarios."
}

// Acceso permitido a métodos no restringidos
console.log(proxy.getUserById(1)); // { id: 1, name: 'Gabriel', role: 'admin' }
