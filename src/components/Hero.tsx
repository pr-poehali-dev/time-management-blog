import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSubscribe = () => {
    const element = document.getElementById('subscribe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Управляй временем,<br />не позволяй ему управлять тобой
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Практические инструменты и проверенные методики для эффективного использования времени в реальной жизни
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={scrollToSubscribe} className="gap-2">
            <Icon name="Bell" size={20} />
            Подписаться на рассылку
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('methods')?.scrollIntoView({ behavior: 'smooth' })} className="gap-2">
            <Icon name="BookOpen" size={20} />
            Изучить методики
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
