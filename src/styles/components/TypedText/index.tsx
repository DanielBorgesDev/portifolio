import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedText: React.FC = () => {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["FULL STACK DEVELOPER", "TYPESCIPT EXPERT"], 
      typeSpeed: 50, 
      backSpeed: 50, 
      loop: true, 
      cursorChar: '<'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={typedRef}></div>;
};

export default TypedText;
