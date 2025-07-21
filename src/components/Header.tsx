'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Globe,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Smartphone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { locale, setLocale, t, direction } = useLanguage();
  
  const navigationItems = [
    { key: 'skin_care', href: '/category/skincare' },
    { key: 'makeup', href: '/category/makeup' },
    { key: 'hair', href: '/category/hair' },
    { key: 'fragrance', href: '/category/fragrance' },
    { key: 'body_care', href: '/category/bodycare' },
    { key: 'eye_contact_lenses', href: '/category/contacts' },
    { key: 'men_care', href: '/category/mencare' },
    { key: 'kids', href: '/category/kids' },
    { key: 'accessories', href: '/category/accessories' },
    { key: 'home_fragrance', href: '/category/home-fragrance' }
  ];
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="w-full">
      {/* Main Header */}
      <div className="fixed top-0 w-full z-50 bg-background shadow-elegant">
        <div className="flex justify-between items-center px-[5vw] py-4 xl:py-2">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden mr-5 text-4xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link href="/" className="flex items-center">
              <img 
                src="/shaheera.svg" 
                alt="SHAHEERA" 
                className="h-11 sm:h-16 xl:h-24 xl:ml-0 1800:ml-32"
              />
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex justify-center w-[40vw] xl:mr-[-9rem]">
            <div className="flex w-[50%]">
              <Input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`border-2 border-primary text-sm focus:ring-2 focus:ring-ring ${
                  direction === 'rtl' ? 'rounded-r-full' : 'rounded-l-full'
                }`}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                variant="search"
                onClick={handleSearch}
                className={`h-10 px-5 ${
                  direction === 'rtl' ? 'rounded-l-full' : 'rounded-r-full'
                }`}
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="xl:grid flex flex-row-reverse xl:justify-items-center gap-y-4 1800:mr-40 xl:mr-0">
            <div className="flex items-center gap-x-3">
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className="xl:flex grid xl:flex-row-reverse xl:justify-center justify-items-center items-center hover:text-primary transition-colors"
              >
                <h1 className="order-2 xl:order-1 text-nowrap">
                  {locale === 'en' ? 'عربي' : 'English'}
                </h1>
                <Globe className="mx-2 order-1 xl:order-2 lg:text-2xl xl:text-3xl" />
              </button>
              
              <div className="xl:h-[2rem] h-[3rem] w-[0.1rem] bg-beauty-silver"></div>
              
              {/* Sign In */}
              <Link href="/login" className="xl:flex xl:flex-row-reverse xl:justify-center grid justify-items-center items-center hover:text-primary transition-colors">
                <h1 className="order-2 xl:order-1 text-xs md:text-base text-nowrap">{t('sign_in')}</h1>
                <User className="xl:mr-2 order-1 xl:order-2 font-bold text-4xl md:text-3xl" />
              </Link>
              
              <div className="xl:h-[2rem] h-[3rem] w-[0.1rem] bg-beauty-silver"></div>
              
              {/* Favorites - Hidden on mobile in top bar */}
              <Link href="/favorites" className="relative hidden xl:block hover:text-primary transition-colors">
                <Heart className="mr-2 font-bold text-3xl" />
                <div className="bg-primary absolute -top-2 -right-1 text-primary-foreground rounded-full size-[1.3rem] text-sm flex justify-center items-center">
                  0
                </div>
              </Link>
              
              <div className="h-[2rem] hidden xl:block w-[0.1rem] bg-beauty-silver"></div>
              
              {/* Shopping Cart */}
              <Link href="/cart" className="relative hover:text-primary transition-colors">
                <ShoppingBag className="mr-2 font-bold text-3xl" />
                <div className="bg-primary absolute -top-2 -right-1 text-primary-foreground rounded-full size-[1.3rem] text-sm flex justify-center items-center">
                  2
                </div>
              </Link>
            </div>

            {/* Branches & App Download */}
            <div className="flex justify-between w-full items-center">
              <div className="relative">
                <Button
                  variant="outline"
                  className="hidden xl:grid border-2 border-primary py-1 px-5 rounded-lg"
                >
                  <div className="flex justify-between w-full items-center flex-row-reverse">
                    <h1>{t('branches')}</h1>
                    <div className="h-[1rem] w-[0.1rem] bg-beauty-silver mx-3"></div>
                    <ChevronDown className="text-2xl" />
                  </div>
                </Button>
              </div>
              
              <Link
                href="/app"
                className="sm:flex hidden justify-center xl:ml-5 mx-5 items-center flex-row-reverse bg-secondary px-5 rounded-lg py-[0.4rem] hover:bg-secondary/80 transition-colors"
              >
                <h1 className="text-nowrap">{t('get_app')}</h1>
                <Smartphone className="mr-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-primary hidden xl:flex justify-center items-center py-3 relative">
          <Link href="/" className="text-primary-foreground font-semibold text-[0.9rem] mr-[0.5vw] hover:text-beauty-gold transition-colors">
            {t('home')}
          </Link>
          
          {navigationItems.map((item, index) => (
            <div key={index} className="text-primary-foreground flex justify-center items-center mx-[0.5vw] relative">
              <div className="flex justify-center items-center z-10">
                <Link href={item.href}>
                  <h1 className="cursor-pointer font-medium xl:text-[1vw] 1600:text-[0.9rem] hover:text-beauty-gold transition-colors">
                    {t(item.key as any)}
                  </h1>
                </Link>
                <ChevronDown className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden flex justify-center w-full flex-row items-center p-3">
          <Input
            type="text"
            placeholder={t('search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full py-2 px-4 border-2 border-primary text-sm ${
              direction === 'rtl' ? 'rounded-r-full' : 'rounded-l-full'
            }`}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button 
            variant="search"
            onClick={handleSearch}
            className={`h-10 px-5 ${
              direction === 'rtl' ? 'rounded-l-full' : 'rounded-r-full'
            }`}
          >
            <Search className="text-2xl" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="absolute inset-0 bg-primary/80" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className={`relative bg-background w-80 h-full shadow-hover animate-slide-in ${
            direction === 'rtl' ? 'mr-auto' : 'ml-0'
          }`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{t('menu')}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {navigationItems.map((item, index) => (
                <Link key={index} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex justify-between w-full cursor-pointer items-center border-b border-border py-4 hover:text-primary transition-colors">
                    <h1 className="font-medium text-[1rem]">{t(item.key as any)}</h1>
                    <ChevronDown className={`ml-1 ${direction === 'rtl' ? 'rotate-90' : '-rotate-90'}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}