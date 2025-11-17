import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const methods = [
  {
    icon: 'Timer',
    title: 'Метод Pomodoro',
    description: '25 минут работы, 5 минут отдыха',
    details: 'Техника разделения работы на интервалы с короткими перерывами для повышения концентрации и продуктивности.'
  },
  {
    icon: 'Grid2x2',
    title: 'Матрица Эйзенхауэра',
    description: 'Приоритизация по срочности и важности',
    details: 'Распределение задач на 4 квадранта: срочно-важно, важно-несрочно, срочно-неважно, несрочно-неважно.'
  },
  {
    icon: 'ListChecks',
    title: 'Getting Things Done',
    description: 'Система GTD для контроля задач',
    details: 'Методика Дэвида Аллена для организации всех дел и проектов с минимальным стрессом и максимальной эффективностью.'
  },
  {
    icon: 'Target',
    title: 'Правило двух минут',
    description: 'Делай сразу, если займет меньше 2 минут',
    details: 'Простое правило: если задача требует меньше двух минут, выполняй её немедленно, не откладывая.'
  },
  {
    icon: 'Zap',
    title: 'Метод "Съешь лягушку"',
    description: 'Начинай день со сложной задачи',
    details: 'Выполняй самую неприятную или сложную задачу с утра, и остаток дня будет легче и продуктивнее.'
  },
  {
    icon: 'Calendar',
    title: 'Time Blocking',
    description: 'Блокирование времени в календаре',
    details: 'Планирование дня блоками времени для конкретных задач, защита от отвлечений и многозадачности.'
  }
];

const Methods = () => {
  return (
    <section id="methods" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные методики</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Проверенные временем техники управления временем, которые работают в реальной жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={method.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-base">{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{method.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;
