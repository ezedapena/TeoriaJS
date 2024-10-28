
// La inyección de dependencias es un patrón de diseño en el que las dependencias de un componente se pasan como argumentos externos en lugar de crearlas internamente.
// En el contexto de React, esto significa que en lugar de que un componente cree sus propias dependencias, estas se proporcionan desde fuera, generalmente a través de props.


// componente que obtiene los datos

import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

export const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Aquí se podría realizar una solicitud a una API para obtener los datos del usuario
    // y luego establecer los datos del usuario en el estado
    const fetchData = async () => {
      const response = await fetch('https://example.com/api/user');
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <UserProfile userData={userData} />
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

// componente presentacional al que se le inyectan las dependencias

export const UserProfile = ({ userData }) => {
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        {/* Otros detalles del usuario */}
      </div>
    );
  };
