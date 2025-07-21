'use client';

import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, direction } = useLanguage();

  return (
    <footer 
      className="bg-black bg-fixed w-full py-10 text-white xl:flex xl:justify-center grid justify-items-center items-start md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-y-10"
      style={{ backgroundImage: "url('/images/pattern.png')" }}
    >
      {/* Logo and Contact Info Section */}
      <div className="grid w-full px-5 sm:px-0 sm:w-auto justify-items-start items-center lg:mr-20 xl:mr-[2vw]">
        <img 
          src="/shaheera.svg" 
          alt="SHAHEERA" 
          className="h-24"
        />
        <div className="grid justify-items-start items-center mt-5 gap-y-5">
          <a className={`flex justify-center items-center ${direction === 'rtl' ? 'flex-row' : 'flex-row-reverse'}`} href="tel:6664">
            <h1 className="text-white">6664</h1>
            <Phone className={`text-2xl ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
          </a>
          <a className={`flex justify-center items-center ${direction === 'rtl' ? 'flex-row' : 'flex-row-reverse'}`} href="mailto:info@alshaheera.com">
            <h1 className="text-white">info@alshaheera.com</h1>
            <Mail className={`text-2xl ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
          </a>
          <div className="flex justify-items-center items-center">
            <a href="https://web.facebook.com/alshahira.prive/?_rdc=1&_rdr">
              <Facebook className={`text-2xl ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
            </a>
            <a href="https://www.instagram.com/alshaheera_official/?hl=ar">
              <Instagram className={`text-2xl ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
            </a>
          </div>
        </div>
      </div>

      {/* Home Links Section */}
      <div className="flex justify-between items-center w-full px-5 sm:px-0 sm:w-auto">
        <div className="grid justify-items-start items-center gap-y-3 sm:w-[11rem] sm:mx-10">
          <h1 className="text-lg font-medium sm:text-nowrap">{t('home')}</h1>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/about">
            {t('about_us')}
          </Link>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/contact">
            {t('contact_us')}
          </Link>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/terms">
            {t('terms_conditions')}
          </Link>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/return-policy">
            {t('return_policy')}
          </Link>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/privacy">
            {t('privacy_policy')}
          </Link>
        </div>
        
        {/* Customer Support - Mobile Hidden */}
        <div className="grid sm:hidden justify-items-start items-center gap-y-3 lg:ml-[-8rem] xl:ml-0">
          <h1 className="text-lg font-medium sm:text-nowrap">{t('customer_support')}</h1>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/support">
            {t('customer_service')}
          </Link>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/about">
            {t('about_us')}
          </Link>
          <Link className="text-base hover:text-gray-300 transition-colors" href="/faqs">
            {t('faqs')}
          </Link>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid justify-items-start items-center w-full sm:w-auto px-5 sm:px-0 sm:ml-28 md:ml-0 md:mr-10 lg:mr-0">
        <h1 className="text-lg font-medium text-nowrap">{t('products')}</h1>
        <div className="flex justify-start items-start h-[10rem] grid-rows-5">
          <div className="grid justify-items-start items-start w-[7rem] gap-y-2 mt-3">
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/makeup">
              {t('makeup')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/hair">
              {t('hair')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/skincare">
              {t('skin_care')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/fragrance">
              {t('fragrance')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/mencare">
              {t('men_care')}
            </Link>
          </div>
          <div className="grid justify-items-start items-start w-[13rem] md:w-[10rem] lg:w-[15rem] gap-y-2 mt-3">
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/contacts">
              {t('eye_contact_lenses')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/kids">
              {t('kids')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/accessories">
              {t('accessories')}
            </Link>
            <Link className="text-base hover:text-gray-300 transition-colors" href="/category/home-fragrance">
              {t('home_fragrance')}
            </Link>
          </div>
        </div>
      </div>

      {/* Customer Support - Desktop Visible */}
      <div className="hidden sm:grid justify-items-start items-center gap-y-3 lg:ml-[-8rem] xl:ml-0">
        <h1 className="text-lg font-medium text-nowrap">{t('customer_support')}</h1>
        <Link className="text-base hover:text-gray-300 transition-colors" href="/support">
          {t('customer_service')}
        </Link>
        <Link className="text-base hover:text-gray-300 transition-colors" href="/faqs">
          {t('faqs')}
        </Link>
        <Link className="text-base hover:text-gray-300 transition-colors" href="/terms">
          {t('terms_conditions')}
        </Link>
      </div>

      {/* Download App Section */}
      <div className="grid justify-items-center md:justify-items-end items-start gap-y-3 lg:ml-10 md:mt-0 sm:w-[0vw] md:w-fit sm:ml-[23vw] md:ml-0">
        <h1 className="text-lg font-medium text-nowrap">{t('download_our_app')}</h1>
        <div className="md:grid md:justify-items-center flex justify-center items-center gap-3">
          <a 
            href="https://play.google.com/store/apps/details?id=me.alshahira.app&pcampaignid=web_share&pli=1"
            className="hover:opacity-80 transition-opacity bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold"
          >
            {t('android')}
          </a>
          <a 
            href="https://apps.apple.com/il/app/al-shaheera-%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%B1%D8%A9/id6450597765"
            className="hover:opacity-80 transition-opacity bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-lg text-white font-semibold"
          >
            {t('ios')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;