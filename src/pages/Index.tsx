import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Products from "@/components/Products";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Experience/>
        <Products />
        <Stats/>
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
