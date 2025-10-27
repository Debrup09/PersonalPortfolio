
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
        {icon && <span className="mr-3">{icon}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
};
