'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductModal from '@/components/ProductModal';

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, direction } = useLanguage();

  // Hero Slider Data
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=3000&h=600&fit=crop",
      link: "/category/fragrances",
      alt: t('hero_perfume')
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3000&h=600&fit=crop",
      link: "/category/makeup",
      alt: t('hero_makeup')
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=3000&h=600&fit=crop",
      link: "/category/eye-care",
      alt: t('hero_eyes')
    },
    {
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=3000&h=600&fit=crop",
      link: "/category/accessories",
      alt: t('hero_accessories')
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=3000&h=600&fit=crop",
      link: "/offers",
      alt: t('hero_offers')
    }
  ];

  // Sample Product Data
  const newArrivals = [
    {
      id: 1,
      name: "Water Lip Stain 7 ml",
      brand: "Clarins",
      price: "IQD 45,000",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=300&h=300&fit=crop",
      colors: ["#d02a36", "#d10712", "#991f2c"],
      link: "/product/359903"
    },
    {
      id: 2,
      name: "Skin Veil Compact Foundation",
      brand: "L'Oréal",
      price: "IQD 25,750",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=300&h=300&fit=crop",
      colors: ["#eebdb9", "#e4b69c"],
      link: "/product/359883"
    },
    {
      id: 3,
      name: "Joli Rouge Velvet Lips With Apricot Oil",
      brand: "Clarins",
      price: "IQD 68,000",
      image: "https://images.unsplash.com/photo-1631214540242-6b5b3e4b7e2e?q=80&w=300&h=300&fit=crop",
      colors: ["#ad0b23", "#aa3a2f", "#9d3536", "#b22e43"],
      link: "/product/359880"
    },
    {
      id: 4,
      name: "Infallible Faux Brow Tint Pen",
      brand: "L'Oréal Paris",
      price: "IQD 20,250",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&h=300&fit=crop",
      colors: ["#6b3925", "#432314", "#a47559"],
      link: "/product/359753"
    },
    {
      id: 5,
      name: "Hydrating Face Cream",
      brand: "Nivea",
      price: "IQD 18,500",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&h=300&fit=crop",
      colors: ["#ffffff"],
      link: "/product/359754"
    }
  ];

  const bestSellers = [
    {
      id: 6,
      name: "Volume Supreme Mascara (1Black) 15 ml",
      brand: "Artdeco",
      price: "IQD 22,500",
      image: "https://images.unsplash.com/photo-1631730486887-4d4d1b6d4c8f?q=80&w=300&h=300&fit=crop",
      link: "/product/314991"
    },
    {
      id: 7,
      name: "Khusla Pink Hair Perfume 125 ml",
      brand: "Atyab Al Marshoud",
      price: "IQD 69,750",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=300&h=300&fit=crop",
      link: "/product/315023"
    },
    {
      id: 8,
      name: "Moisturizing Body Lotion",
      brand: "Dove",
      price: "IQD 15,250",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=300&h=300&fit=crop",
      link: "/product/315024"
    }
  ];

  // Categories Data
  const categories = [
    { name: t('skin_care'), id: "skincare", bgColor: "bg-beauty-rose-light" },
    { name: t('makeup'), id: "makeup", bgColor: "bg-secondary" },
    { name: t('hair'), id: "hair", bgColor: "bg-beauty-rose-light" },
    { name: t('fragrance'), id: "fragrance", bgColor: "bg-secondary" },
    { name: t('body_care'), id: "bodycare", bgColor: "bg-beauty-rose-light" },
    { name: t('eye_contact_lenses'), id: "contacts", bgColor: "bg-secondary" },
    { name: t('men_care'), id: "mencare", bgColor: "bg-beauty-rose-light" },
    { name: t('kids'), id: "kids", bgColor: "bg-secondary" },
    { name: t('accessories'), id: "accessories", bgColor: "bg-beauty-rose-light" },
    { name: t('home_fragrance'), id: "home-fragrance", bgColor: "bg-secondary" }
  ];

  // Brands Data
  const brands = [
    { name: "Maybelline", id: "maybelline" },
    { name: "Huda Beauty", id: "huda" },
    { name: "Mesauda Milano", id: "mesauda" },
    { name: "Clarins", id: "clarins" },
    { name: "Lancôme", id: "lancome" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleAddToBag = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const ProductCard = ({ product, showAddButton = true }: { product: any, showAddButton?: boolean }) => (
    <div className="flex-shrink-0 group">
      <div className="grid justify-items-center items-start border border-transparent hover:border-border rounded-2xl transition-all duration-300 group bg-card shadow-elegant hover:shadow-hover cursor-pointer p-5 min-h-[25rem] min-w-[12rem] md:min-w-[16rem] overflow-hidden relative">
        
        {/* Wishlist Button */}
        <button className="absolute right-4 top-4 z-20 p-2 rounded-full hover:bg-secondary transition-colors">
          <Heart className="text-xl text-muted-foreground hover:text-black" />
        </button>

        {/* Product Link */}
        <Link className="grid justify-items-center items-center w-full" href={product.link}>
          <img
            alt={product.name}
            width={200}
            height={200}
            className="group-hover:scale-110 w-48 h-48 transition-all duration-300 object-cover rounded-lg"
            src={product.image}
          />
          <div className="grid justify-items-start items-start w-full mt-4">
            <h6 className="text-xs text-muted-foreground">{product.brand}</h6>
            <h3 className="font-medium text-sm text-card-foreground text-left overflow-hidden text-ellipsis line-clamp-2 mt-1">
              {product.name}
            </h3>
            <p className="font-semibold text-foreground mt-2">{product.price}</p>
          </div>
        </Link>

        {/* Color Options */}
        {product.colors && (
          <div className="flex justify-start w-full items-center mt-3">
            {product.colors.slice(0, 3).map((color: string, index: number) => (
              <button key={index} className={direction === 'rtl' ? 'ml-2' : 'mr-2'}>
                <div
                  className={`w-5 h-5 rounded-full border-2 ${index === 0 ? 'border-foreground' : 'border-border'} hover:border-foreground transition-all`}
                  style={{ backgroundColor: color }}
                ></div>
              </button>
            ))}
            {product.colors && product.colors.length > 3 && (
              <button className="text-muted-foreground hover:text-foreground">
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Add to Bag Button */}
        {showAddButton && (
          <div className="w-full mt-4">
            <button 
              onClick={() => handleAddToBag(product)}
              className="w-full bg-primary text-primary-foreground rounded-lg py-2 px-4 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingBag className={`w-4 h-4 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm">{t('add_to_bag')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="flex-grow pt-32 xl:pt-40">
      <div className="grid justify-items-center items-center">

        {/* Hero Slider */}
        <div className="relative w-full max-w-full mx-auto z-0 overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-1000"
            style={{ 
              transform: `translateX(${direction === 'rtl' ? '' : '-'}${currentSlide * 100}%)`, 
              width: `${heroSlides.length * 100}%` 
            }}
          >
            {heroSlides.map((slide, index) => (
              <Link key={index} className="w-full flex-shrink-0" href={slide.link}>
                <div 
                  className="w-full h-[30rem] lg:h-[40rem] bg-gradient-rose flex items-center justify-center text-white text-4xl font-bold relative"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <h2 className="relative z-10 text-center px-4">{slide.alt}</h2>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2 pointer-events-none">
            <button
              onClick={prevSlide}
              className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all pointer-events-auto"
            >
              <ChevronLeft className="text-white text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all pointer-events-auto"
            >
              <ChevronRight className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="lg:flex grid lg:justify-between lg:flex-row justify-items-center grid-cols-2 items-center lg:px-[5vw] xl:px-[15vw] my-10 w-full">
          <div className="md:flex grid flex-row justify-items-center md:justify-center items-center mb-7 lg:mb-0">
            <div className="h-14 w-14 bg-accent rounded-full flex items-center justify-center md:mr-5 mb-5 md:mb-0">
              <span className="text-accent-foreground text-xs font-bold">💰</span>
            </div>
            <div className="grid justify-items-center md:justify-items-start items-center">
              <h3 className="font-semibold text-foreground">{t('best_prices')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('guaranteed')}</p>
            </div>
          </div>

          <div className="h-[3rem] w-[0.1rem] bg-border lg:block hidden"></div>

          <div className="md:flex grid flex-row justify-items-center md:justify-center items-center mb-7 lg:mb-0">
            <div className="h-14 w-14 bg-accent rounded-full flex items-center justify-center md:mr-5 mb-5 md:mb-0">
              <span className="text-accent-foreground text-xs font-bold">💬</span>
            </div>
            <div className="grid justify-items-center md:justify-items-start items-center">
              <h3 className="font-semibold text-foreground">{t('customer_care')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('support_24_7')}</p>
            </div>
          </div>

          <div className="h-[3rem] w-[0.1rem] bg-border lg:block hidden"></div>

          <div className="md:flex grid flex-row justify-items-center md:justify-center items-center">
            <div className="h-14 w-14 bg-accent rounded-full flex items-center justify-center md:mr-5 mb-5 md:mb-0">
              <span className="text-accent-foreground text-xs font-bold">⭐</span>
            </div>
            <div className="grid justify-items-center md:justify-items-start items-center">
              <h3 className="font-semibold text-foreground">{t('only_the_best')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('brands')}</p>
            </div>
          </div>

          <div className="h-[3rem] w-[0.1rem] bg-border lg:block hidden"></div>

          <div className="md:flex grid flex-row justify-items-center md:justify-center items-center">
            <div className="h-14 w-14 bg-accent rounded-full flex items-center justify-center md:mr-5 mb-5 md:mb-0">
              <span className="text-accent-foreground text-xs font-bold">🔒</span>
            </div>
            <div className="grid justify-items-center md:justify-items-start items-center">
              <h3 className="font-semibold text-foreground">{t('secure_payment')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('all_cards')}</p>
            </div>
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="grid justify-items-start items-start mt-14 w-full">
          <div className="flex justify-between items-center w-full px-3">
            <h2 className="text-lg md:text-2xl font-bold text-foreground">{t('new_arrivals')}</h2>
            <Link className="flex justify-center cursor-pointer items-center group" href="/category/new-arrivals">
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{t('view_more')}</span>
              <ChevronRight className={`text-muted-foreground group-hover:text-foreground transition-colors ${direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
          <div className="h-[0.1rem] w-full bg-border my-5"></div>

          <div className="xl:w-[85vw] w-full flex justify-start items-center overflow-x-auto p-5 gap-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="grid justify-items-start items-start mt-14 w-full">
          <div className="flex justify-between items-center w-full px-3">
            <h2 className="text-lg md:text-2xl font-bold text-foreground">{t('best_sellers')}</h2>
            <Link className="flex justify-center cursor-pointer items-center group" href="/category/best-sellers">
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{t('view_more')}</span>
              <ChevronRight className={`text-muted-foreground group-hover:text-foreground transition-colors ${direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
          <div className="h-[0.1rem] w-full bg-border my-5"></div>

          <div className="xl:w-[85vw] w-full flex justify-start items-center overflow-x-auto p-5 gap-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} showAddButton={false} />
            ))}
          </div>
        </div>

        {/* Download App Section */}
        <div className="w-full grid justify-items-center items-center mt-16">
          <div className="w-full h-80 bg-gradient-rose flex items-center justify-center text-white relative rounded-lg mx-4">
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="relative z-10 text-center px-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('download_app')}</h2>
              <p className="text-sm md:text-base mb-6 max-w-md">
                {t('app_description')}
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=me.alshahira.app"
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
                >
                  {t('android')}
                </a>
                <a 
                  href="https://apps.apple.com/il/app/al-shaheera"
                  className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
                >
                  {t('ios')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop By Category Section */}
        <div className="grid justify-items-start items-center mt-16 w-full">
          <div className="flex justify-between items-center w-full px-3">
            <h2 className="text-lg md:text-2xl font-bold text-foreground">{t('shop_by_category')}</h2>
            <Link className="flex justify-center items-center group" href="/categories">
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{t('view_more')}</span>
              <ChevronRight className={`text-muted-foreground group-hover:text-foreground transition-colors ${direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
          <div className="h-[0.1rem] w-full bg-border my-5"></div>

          <div className="flex justify-start items-center overflow-x-auto w-full pb-5 px-3 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                className={`p-6 rounded-2xl grid justify-items-center items-center group min-h-[18rem] min-w-[14rem] cursor-pointer flex-shrink-0 ${category.bgColor} hover:shadow-hover transition-all`}
                href={`/category/${category.id}`}
              >
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold mb-4">
                  <Plus className="w-5 h-5 text-black" />
                </button>
                <div className="w-32 h-32 bg-card rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-elegant">
                  <span className="text-muted-foreground text-sm text-center">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Promotional Cards */}
        <div className="grid md:grid-cols-2 justify-items-center items-center mt-20 gap-8 w-full px-[5vw]">
          {[
            { title: t('natural_products'), description: t('natural_description'), link: "/category/natural" },
            { title: t('luxury_collection'), description: t('luxury_description'), link: "/category/luxury" },
            { title: t('skincare_essentials'), description: t('skincare_description'), link: "/category/skincare" },
            { title: t('makeup_must_haves'), description: t('makeup_description'), link: "/category/makeup" }
          ].map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl w-full max-w-md h-40 bg-gradient-rose">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className={`relative z-10 bg-card absolute top-4 bottom-4 w-64 rounded-xl p-4 flex flex-col justify-between ${direction === 'rtl' ? 'right-4' : 'left-4'}`}>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{item.description}</p>
                </div>
                <Link href={item.link}>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                    {t('shop_now')}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="grid justify-items-start items-center my-20 w-full">
          <div className="flex justify-between items-center w-full px-3">
            <h2 className="text-lg md:text-2xl font-bold text-foreground">{t('brands')}</h2>
            <Link className="flex justify-center items-center group" href="/brands">
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{t('view_more')}</span>
              <ChevronRight className={`text-muted-foreground group-hover:text-foreground transition-colors ${direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
          <div className="h-[0.1rem] w-full bg-border my-5"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-center mt-5 w-full px-4">
            {brands.map((brand, index) => (
              <Link
                key={index}
                className="p-8 rounded-2xl border border-border hover:border-foreground transition-all duration-300 group flex justify-center items-center w-full"
                href={`/brand/${brand.id}`}
              >
                <div className="group-hover:scale-105 w-24 h-16 bg-secondary rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-muted-foreground text-sm font-semibold">{brand.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default MainContent;