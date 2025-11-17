import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const articles = [
  {
    slug: 'procrastination',
    title: 'Как победить прокрастинацию: 7 практических советов',
    excerpt: 'Разбираем причины откладывания дел и эффективные способы борьбы с этой привычкой на основе научных исследований.',
    category: 'Практика',
    readTime: '5 мин',
    date: '15 ноября 2024'
  },
  {
    slug: 'pomodoro',
    title: 'Pomodoro на практике: мой опыт за 30 дней',
    excerpt: 'Личный эксперимент с техникой Pomodoro, ошибки новичков и как адаптировать методику под свой ритм жизни.',
    category: 'Опыт',
    readTime: '7 мин',
    date: '10 ноября 2024'
  },
  {
    slug: 'planning',
    title: 'Планирование недели: система, которая реально работает',
    excerpt: 'Пошаговый алгоритм еженедельного планирования с шаблонами и примерами для разных типов задач.',
    category: 'Методика',
    readTime: '6 мин',
    date: '5 ноября 2024'
  },
  {
    slug: 'work-life-balance',
    title: 'Баланс работы и жизни: миф или реальность?',
    excerpt: 'Честный разговор о work-life balance, почему классические советы не работают и что делать вместо этого.',
    category: 'Размышления',
    readTime: '8 мин',
    date: '1 ноября 2024'
  }
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <section id="articles" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Последние статьи</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные истории, практические советы и глубокий анализ методик тайм-менеджмента
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/article/${article.slug}`)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {article.date}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-snug">{article.title}</CardTitle>
                <CardDescription className="text-base">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary hover:underline flex items-center gap-2 font-medium">
                  Читать полностью
                  <Icon name="ArrowRight" size={16} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;