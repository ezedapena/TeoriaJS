
// El patrón de High Order Component (HOC) es una técnica de composición en React
// que se utiliza para reutilizar la lógica de componentes y compartir funcionalidades entre diferentes partes de una aplicación.
// Un HOC es una función que toma un componente y devuelve un nuevo componente con alguna funcionalidad adicional.

import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} mounted.`);
      return () => {
        console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} updated. Props:`, props);
    });

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithLogger;
};

export default withLogger;
