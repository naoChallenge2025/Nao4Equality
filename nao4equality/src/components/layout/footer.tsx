
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-nao-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-xl font-bold">NAO4EQUALITY</h3>
          <p className="text-gray-400 text-center max-w-md">
            Un progetto innovativo per la NAO Challenge 2025 dell'associazione Uguali nello sport Giuliano Visini.
          </p>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/nao4equality/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
          
          <div className="border-t border-gray-800 w-full max-w-xs my-6 pt-6">
            <p className="text-sm text-gray-500 text-center">© 2025 Nao4Equality. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}