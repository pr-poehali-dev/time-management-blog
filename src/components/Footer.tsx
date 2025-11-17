import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Clock" size={24} className="text-primary" />
              <h3 className="font-bold text-lg">ТаймМастер</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Блог о тайм-менеджменте: теория и практика в реальной жизни
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              </li>
              <li>
                <a href="#methods" className="hover:text-primary transition-colors">Методики</a>
              </li>
              <li>
                <a href="#articles" className="hover:text-primary transition-colors">Статьи</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Связь</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#subscribe" className="hover:text-primary transition-colors">Подписка</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" size={20} className="text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Mail" size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ТаймМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
