import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  console.log('Current language in selector:', i18n.language);

  const changeLanguage = (lng: string) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    console.log('Current language after change:', i18n.language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-background hover:text-background/80">
          <Globe className="h-4 w-4 mr-2" />
          {i18n.language === 'es' ? 'ES' : 'EN'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border shadow-lg">
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="text-foreground hover:bg-muted">
          🇺🇸 {t('language.english')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('es')} className="text-foreground hover:bg-muted">
          🇪🇸 {t('language.spanish')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;