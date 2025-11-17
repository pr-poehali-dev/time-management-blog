import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Methods from '@/components/Methods';
import Articles from '@/components/Articles';
import Subscribe from '@/components/Subscribe';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Methods />
        <Articles />
        <Subscribe />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
