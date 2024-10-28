import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect sin array de dependencias
//   Sin un array de dependencias en un componente funcional de React,
//   significa que el efecto se ejecutará en cada renderizado del componente y en cada actualización del estado, sin importar si alguna de las dependencias ha cambiado. 
//   En otras palabras, el efecto se ejecutará en cada ciclo de renderización del componente.
    useEffect(() => {
        console.log('Efecto sin dependencias se ejecutó');
        // Esta lógica se ejecutará en cada renderizado
        return () => {
        console.log('Cleanup de efecto sin dependencias');
        };
    });

  // useEffect con array de dependencias vacío
//   el efecto se ejecutará solo una vez después del primer renderizado del componente,
//   similar al comportamiento de componentDidMount en componentes de clase. 
//   Esto significa que el efecto se ejecutará después de que el componente se monte en el DOM.
    useEffect(() => {
        console.log('Efecto con dependencias vacías se ejecutó');
        // Esta lógica se ejecutará solo una vez después del montaje
        return () => {
        console.log('Cleanup de efecto con dependencias vacías');
        };
    }, []);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ExampleComponent;
