
import React, { useState, useEffect } from 'react';
import { PortfolioItem, SiteSettings, ViewMode, Section } from './types';
import { INITIAL_ITEMS, INITIAL_SETTINGS } from './constants';
import Header from './components/Header';
import Landing from './components/Landing';
import PortfolioGrid from './components/PortfolioGrid';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('public');
  const [currentSection, setCurrentSection] = useState<Section>('main');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  
  const [items, setItems] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('archive_items');
    return saved ? JSON.parse(saved) : INITIAL_ITEMS;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('archive_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('archive_items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('archive_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection, viewMode, selectedProject]);

  const handleProjectSelect = (item: PortfolioItem) => {
    setSelectedProject(item);
    setCurrentSection('detail');
  };

  const handleAddItem = (item: Omit<PortfolioItem, 'id'>) => {
    const newItem = { ...item, id: Date.now().toString() };
    setItems([newItem, ...items]);
  };

  const handleUpdateItem = (updatedItem: PortfolioItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const renderContent = () => {
    if (viewMode === 'admin') {
      return (
        <AdminDashboard 
          items={items} 
          settings={settings} 
          onAddItem={handleAddItem}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
          onUpdateSettings={setSettings}
          onExit={() => setViewMode('public')}
        />
      );
    }

    switch (currentSection) {
      case 'main':
        return <Landing />;
      case 'about':
        return <About text={settings.aboutText} />;
      case 'contact':
        return <Contact email={settings.contactEmail} />;
      case 'detail':
        return selectedProject ? (
          <ProjectDetail 
            item={selectedProject} 
            onBack={() => setCurrentSection('work')} 
          />
        ) : <Landing />;
      case 'work':
      default:
        return (
          <PortfolioGrid 
            items={items} 
            onSelect={handleProjectSelect} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {viewMode === 'public' && (
        <Header 
          siteTitle={settings.siteTitle} 
          currentSection={currentSection === 'detail' ? 'work' : currentSection as any}
          onNavigate={(s) => {
            setCurrentSection(s);
            setSelectedProject(null);
          }}
        />
      )}
      
      <main className={`flex-grow ${currentSection === 'main' ? '' : 'pt-24 pb-12 px-6 md:px-12 lg:px-24'}`}>
        {renderContent()}
      </main>

      {viewMode === 'public' && currentSection !== 'main' && (
        <Footer 
          onAdminClick={() => setViewMode('admin')} 
          email={settings.contactEmail}
          siteTitle={settings.siteTitle}
        />
      )}
    </div>
  );
};

export default App;
