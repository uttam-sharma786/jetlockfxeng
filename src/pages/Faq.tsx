import React, { useState, useCallback, useMemo } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { useTranslation } from "react-i18next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AccordionItem {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly category?: string;
}

interface AccordionProps {
  readonly items?: readonly AccordionItem[];
  readonly allowMultiple?: boolean;
  readonly defaultOpenItems?: readonly string[];
  readonly searchable?: boolean;
  readonly className?: string;
  readonly onItemToggle?: (itemId: string, isOpen: boolean) => void;
}

const DEFAULT_ITEMS: readonly AccordionItem[] = [
  {
    id: '1',
    title: 'What is JetLock FX?',
    content: 'JetLock FX is a digital platform where travelers can compare local cash exchange rates, reserve their preferred rate, and locate the best nearby currency exchange bureau — saving time and money while traveling.',
    category: 'General'
  },
  {
    id: '2',
    title: 'Is JetLock FX live?',
    content: 'Yes, we\'re currently operating a lean MVP in Baja Mexico and Southern California. The platform is functional and accepting early users and partners.',
    category: 'General'
  },
  {
    id: '3',
    title: 'Which cities will JetLock FX launch in next?',
    content: 'We\'re expanding based on tourist and border traffic. Next targets include: Arizona and Texas, Miami Florida, CDMX (Mexico City), and Bogotá Colombia.',
    category: 'Expansion'
  },
  {
    id: '4',
    title: 'Do I pay through the JetLock FX app?',
    content: 'No. All transactions are completed in person at the selected currency exchange bureau. We facilitate the reservation and rate-locking experience — similar to how Kayak or OpenTable works.',
    category: 'Payment'
  },
  {
    id: '5',
    title: 'Is JetLock FX a financial institution?',
    content: 'No. JetLock FX does not handle or move money. We are a marketplace and discovery tool for travelers to find the best cash exchange options near them.',
    category: 'Legal'
  },
  {
    id: '6',
    title: 'How does JetLock FX choose which exchange bureaus to show?',
    content: 'We display registered, verified bureaus and their rates based on: Distance (geolocation), Rate competitiveness, Business hours and availability, and Customer reviews and feedback (future feature).',
    category: 'Features'
  }
] as const;

const Accordion: React.FC<AccordionProps> = ({ 
  items = DEFAULT_ITEMS, 
  allowMultiple = false,
  defaultOpenItems = [],
  searchable = false,
  className = '',
  onItemToggle
}) => {
  const { t } = useTranslation();
  
  const [openItems, setOpenItems] = useState<Set<string>>(
    () => new Set(defaultOpenItems)
  );
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      const isCurrentlyOpen = newOpenItems.has(itemId);
      
      if (isCurrentlyOpen) {
        newOpenItems.delete(itemId);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }
      
      onItemToggle?.(itemId, !isCurrentlyOpen);
      return newOpenItems;
    });
  }, [allowMultiple, onItemToggle]);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return items.filter(item => 
      item.title.toLowerCase().includes(lowercaseSearch) ||
      item.content.toLowerCase().includes(lowercaseSearch) ||
      item.category?.toLowerCase().includes(lowercaseSearch)
    );
  }, [items, searchTerm]);

  const isOpen = useCallback((itemId: string) => openItems.has(itemId), [openItems]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, itemId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(itemId);
    }
  }, [toggleItem]);

  return (
    <div className={`max-w-4xl mx-auto p-6 ${className}`} role="region" aria-label="FAQ Section">
     <Header />
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-gray-900">
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('faq.description', 'Find answers to common questions about JetLock FX. Can\'t find what you\'re looking for? Contact our support team.')}
        </p>
      </header>

      {/* Search */}
      {searchable && (
        <div className="mb-6">
          <div className="relative">
            <label htmlFor="faq-search" className="sr-only">
              {t('faq.searchLabel', 'Search frequently asked questions')}
            </label>
            <input
              id="faq-search"
              type="text"
              placeholder={t('faq.searchPlaceholder', 'Search FAQs...')}
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-colors duration-200
                       invalid:border-red-500 invalid:ring-red-500"
              aria-describedby={searchTerm ? "search-results" : undefined}
            />
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              aria-hidden="true" 
            />
          </div>
        </div>
      )}

      {/* Results count */}
      {searchTerm && (
        <div id="search-results" className="mb-4 text-sm text-gray-600" role="status" aria-live="polite">
          {t('faq.resultsCount', '{{count}} result{{plural}} found', { 
            count: filteredItems.length,
            plural: filteredItems.length !== 1 ? 's' : ''
          })}
        </div>
      )}

      {/* Accordion Items */}
      <div className="space-y-3" role="group" aria-label="FAQ Items">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12" role="status">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t('faq.noResults', 'No results found')}
            </h3>
            <p className="text-gray-600">
              {t('faq.noResultsDescription', 'Try adjusting your search terms or browse all questions.')}
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="border border-gray-200 rounded-xl overflow-hidden 
                         shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 
                         focus:bg-gray-50 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2
                         transition-colors duration-200 ease-in-out
                         group"
                aria-expanded={isOpen(item.id)}
                aria-controls={`panel-${item.id}`}
                id={`button-${item.id}`}
                type="button"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 
                                   group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    {item.category && (
                      <span className="inline-block mt-1 px-2 py-1 text-xs 
                                     bg-blue-100 text-blue-800 rounded-full">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transform transition-transform 
                               duration-200 ease-in-out flex-shrink-0 mt-1 ${
                      isOpen(item.id) ? 'rotate-180 text-blue-600' : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
              
              <div 
                id={`panel-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={!isOpen(item.id)}
                role="region"
                aria-labelledby={`button-${item.id}`}
              >
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Support Section */}
      <footer className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          {t('faq.stillHaveQuestions', 'Still have questions?')}
        </p>
        <button 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 
                   text-white rounded-lg hover:bg-blue-700 focus:ring-2 
                   focus:ring-blue-500 focus:ring-offset-2 transition-colors 
                   duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={t('faq.contactSupportLabel', 'Contact our support team')}
        >
          <HelpCircle className="w-5 h-5" aria-hidden="true" />
          {t('faq.contactSupport', 'Contact Support')}
        </button>
      </footer>
      <Footer />
    </div>
  );
};

export default Accordion;