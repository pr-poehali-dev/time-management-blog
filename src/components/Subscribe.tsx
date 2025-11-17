import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Спасибо за подписку!',
      description: 'Мы отправим вам письмо с подтверждением',
    });

    setEmail('');
    setName('');
  };

  return (
    <section id="subscribe" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <Card className="animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
            <CardTitle className="text-3xl">Подпишитесь на рассылку</CardTitle>
            <CardDescription className="text-base">
              Получайте свежие статьи, практические советы и эксклюзивные материалы о тайм-менеджменте раз в неделю
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Icon name="Send" size={20} />
                Подписаться
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Мы уважаем вашу конфиденциальность и не передаём данные третьим лицам
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Subscribe;
