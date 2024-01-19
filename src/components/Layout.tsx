
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="mx-auto md:px-4 md:max-w-3xl min-h-screen">
        {children}
      </div>
    );
  };
  
