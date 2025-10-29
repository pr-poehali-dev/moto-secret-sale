import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Скоро мы свяжемся с вами и раскроем тайну коробки.",
    });
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/e5600823-bd71-4505-8e44-17a6196bebda/files/81af095e-5fae-4b4b-8ec0-7c7264854a53.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-10" />
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="mb-12 animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-lg animate-pulse-glow mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 text-6xl space-x-4 animate-float">
                  <span>❓</span>
                  <span>❓</span>
                  <span>❓</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Мы не можем сказать,<br />что внутри
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Но гарантируем, что ты точно<br />останешься в плюсе
            </p>
            
            <div className="inline-flex items-center justify-center gap-2 bg-secondary/20 backdrop-blur-md px-8 py-6 rounded-xl border-2 border-secondary animate-pulse-glow">
              <Icon name="Tag" className="w-8 h-8 text-secondary" />
              <span className="text-5xl font-bold text-foreground">499 000 ₽</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <Icon name="Award" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Проверенный бренд</h3>
              <p className="text-muted-foreground text-sm">Известный производитель с мировым именем</p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <Icon name="Zap" className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Надёжный двигатель</h3>
              <p className="text-muted-foreground text-sm">Мощность и долговечность гарантированы</p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <Icon name="Shield" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Гарантия производителя</h3>
              <p className="text-muted-foreground text-sm">Официальная защита вашей покупки</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/e5600823-bd71-4505-8e44-17a6196bebda/files/c27e495b-7d9f-421f-9f71-628c6a663d71.jpg)',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
        
        <div className="container mx-auto px-4 z-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                Мы не можем назвать<br />её публично
              </h2>
              <p className="text-xl text-secondary mb-8 font-semibold animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Потому что конкуренты заплачут 😢
              </p>
              
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Эксклюзив на грани фола</h3>
                    <p className="text-muted-foreground">
                      Такого мотора еще нет ни у одного соседа по гаражу. Ни в одном инстаграме. Ни на одной улице.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Rocket" className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Форсаж в коробке</h3>
                    <p className="text-muted-foreground">
                      Это не просто техника. Это готовый сценарий для твоего следующего лета.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/e5600823-bd71-4505-8e44-17a6196bebda/files/c27e495b-7d9f-421f-9f71-628c6a663d71.jpg"
                  alt="Mystery Bike"
                  className="relative rounded-xl border-2 border-primary/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/e5600823-bd71-4505-8e44-17a6196bebda/files/0ae767e8-a6d1-4160-8b2e-85fba9f1ea86.jpg)',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Мы засунули в эту<br />черную коробку<br />кое-что особенное
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Что может перевернуть твое представление о мототехнике.
                </p>
                <div className="space-y-2 text-lg">
                  <p className="flex items-center gap-2">
                    <Icon name="Lock" className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Модель — <span className="text-foreground font-semibold">секрет</span></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Lock" className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Характеристики — <span className="text-foreground font-semibold">засекречены</span></span>
                  </p>
                </div>
              </div>
              
              <Card className="p-8 bg-card/90 backdrop-blur-md border-2 border-primary/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                    <Icon name="Gift" className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Узнай первым!</h3>
                  <p className="text-muted-foreground">Оставь контакты и получи эксклюзивную информацию</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Ваше имя</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1 bg-input border-border text-foreground"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-1 bg-input border-border text-foreground"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  >
                    <Icon name="PackageOpen" className="w-5 h-5 mr-2" />
                    Хочу узнать, что в коробке!
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-8 border-t border-border/50 z-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Mystery Moto. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
