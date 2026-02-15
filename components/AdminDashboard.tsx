
import React, { useState } from 'react';
import { PortfolioItem, SiteSettings } from '../types';
import { 
  X, Plus, Trash2, Edit3, Image as ImageIcon, 
  Save, Layout, Globe, ArrowLeft, CheckCircle2 
} from 'lucide-react';

interface AdminDashboardProps {
  items: PortfolioItem[];
  settings: SiteSettings;
  onAddItem: (item: Omit<PortfolioItem, 'id'>) => void;
  onUpdateItem: (item: PortfolioItem) => void;
  onDeleteItem: (id: string) => void;
  onUpdateSettings: (settings: SiteSettings) => void;
  onExit: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  items, settings, onAddItem, onUpdateItem, onDeleteItem, onUpdateSettings, onExit
}) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'settings'>('posts');
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Forms states
  const [newItem, setNewItem] = useState<Omit<PortfolioItem, 'id'>>({
    title: '', category: '', description: '', imageUrl: '', featured: false
  });
  const [tempSettings, setTempSettings] = useState<SiteSettings>(settings);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSaveSettings = () => {
    onUpdateSettings(tempSettings);
    triggerToast();
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem({ title: '', category: '', description: '', imageUrl: '', featured: false });
    setIsAdding(false);
    triggerToast();
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      onUpdateItem(editingItem);
      setEditingItem(null);
      triggerToast();
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-12 right-12 bg-black text-white px-6 py-4 flex items-center gap-3 z-[100] animate-bounce shadow-2xl">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-xs uppercase tracking-widest">Changes Saved Successfully</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-black pb-8">
        <div>
          <h1 className="text-4xl editorial-font mb-2">Workspace</h1>
          <p className="text-xs uppercase tracking-[0.3em] opacity-40">Manage your archive and site identity</p>
        </div>
        <button 
          onClick={onExit}
          className="flex items-center gap-2 text-xs uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> View Site
        </button>
      </div>

      <div className="flex gap-12 mb-12 border-b border-black/10">
        <button 
          onClick={() => setActiveTab('posts')}
          className={`pb-4 text-xs uppercase tracking-[0.2em] transition-all border-b-2 ${
            activeTab === 'posts' ? 'border-black opacity-100' : 'border-transparent opacity-30 hover:opacity-60'
          }`}
        >
          Portfolio Management
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          className={`pb-4 text-xs uppercase tracking-[0.2em] transition-all border-b-2 ${
            activeTab === 'settings' ? 'border-black opacity-100' : 'border-transparent opacity-30 hover:opacity-60'
          }`}
        >
          Site Customization
        </button>
      </div>

      {activeTab === 'posts' ? (
        <div className="space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl editorial-font">Current Archive ({items.length})</h2>
            <button 
              onClick={() => setIsAdding(true)}
              className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(item => (
              <div key={item.id} className="border border-black/5 p-6 group">
                <div className="aspect-[4/3] bg-gray-100 mb-6 relative overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => setEditingItem(item)}
                      className="bg-white p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Edit3 className="w-5 h-5 text-black" />
                    </button>
                    <button 
                      onClick={() => {
                        if(confirm('Confirm delete item?')) onDeleteItem(item.id);
                      }}
                      className="bg-white p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl space-y-12 pb-24">
          <div className="space-y-6">
            <label className="block text-xs uppercase tracking-[0.2em] font-bold">Site Title</label>
            <input 
              type="text" 
              value={tempSettings.siteTitle}
              onChange={e => setTempSettings({...tempSettings, siteTitle: e.target.value})}
              className="w-full border-b border-black py-4 text-2xl font-light focus:outline-none"
            />
          </div>

          <div className="space-y-6">
            <label className="block text-xs uppercase tracking-[0.2em] font-bold">Hero Statement</label>
            <textarea 
              rows={3}
              value={tempSettings.heroText}
              onChange={e => setTempSettings({...tempSettings, heroText: e.target.value})}
              className="w-full border border-black p-6 editorial-font text-2xl focus:outline-none bg-transparent"
            />
          </div>

          <div className="space-y-6">
            <label className="block text-xs uppercase tracking-[0.2em] font-bold">About Description</label>
            <textarea 
              rows={6}
              value={tempSettings.aboutText}
              onChange={e => setTempSettings({...tempSettings, aboutText: e.target.value})}
              className="w-full border border-black p-6 text-sm leading-relaxed focus:outline-none bg-transparent"
            />
          </div>

          <div className="space-y-6">
            <label className="block text-xs uppercase tracking-[0.2em] font-bold">Studio Contact Email</label>
            <input 
              type="email" 
              value={tempSettings.contactEmail}
              onChange={e => setTempSettings({...tempSettings, contactEmail: e.target.value})}
              className="w-full border-b border-black py-4 text-lg font-light focus:outline-none"
            />
          </div>

          <button 
            onClick={handleSaveSettings}
            className="w-full bg-black text-white py-6 text-xs uppercase tracking-[0.3em] hover:opacity-80 transition-opacity flex items-center justify-center gap-3"
          >
            <Save className="w-4 h-4" /> Commit Changes
          </button>
        </div>
      )}

      {/* Item Modals */}
      {(isAdding || editingItem) && (
        <div className="fixed inset-0 bg-white z-[60] overflow-y-auto px-6 py-12 md:p-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl editorial-font">{isAdding ? 'Archive New Work' : 'Refine Work'}</h2>
              <button 
                onClick={() => { setIsAdding(false); setEditingItem(null); }}
                className="hover:rotate-90 transition-transform"
              >
                <X className="w-10 h-10" />
              </button>
            </div>

            <form onSubmit={isAdding ? handleAddSubmit : handleEditSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <label className="block text-xs uppercase tracking-widest font-bold">Title</label>
                  <input 
                    required
                    type="text" 
                    value={isAdding ? newItem.title : editingItem?.title}
                    onChange={e => isAdding ? setNewItem({...newItem, title: e.target.value}) : setEditingItem({...editingItem!, title: e.target.value})}
                    className="w-full border-b border-black py-3 focus:outline-none"
                    placeholder="Enter project title..."
                  />
                </div>
                <div className="space-y-6">
                  <label className="block text-xs uppercase tracking-widest font-bold">Category</label>
                  <input 
                    required
                    type="text" 
                    value={isAdding ? newItem.category : editingItem?.category}
                    onChange={e => isAdding ? setNewItem({...newItem, category: e.target.value}) : setEditingItem({...editingItem!, category: e.target.value})}
                    className="w-full border-b border-black py-3 focus:outline-none"
                    placeholder="Editorial, Lookbook, etc..."
                  />
                </div>
              </div>

              <div className="space-y-6">
                <label className="block text-xs uppercase tracking-widest font-bold">Image URL (Unsplash)</label>
                <div className="flex gap-4 items-center">
                  <ImageIcon className="w-6 h-6 opacity-40" />
                  <input 
                    required
                    type="url" 
                    value={isAdding ? newItem.imageUrl : editingItem?.imageUrl}
                    onChange={e => isAdding ? setNewItem({...newItem, imageUrl: e.target.value}) : setEditingItem({...editingItem!, imageUrl: e.target.value})}
                    className="flex-grow border-b border-black py-3 focus:outline-none font-mono text-xs"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
                {(isAdding ? newItem.imageUrl : editingItem?.imageUrl) && (
                  <div className="mt-4 aspect-video bg-gray-50 overflow-hidden">
                    <img 
                      src={isAdding ? newItem.imageUrl : editingItem?.imageUrl} 
                      className="w-full h-full object-cover" 
                      alt="Preview"
                      onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Invalid+Image+URL')}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <label className="block text-xs uppercase tracking-widest font-bold">Narrative / Description</label>
                <textarea 
                  required
                  rows={4}
                  value={isAdding ? newItem.description : editingItem?.description}
                  onChange={e => isAdding ? setNewItem({...newItem, description: e.target.value}) : setEditingItem({...editingItem!, description: e.target.value})}
                  className="w-full border border-black p-6 text-sm focus:outline-none bg-transparent"
                  placeholder="Describe the essence of this work..."
                />
              </div>

              <div className="pt-12 border-t border-black/10">
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-6 text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Save className="w-4 h-4" /> {isAdding ? 'Archive to Collection' : 'Update Documentation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
