import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы или предложения? Мы всегда рады обратной связи
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Заполните форму и мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Email</CardTitle>
                    <CardDescription>info@timemaster.ru</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Telegram</CardTitle>
                    <CardDescription>@timemaster_blog</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Globe" size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Соцсети</CardTitle>
                    <CardDescription>Следите за нами в VK и Instagram</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
