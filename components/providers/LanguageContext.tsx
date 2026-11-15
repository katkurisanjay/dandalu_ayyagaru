'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'te' | 'hi';

export interface Translations {
  nav: {
    about: string;
    categories: string;
    booking: string;
    samagri: string;
    astrology: string;
    onlineRituals: string;
    myBookings: string;
    bookPooja: string;
    assistance: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    bookBtn: string;
    whatsappBtn: string;
    availableBadge: string;
    priestName: string;
    priestTitle: string;
    priestDesc: string;
  };
  trust: {
    shastra: string;
    samagri: string;
    muhurtham: string;
    chanting: string;
  };
  quickBook: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    proceedBtn: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      categories: 'Categories',
      booking: 'Instant Booking',
      samagri: 'Sacred Samagri',
      astrology: 'Astrology',
      onlineRituals: 'Online Rituals',
      myBookings: 'My Bookings',
      bookPooja: 'Book a Pooja',
      assistance: 'Need Assistance?',
    },
    hero: {
      badge: 'Authentic Vedic Lineage · Trusted Priests',
      titleLine1: 'For Every Sacred Milestone,',
      titleHighlight: 'Experienced Vedic Purohits',
      titleLine2: '& Complete Pooja Samagri.',
      subtitle: 'Book certified Vedic purohits for Gruha Pravesham, Satyanarayana Vratam, Ganapathi Homam & Vivaham. Authentic mantra uccharana, clear explanation, and zero last-minute stress.',
      bookBtn: 'Book a Pooja Now',
      whatsappBtn: 'WhatsApp Assistance',
      availableBadge: 'Available in Hyderabad, Bangalore & AP/TS',
      priestName: 'Acharya Dandalu Ayyagaru',
      priestTitle: 'Veda Vijnana Bhushana',
      priestDesc: 'Krishna Yajurveda & Smartha Prayoga · Traditional Purohit',
    },
    trust: {
      shastra: '100% Shastra Sammatham',
      samagri: 'Fresh Samagri Included',
      muhurtham: 'Brahma Muhurtham Punctual',
      chanting: 'Telugu, Sanskrit & Hindi',
    },
    quickBook: {
      badge: 'Easy Booking · 3 Simple Steps',
      title: 'Reserve Your Purohit in',
      titleHighlight: 'Minutes',
      subtitle: 'Select your ritual, pick the auspicious muhurtham, and we take care of the entire mandapam preparation & samagri.',
      step1: '1. Choose Ritual',
      step2: '2. Auspicious Muhurtham',
      step3: '3. Venue & Samagri',
      proceedBtn: 'Proceed to Finalize Booking',
    },
  },
  te: {
    nav: {
      about: 'మా గురించి',
      categories: 'పూజా విభాగాలు',
      booking: 'తక్షణ బుకింగ్',
      samagri: 'పూజా సామాగ్రి',
      astrology: 'జ్యోతిష్యం',
      onlineRituals: 'ఆన్‌లైన్ పూజలు',
      myBookings: 'నా బుకింగ్స్',
      bookPooja: 'పూజ బుక్ చేయండి',
      assistance: 'సహాయం కావాలా?',
    },
    hero: {
      badge: 'వేదోక్త సాంప్రదాయం · విశ్వసనీయ పురోహిత సేవలు',
      titleLine1: 'మీ ఇంట్లో శుభకార్యానికి,',
      titleHighlight: 'అనుభవజ్ఞులైన పురోహితులు',
      titleLine2: '& సంపూర్ణ పూజా సామాగ్రి.',
      subtitle: 'గృహప్రవేశం, సత్యనారాయణ వ్రతం, గణపతి హోమం మరియు వివాహాలకు వేద పండితులను బుక్ చేసుకోండి. స్వచ్ఛమైన మంత్రోచ్ఛారణ, స్పష్టమైన భావార్థం, సులభమైన బుకింగ్.',
      bookBtn: 'పూజ బుక్ చేసుకోండి',
      whatsappBtn: 'వాట్సాప్ సహాయం',
      availableBadge: 'హైదరాబాద్, బెంగళూరు, ఏపీ/తెలంగాణలో అందుబాటులో',
      priestName: 'ఆచార్య దండాలు అయ్యగారు',
      priestTitle: 'వేద విజ్ఞాన భూషణ',
      priestDesc: 'కృష్ణ యజుర్వేద & స్మార్త ప్రయోగ పండితులు',
    },
    trust: {
      shastra: '100% శాస్త్ర సమ్మతం',
      samagri: 'తాజా సామాగ్రి కిట్',
      muhurtham: 'బ్రహ్మ ముహూర్త సమయపాలన',
      chanting: 'స్పష్టమైన మంత్రోచ్ఛారణ',
    },
    quickBook: {
      badge: 'సులభమైన బుకింగ్ · 3 సులభ దశలు',
      title: 'నిమిషాల్లో పురోహితుని',
      titleHighlight: 'బుక్ చేసుకోండి',
      subtitle: 'పూజను ఎంచుకోండి, శుభ ముహూర్తాన్ని నిర్ణయించండి. మండప ఏర్పాట్లు, సామాగ్రి మొత్తం మేమే సమకూరుస్తాము.',
      step1: '1. పూజ ఎంచుకోండి',
      step2: '2. శుభ ముహూర్తం',
      step3: '3. వేదిక & సామాగ్రి',
      proceedBtn: 'బుకింగ్ పూర్తి చేయండి',
    },
  },
  hi: {
    nav: {
      about: 'हमारे बारे में',
      categories: 'पूजा श्रेणियाँ',
      booking: 'त्वरित बुकिंग',
      samagri: 'पवित्र सामग्री',
      astrology: 'ज्योतिष परामर्श',
      onlineRituals: 'ऑनलाइन पूजा',
      myBookings: 'मेरी बुकिंग',
      bookPooja: 'पूजा बुक करें',
      assistance: 'सहायता चाहिए?',
    },
    hero: {
      badge: 'वैदिक परंपरा · विश्वसनीय पुरोहित सेवाएं',
      titleLine1: 'आपके घर के हर शुभ कार्य के लिए,',
      titleHighlight: 'अनुभवी वैदिक पुरोहित',
      titleLine2: 'और संपूर्ण पूजा सामग्री।',
      subtitle: 'गृह प्रवेश, सत्यनारायण कथा, गणपति हवन और विवाह संस्कारों के लिए प्रमाणित पंडित जी बुक करें। शुद्ध संस्कृत मंत्रोच्चार एवं पूर्ण अर्थ सहित।',
      bookBtn: 'पूजा बुक करें',
      whatsappBtn: 'व्हाट्सएप सहायता',
      availableBadge: 'हैदराबाद, बैंगलोर और संपूर्ण भारत में उपलब्ध',
      priestName: 'आचार्य दंडालु अय्यागारु',
      priestTitle: 'वेद विज्ञान भूषण',
      priestDesc: 'कृष्ण यजुर्वेद एवं स्मार्त प्रयोग · वरिष्ठ पुरोहित',
    },
    trust: {
      shastra: '100% शास्त्र सम्मत',
      samagri: 'शुद्ध सामग्री उपलब्ध',
      muhurtham: 'मुहूर्त पर समयबद्ध आगमन',
      chanting: 'तेलुगु, संस्कृत और हिंदी',
    },
    quickBook: {
      badge: 'सरल बुकिंग · 3 आसान चरण',
      title: 'मिनटों में पुरोहित जी',
      titleHighlight: 'बुक करें',
      subtitle: 'पूजा चुनें, शुभ मुहूर्त तय करें और बाकी मंडप व सामग्री की संपूर्ण तैयारी हम पर छोड़ दें।',
      step1: '1. पूजा चुनें',
      step2: '2. शुभ मुहूर्त',
      step3: '3. स्थान और सामग्री',
      proceedBtn: 'बुकिंग आगे बढ़ाएं',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('dandalu_lang') as Language;
    if (saved && (saved === 'en' || saved === 'te' || saved === 'hi')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('dandalu_lang', lang);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
