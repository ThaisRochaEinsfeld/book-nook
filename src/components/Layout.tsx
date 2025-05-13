import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-16 mb-16 p-4 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
