import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;

// Add these styles to globals.css
/*
.container {
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--surface);
  border-radius: 1rem;
  box-shadow: var(--shadow);
  margin-top: 2rem;
}
*/ 