import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, description, breadcrumbs = [] }) => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primery/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
       {/* {breadcrumbs.map((crumb, index) => (
  <React.Fragment key={index}>
    <span className="text-gray-400">/</span>
    {index === breadcrumbs.length - 1 ? (
      <span className="text-primery font-medium">{crumb.label}</span>
    ) : (
      <Link to={crumb.href} className="hover:text-primery transition-colors duration-200">
        {crumb.label}
      </Link>
    )}
  </React.Fragment>
))} */}

        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;