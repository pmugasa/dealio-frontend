import { useEffect, useRef } from "react";

function Drawer({ isOpen, children, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      drawerRef.current.style.display = "block";
    } else {
      document.body.style.overflow = "auto";
      drawerRef.current.style.display = "none";
    }
  }, [isOpen]);

  function handleTransitionEnd() {
    if (!isOpen) {
      drawerRef.current.style.display = "none";
    }
  }
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-medium-gray opacity-50"
          onClick={onClose}
        />
      )}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 w-3/5  bg-almost-white shadow-lg overflow-y-auto transform ${
          isOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
        } transition-all duration-300`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="p-6">{children}</div>
        <img
          src=""
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        />
      </div>
    </>
  );
}
export default Drawer;
