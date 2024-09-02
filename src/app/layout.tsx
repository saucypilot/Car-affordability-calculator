// layout.tsx
import React from 'react';
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html>
      {children}
    </html>
  );
};

export default Layout;