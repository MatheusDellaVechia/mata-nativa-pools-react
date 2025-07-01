
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', name: 'Início' },
    { id: 'tobogans', name: 'Tobogãs' },
    { id: 'pools', name: 'Piscinas' },
    { id: 'kids', name: 'Área Infantil' },
    { id: 'nature', name: 'Natureza & Aventuras' },
    { id: 'tickets', name: 'Ingressos' }
  ];

  return (
    <header className="bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* O container agora só define o tamanho */}
          <div className="w-10 h-10">
            <img 
              src="../../logo.jpeg" 
              alt="Logo"
              // As classes de estilo são aplicadas diretamente na imagem
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          <h1 className="text-white font-bold text-xl">Mata Nativa</h1>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-white text-cyan-600 font-semibold'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm rounded-lg mb-4 p-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-white text-cyan-600 font-semibold'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
