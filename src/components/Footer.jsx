import React from "react";

export const Footer = () => {
  return (
    <div className="bottom-0 inset-x-0">
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright &copy; {new Date().getFullYear()} - Todo App (Made with ❤️ by Bhupinder Bhattarai)</p>
        </div>
      </footer>
    </div>
  );
};
