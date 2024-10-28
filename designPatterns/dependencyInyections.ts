// Ejemplo de cómo NO aplicar el patrón de inyección de dependencias

// Definimos una interfaz para el servicio de usuario
interface IUserServiceDI {
    getUser(): Promise<UserDI>;
}

// Tipo de datos de usuario
interface UserDI {
    id: number;
    name: string;
    email: string;
};

// Implementación concreta del servicio de usuario
class UserServiceDI implements IUserServiceDI {
    async getUser(): Promise<UserDI> {
        // Simulación de obtención de datos de un usuario
        return {
            id: 1,
            name: 'Gabriel',
            email: 'gabriel@example.com'
        };
    }
}

// Clase UserProfile sin inyección de dependencias (enfoque incorrecto)
class UserProfileWithoutDI {
    private userService: UserServiceDI;

    constructor() {
        // Problema: UserProfile crea su propia instancia de UserServiceDI,
        // generando un acoplamiento fuerte con UserServiceDI.
        this.userService = new UserServiceDI();
    }

    async displayUserInfo(): Promise<void> {
        const user = await this.userService.getUser();
        console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    }
}

// Ejemplo de uso del código sin inyección de dependencias
const userProfileWithoutDI = new UserProfileWithoutDI();
userProfileWithoutDI.displayUserInfo(); // Resultado esperado, pero con problemas de acoplamiento

/*
Problemas del enfoque sin inyección de dependencias:
1. Acoplamiento fuerte: UserProfileWithoutDI depende directamente de UserServiceDI,
   dificultando la sustitución del servicio por otra implementación (por ejemplo, un mock).
2. Falta de flexibilidad: No podemos cambiar fácilmente la fuente de datos.
3. Dificultad para pruebas: En un entorno de pruebas, no podemos inyectar un servicio de prueba.

A continuación, aplicaremos la inyección de dependencias para resolver estos problemas.
*/

// Clase UserProfile con inyección de dependencias (enfoque correcto)
class UserProfileWithDI {
    private userService: IUserServiceDI;

    // Constructor que recibe una instancia de IUserService
    // Esto permite inyectar cualquier clase que implemente IUserService, mejorando la flexibilidad.
    constructor(userService: IUserServiceDI) {
        this.userService = userService;
    }

    async displayUserInfo(): Promise<void> {
        const user = await this.userService.getUser();
        console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    }
}

// Ejemplo de uso del código con inyección de dependencias
const userServiceDI = new UserServiceDI(); // Creamos la instancia del servicio
const userProfileWithDI = new UserProfileWithDI(userServiceDI); // Inyectamos el servicio en UserProfileWithDI
userProfileWithDI.displayUserInfo(); // Muestra los datos del usuario como antes

/*
Ventajas de usar el patrón de inyección de dependencias:
1. Desacoplamiento: UserProfileWithDI depende de IUserService, no de UserService directamente,
   permitiendo usar cualquier implementación de IUserService.
2. Flexibilidad: Podemos cambiar la fuente de datos (por ejemplo, usar un servicio de prueba)
   sin modificar UserProfileWithDI.
3. Facilidad para pruebas: En un entorno de pruebas, podemos inyectar un servicio mock o de prueba
   en lugar de la implementación real, aislando UserProfileWithDI de dependencias externas.
*/
