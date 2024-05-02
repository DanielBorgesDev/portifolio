import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedText: React.FC = () => {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["FULL STACK DEVELOPER", "TYPESCIPT EXPERT"], // Array de textos a serem digitados
      typeSpeed: 50, // Velocidade de digitação (em milissegundos)
      backSpeed: 50, // Velocidade de apagar (em milissegundos)
      loop: true, // Repetir a animação indefinidamente
      cursorChar: '<'
    });

    // Limpeza do Typed.js quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={typedRef}></div>;
};

export default TypedText;
