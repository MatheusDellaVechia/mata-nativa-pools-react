
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/sections/HomePage';
import TobogansPage from '../components/sections/TobogansPage';
import PoolsPage from '../components/sections/PoolsPage';
import KidsPage from '../components/sections/KidsPage';
import NaturePage from '../components/sections/NaturePage';
import TicketsPage from '../components/sections/TicketsPage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'tobogans':
        return <TobogansPage />;
      case 'pools':
        return <PoolsPage />;
      case 'kids':
        return <KidsPage />;
      case 'nature':
        return <NaturePage />;
      case 'tickets':
        return <TicketsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
