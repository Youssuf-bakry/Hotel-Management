import { useEffect, useRef } from "react";

function useClickOutside(handler) {
  // const { openName, close } = useContext(ModalContext);
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // console.log("clicked out");
        handler();
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => removeEventListener("click", handleClick, true);
  }, [handler]);

  return ref;
}

export default useClickOutside;
