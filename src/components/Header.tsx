import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={24} className="text-primary" />
            <h1 className="text-xl font-bold">ТаймМастер</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('methods')} className="text-foreground hover:text-primary transition-colors">
              Методики
            </button>
            <button onClick={() => scrollToSection('articles')} className="text-foreground hover:text-primary transition-colors">
              Статьи
            </button>
            <button onClick={() => scrollToSection('subscribe')} className="text-foreground hover:text-primary transition-colors">
              Подписка
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('methods')} className="text-left text-foreground hover:text-primary transition-colors">
              Методики
            </button>
            <button onClick={() => scrollToSection('articles')} className="text-left text-foreground hover:text-primary transition-colors">
              Статьи
            </button>
            <button onClick={() => scrollToSection('subscribe')} className="text-left text-foreground hover:text-primary transition-colors">
              Подписка
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
