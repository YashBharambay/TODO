import React, { useState, useEffect } from "react";

function useThemeSwitcher() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  return (


   
    <div className="position">     
     <label className="switch cursor-pointer">
          <input 
          type="checkbox"
          onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))} />
          <span class="slider round"></span>
        </label>
        </div>  



    
  );
}

export default useThemeSwitcher;
