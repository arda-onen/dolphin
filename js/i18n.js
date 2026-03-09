/* global localStorage */
(function i18nModule() {
  const STORAGE_KEY = "dolphinParkLanguage";
  const defaultLanguage = "tr";
  const supportedLanguages = ["tr", "en", "ru", "de"];
  const languageMeta = {
    tr: { code: "TR", flagPath: "assets/flags/tr.png", alt: "Turkish flag" },
    en: { code: "EN", flagPath: "assets/flags/en.png", alt: "English flag" },
    ru: { code: "RU", flagPath: "assets/flags/ru.png", alt: "Russian flag" },
    de: { code: "DE", flagPath: "assets/flags/de.png", alt: "German flag" }
  };

  const translations = {
    tr: {
      brandName: "Dolphin Park",
      navHome: "Anasayfa",
      navAbout: "Hakkımızda",
      navTickets: "Biletler",
      navContact: "İletişim",
      navFaq: "SSS",
      metaTitleHome: "Dolphin Park | Anasayfa",
      metaDescriptionHome:
        "Dolphin Park resmi bilgilendirme sitesi: gösteriler, ziyaret bilgileri, iletişim ve sıkça sorulan sorular.",
      metaOgTitleHome: "Dolphin Park",
      metaOgDescriptionHome:
        "Aile dostu, eğlenceli ve bilgilendirici Dolphin Park deneyimi.",
      metaTitleAbout: "Dolphin Park | Hakkımızda",
      metaDescriptionAbout: "Dolphin Park hikayesi, misyonu ve güvenlik yaklaşımı.",
      metaOgTitleAbout: "Dolphin Park | Hakkımızda",
      metaOgDescriptionAbout: "Dolphin Park'ın vizyonu, misyonu ve kalite anlayışı.",
      metaTitleTickets: "Dolphin Park | Biletler",
      metaDescriptionTickets: "Dolphin Park bilet, saat ve ziyaret bilgileri. Online ödeme yoktur.",
      metaOgTitleTickets: "Dolphin Park | Biletler",
      metaOgDescriptionTickets: "Bilgilendirme amaçlı fiyat ve ziyaret detayları.",
      metaTitleContact: "Dolphin Park | İletişim",
      metaDescriptionContact: "Dolphin Park ile iletişim bilgileri, adres ve konum haritası.",
      metaOgTitleContact: "Dolphin Park | İletişim",
      metaOgDescriptionContact: "Telefon, e-posta ve adres bilgileri.",
      metaTitleFaq: "Dolphin Park | SSS",
      metaDescriptionFaq: "Dolphin Park sıkça sorulan sorular ve ziyaret öncesi bilgiler.",
      metaOgTitleFaq: "Dolphin Park | SSS",
      metaOgDescriptionFaq: "Ziyaret öncesi en çok sorulan soruların cevapları.",
      heroTag: "ENGELLER YOK, SADECE MUTLULUK!!!",
      heroTitle: "Dolphin Therapy Hakkında Bilinmesi Gerekenler",
      heroText:
        "Dolphin therapy, yunuslarla kontrollü ve uzman eşliğinde kurulan etkileşim yoluyla fiziksel, duygusal ve sosyal gelişimi desteklemeyi amaçlayan tamamlayıcı bir terapi yaklaşımıdır.",
      heroCtaPrimary: "Program Bilgilerini Gör",
      heroCtaSecondary: "Bizimle İletişime Geçin",
      homeHighlightsTitle: "Kimler İçin Tercih Edilir?",
      homeHighlightsText:
        "Dolphin therapy, tıbbi tedavilerin yerine geçmez; ancak birçok durumda destekleyici bir yöntem olarak uygulanır.",
      homeFocusList1: "Otizm spektrum bozukluğu ve gelişimsel gecikmeler",
      homeFocusList2: "Down sendromu ve öğrenme güçlükleri",
      homeFocusList3: "Dikkat eksikliği ve hiperaktivite bozukluğu",
      homeFocusList4: "Kas tonusu problemleri ve koordinasyon zorlukları",
      homeFocusList5: "Kaygı, özgüven eksikliği ve sosyal iletişim sorunları",
      homeCard1Title: "Otizm ve Gelişimsel Gecikmeler",
      homeCard1Text:
        "Otizm spektrum bozukluğu, gelişimsel gecikmeler ve öğrenme güçlüklerinde motivasyonu destekleyebilir.",
      homeCard2Title: "Dikkat ve Sosyal İletişim",
      homeCard2Text:
        "Dikkat eksikliği, sosyal iletişim sorunları ve özgüven eksikliği yaşayan bireyler için destekleyici olabilir.",
      homeCard3Title: "Fiziksel Destek Alanları",
      homeCard3Text:
        "Kas tonusu, koordinasyon ve denge gelişimi odaklı su içi etkinliklerle destek sağlanabilir.",
      homeExperienceTitle: "Olası Faydalar",
      homeExperienceText:
        "Dolphin therapy programlarında amaç, katılımcının motivasyonunu artırmak ve öğrenme sürecini eğlenceli bir ortamda desteklemektir.",
      homeExperienceList1: "Su içinde hareket ile denge ve koordinasyon gelişimini destekleme",
      homeExperienceList2: "Pozitif etkileşim ile kaygıyı azaltmaya ve özgüveni artırmaya katkı",
      homeExperienceList3: "Aileler için umut ve moral sağlayan bütüncül bir deneyim",
      homeScienceTitle: "Bilimsel Bakış ve Sınırlılıklar",
      homeScienceText:
        "Dolphin therapy ile ilgili olumlu deneyim paylaşımları bulunsa da, bilimsel araştırmalar hala sınırlıdır ve sonuçlar her bireyde farklılık gösterebilir. Bu nedenle, bu yaklaşımın mucizevi bir tedavi olarak görülmemesi, mevcut tıbbi ve eğitimsel programların yanında ek bir destek olarak değerlendirilmesi önem taşır.",
      homeEthicsTitle: "Güvenlik ve Etik Konular",
      homeEthicsText:
        "Dolphin therapy programı seçerken hem katılımcının güvenliği hem de yunusların refahı dikkate alınmalıdır. Profesyonel ekip, hijyen koşulları, acil durum planları ve hayvanların etik koşullarda bakımı büyük önem taşır.",
      homePlanningText:
        "Programın içeriği, süresi ve hedefleri önceden netleştirilmeli, katılımcının sağlık durumu mutlaka uzmanlar tarafından değerlendirilmelidir.",
      homeShowcaseTitle: "Yunuslarla Unutulmaz Anılar",
      homeShowcaseText:
        "Yunuslarla unutulmaz anılar yaratın. Şov ve terapi programlarımızla sizleri bekliyoruz.",
      homeShowcaseNote:
        "Kendi park tanıtım videonuzu bu alanda yayınlayarak ziyaretçilere doğal ortamı ve deneyimi doğrudan gösterebilirsiniz.",
      homeTherapyTitle: "Dolphin Therapy Nedir?",
      homeTherapyText:
        "Dolphin therapy, yunuslarla kontrollü ve uzman eşliğinde kurulan etkileşim yoluyla fiziksel, duygusal ve sosyal gelişimi desteklemeyi amaçlayan tamamlayıcı bir terapi yaklaşımıdır. Genellikle çocuklar için tercih edilse de, yetişkinler de bu programlardan yararlanabilmektedir.",
      homeTarget1Title: "Kimler İçin?",
      homeTarget1Text: "Otizm spektrumu, gelişimsel gecikmeler ve öğrenme güçlükleri.",
      homeTarget2Title: "Destek Alanları",
      homeTarget2Text: "Dikkat sorunları, koordinasyon zorlukları ve sosyal iletişim becerileri.",
      homeTarget3Title: "Olası Faydalar",
      homeTarget3Text: "Motivasyon artışı, özgüven desteği ve su içi hareketle denge gelişimi.",
      aboutTitle: "Dolphin Park Hakkında",
      aboutText:
        "Dolphin Park, deniz sevgisini eğitici ve eğlenceli deneyimlerle buluşturmak için kuruldu.",
      aboutMissionTitle: "Misyonumuz",
      aboutMissionText:
        "Misafirlerimize unutulmaz anlar sunarken hayvan refahına ve eğitime öncelik vermek.",
      aboutVisionTitle: "Vizyonumuz",
      aboutVisionText:
        "Bölgenin en sevilen aile eğlence ve farkındalık merkezi olmak.",
      aboutSafetyTitle: "Güvenlik ve Kalite",
      aboutSafetyText:
        "Tüm etkinliklerde uluslararası güvenlik standartları ve profesyonel denetim uygulanır.",
      aboutScienceTitle: "Bilimsel Bakış ve Sınırlılıklar",
      aboutScienceText:
        "Yunus terapisi ile ilgili olumlu deneyimler bulunsa da bilimsel araştırmalar sınırlıdır ve sonuçlar her bireyde farklılık gösterebilir. Bu yaklaşım tıbbi tedavinin yerine geçmez.",
      aboutEthicsTitle: "Güvenlik ve Etik İlkeler",
      aboutEthicsText:
        "Program seçiminde katılımcı güvenliği, hijyen koşulları, acil durum planları ve yunusların etik standartlarda bakımının sağlanması temel önceliktir.",
      ticketsTitle: "Bilet ve Ziyaret Bilgileri",
      ticketsText:
        "Sitemiz bilgilendirme amaçlıdır. Ödeme alınmaz, sadece ziyaret planlaması sağlanır.",
      ticketsTableHeadType: "Program Tipi",
      ticketsTableHeadPrice: "Ücret",
      ticketsTableHeadNote: "Açıklama",
      ticketsAdult: "Değerlendirme Seansı",
      ticketsChild: "Destek Programı (Çocuk)",
      ticketsFamily: "Aile Danışmanlığı Paketi",
      ticketsCurrency: "TL",
      ticketsNoteAdult: "Uzman görüşmesi + planlama",
      ticketsNoteChild: "Yaş ve sağlık durumuna göre planlanır",
      ticketsNoteFamily: "Bilgilendirme + destek oturumları",
      ticketsHoursTitle: "Çalışma Saatleri",
      ticketsHoursText: "Her gün 10:00 - 19:00",
      ticketsPolicyTitle: "Ziyaret Notları",
      ticketsPolicyText:
        "Gösteri saatinden en az 30 dakika önce parkta olmanızı öneririz.",
      ticketsQuickInfoLabel: "Hızlı Bilgi",
      ticketsMetaProgramLabel: "Program",
      ticketsMetaProgramValue: "3 seçenek",
      ticketsMetaPaymentLabel: "Ödeme",
      ticketsMetaPaymentValue: "Online yok",
      ticketsContactCta: "Rezervasyon İçin Bizi Arayın",
      ticketsDisclaimerTitle: "Önemli Bilgilendirme",
      ticketsDisclaimerText:
        "Programlar tıbbi tedavinin yerine geçmez. Uzman hekim ve terapist görüşü ile destekleyici planlama yapılması önerilir.",
      contactTitle: "İletişim",
      contactText:
        "Sorularınız için bize telefon, e-posta veya sosyal kanallardan ulaşabilirsiniz.",
      contactPhoneLabel: "Telefon",
      contactEmailLabel: "E-posta",
      contactAddressLabel: "Adres",
      contactAddressValue: "Moonlight Beach, Merkez, 152. Sk., 07980 Kemer/Antalya",
      contactMapTitle: "Konum",
      contactDirectLinesLabel: "Doğrudan Hatlar",
      contactResponseTitle: "Yanıt Süresi",
      contactResponseText: "Mesajlarınıza aynı gün içinde dönüş sağlanır.",
      contactReachTitle: "Bizimle İletişime Geçin",
      contactReachText:
        "Program içeriği, süresi ve hedefleri katılımcıya göre değişir. Sağlık bilgilerini uzman ekiple paylaşarak en uygun planlamayı yapabilirsiniz.",
      faqTitle: "Sıkça Sorulan Sorular",
      faqText: "Ziyaretiniz öncesinde en çok merak edilen soruları burada bulabilirsiniz.",
      faqQ1: "Parkta kredi kartı ile ödeme yapılıyor mu?",
      faqA1:
        "Bu web sitesi sadece bilgilendirme amaçlıdır. Ödeme park girişinde veya iletişim üzerinden yönlendirilir.",
      faqQ2: "Çocuklar için yaş sınırı var mı?",
      faqA2: "4 yaş altı çocuklar aile eşliğinde ücretsiz girebilir.",
      faqQ3: "Otopark mevcut mu?",
      faqA3: "Evet, ziyaretçilerimiz için ücretsiz otopark alanı bulunmaktadır.",
      faqQ4: "Dolphin therapy tıbbi tedavinin yerine geçer mi?",
      faqA4:
        "Hayır. Bu yaklaşım mevcut tıbbi ve eğitsel programların yanında destekleyici bir yöntem olarak değerlendirilmelidir.",
      faqQ5: "Program seçerken nelere dikkat edilmelidir?",
      faqA5:
        "Uzman ekip, hijyen koşulları, acil durum planları ve yunusların etik standartlarda bakımının sağlanması temel kriterlerdir.",
      faqNeedHelpLabel: "Yardıma mı ihtiyacınız var?",
      faqMetaCountLabel: "SSS",
      faqMetaCountValue: "5 güncel başlık",
      faqMetaSupportLabel: "Destek",
      faqMetaSupportValue: "Uzman ekip",
      faqQuickGuideTitle: "Hızlı Yönlendirme",
      faqQuickGuideText:
        "Program sorularınız için Biletler sayfasına, detaylı destek için İletişim sayfasına geçebilirsiniz.",
      faqVisitQuestionsTitle: "Ziyaret Soruları",
      faqProgramQuestionsTitle: "Program Soruları",
      footerText: "Dolphin Park. Tüm hakları saklıdır."
    },
    en: {
      brandName: "Dolphin Park",
      navHome: "Home",
      navAbout: "About",
      navTickets: "Tickets",
      navContact: "Contact",
      navFaq: "FAQ",
      metaTitleHome: "Dolphin Park | Home",
      metaDescriptionHome:
        "Official Dolphin Park information website: shows, visit details, contact, and frequently asked questions.",
      metaOgTitleHome: "Dolphin Park",
      metaOgDescriptionHome: "Family-friendly, fun, and informative Dolphin Park experience.",
      metaTitleAbout: "Dolphin Park | About",
      metaDescriptionAbout: "Dolphin Park story, mission, and safety approach.",
      metaOgTitleAbout: "Dolphin Park | About",
      metaOgDescriptionAbout: "Dolphin Park vision, mission, and quality standards.",
      metaTitleTickets: "Dolphin Park | Tickets",
      metaDescriptionTickets: "Dolphin Park ticket, schedule, and visit details. No online payment.",
      metaOgTitleTickets: "Dolphin Park | Tickets",
      metaOgDescriptionTickets: "Informational pricing and visit details.",
      metaTitleContact: "Dolphin Park | Contact",
      metaDescriptionContact: "Dolphin Park contact information, address, and location map.",
      metaOgTitleContact: "Dolphin Park | Contact",
      metaOgDescriptionContact: "Phone, email, and address information.",
      metaTitleFaq: "Dolphin Park | FAQ",
      metaDescriptionFaq: "Dolphin Park frequently asked questions and pre-visit information.",
      metaOgTitleFaq: "Dolphin Park | FAQ",
      metaOgDescriptionFaq: "Answers to the most frequently asked questions before your visit.",
      heroTag: "No Barriers, Only Happiness",
      heroTitle: "What You Need to Know About Dolphin Therapy",
      heroText:
        "Dolphin therapy is a complementary therapy approach that aims to support physical, emotional, and social development through controlled interaction with dolphins under the guidance of experts.",
      heroCtaPrimary: "See Program Info",
      heroCtaSecondary: "Get in Touch",
      homeHighlightsTitle: "Who Is It Recommended For?",
      homeHighlightsText:
        "Dolphin therapy does not replace medical treatment; however, it is often used as a supportive method in many cases.",
      homeFocusList1: "Autism spectrum disorder and developmental delays",
      homeFocusList2: "Down syndrome and learning difficulties",
      homeFocusList3: "Attention deficit hyperactivity disorder",
      homeFocusList4: "Muscle tone problems and coordination difficulties",
      homeFocusList5: "Anxiety, low self-confidence, and social communication problems",
      homeCard1Title: "Autism and Developmental Delays",
      homeCard1Text:
        "It may support motivation for individuals with autism spectrum conditions and developmental delays.",
      homeCard2Title: "Attention and Social Communication",
      homeCard2Text:
        "It may be supportive for attention difficulties, social communication challenges, and confidence issues.",
      homeCard3Title: "Physical Support Areas",
      homeCard3Text:
        "Water-based activities may help support coordination, balance, and muscle tone development.",
      homeExperienceTitle: "Potential Benefits",
      homeExperienceText:
        "The goal of dolphin therapy programs is to increase participant motivation and support the learning process in a fun environment.",
      homeExperienceList1: "Supporting balance and coordination through movement in water",
      homeExperienceList2: "Contributing to reduced anxiety and increased self-confidence",
      homeExperienceList3: "Offering hope and morale for families with a holistic experience",
      homeScienceTitle: "Scientific View and Limitations",
      homeScienceText:
        "Although positive experience reports exist, scientific studies are still limited and results may vary among individuals. Therefore, this approach should not be considered a miracle treatment, but rather additional support alongside existing medical and educational programs.",
      homeEthicsTitle: "Safety and Ethical Considerations",
      homeEthicsText:
        "When selecting a dolphin therapy program, both participant safety and dolphin welfare must be considered. A professional team, hygiene standards, emergency planning, and ethical animal care are essential.",
      homePlanningText:
        "Program content, duration, and goals should be clarified in advance, and each participant's health status should be assessed by experts.",
      homeShowcaseTitle: "Create Unforgettable Memories with Dolphins",
      homeShowcaseText:
        "Create unforgettable memories with dolphins. We are waiting for you with our show and therapy programs.",
      homeShowcaseNote:
        "By publishing your own park showcase video here, you can directly present the natural environment and visitor experience.",
      homeTherapyTitle: "What is Dolphin Therapy?",
      homeTherapyText:
        "Dolphin therapy is a complementary therapy approach that aims to support physical, emotional, and social development through controlled interaction with dolphins under the guidance of experts. Although it is generally preferred for children, adults can also benefit from these programs.",
      homeTarget1Title: "Who Is It For?",
      homeTarget1Text: "Autism spectrum conditions, developmental delays, and learning difficulties.",
      homeTarget2Title: "Support Areas",
      homeTarget2Text: "Attention challenges, coordination difficulties, and social communication skills.",
      homeTarget3Title: "Potential Benefits",
      homeTarget3Text: "Higher motivation, confidence support, and improved balance through water movement.",
      aboutTitle: "About Dolphin Park",
      aboutText:
        "Dolphin Park was founded to combine love for the sea with educational and fun experiences.",
      aboutMissionTitle: "Our Mission",
      aboutMissionText:
        "To deliver unforgettable moments while prioritizing animal welfare and education.",
      aboutVisionTitle: "Our Vision",
      aboutVisionText:
        "To become the region's most loved family entertainment and awareness center.",
      aboutSafetyTitle: "Safety and Quality",
      aboutSafetyText:
        "International safety standards and professional supervision are applied in all activities.",
      aboutScienceTitle: "Scientific View and Limitations",
      aboutScienceText:
        "Although many positive experiences are reported, scientific evidence is still limited and outcomes may vary by individual. This approach should not be treated as a replacement for medical care.",
      aboutEthicsTitle: "Safety and Ethical Principles",
      aboutEthicsText:
        "Participant safety, hygiene, emergency planning, and ethical dolphin welfare standards should be core criteria when selecting a program.",
      ticketsTitle: "Tickets and Visit Information",
      ticketsText:
        "This website is for information only. No payments are processed online.",
      ticketsTableHeadType: "Program Type",
      ticketsTableHeadPrice: "Fee",
      ticketsTableHeadNote: "Description",
      ticketsAdult: "Assessment Session",
      ticketsChild: "Support Program (Child)",
      ticketsFamily: "Family Counseling Package",
      ticketsCurrency: "TRY",
      ticketsNoteAdult: "Expert interview + planning",
      ticketsNoteChild: "Planned based on age and health profile",
      ticketsNoteFamily: "Information + support sessions",
      ticketsHoursTitle: "Opening Hours",
      ticketsHoursText: "Every day 10:00 - 19:00",
      ticketsPolicyTitle: "Visitor Notes",
      ticketsPolicyText:
        "We recommend arriving at least 30 minutes before show time.",
      ticketsQuickInfoLabel: "Quick Info",
      ticketsMetaProgramLabel: "Program",
      ticketsMetaProgramValue: "3 options",
      ticketsMetaPaymentLabel: "Payment",
      ticketsMetaPaymentValue: "No online payment",
      ticketsContactCta: "Call Us for Reservation",
      ticketsDisclaimerTitle: "Important Notice",
      ticketsDisclaimerText:
        "Programs are not a substitute for medical treatment. Planning should be made with expert physicians and therapists.",
      contactTitle: "Contact",
      contactText:
        "For questions, reach us via phone, email, or social channels.",
      contactPhoneLabel: "Phone",
      contactEmailLabel: "Email",
      contactAddressLabel: "Address",
      contactAddressValue: "Moonlight Beach, Merkez, 152. Sk., 07980 Kemer/Antalya",
      contactMapTitle: "Location",
      contactDirectLinesLabel: "Direct Lines",
      contactResponseTitle: "Response Time",
      contactResponseText: "We respond to your messages within the same day.",
      contactReachTitle: "Get in Touch",
      contactReachText:
        "Program content, duration, and goals vary by participant. Share health details with our expert team for suitable planning.",
      faqTitle: "Frequently Asked Questions",
      faqText: "Find the most common questions before your visit.",
      faqQ1: "Can I pay by credit card in the park?",
      faqA1:
        "This website is informational only. Payments are handled on site or via contact guidance.",
      faqQ2: "Is there an age limit for children?",
      faqA2: "Children under 4 can enter free with family supervision.",
      faqQ3: "Is parking available?",
      faqA3: "Yes, free parking is available for our visitors.",
      faqQ4: "Does dolphin therapy replace medical treatment?",
      faqA4:
        "No. It should be considered as a supportive method alongside existing medical and educational programs.",
      faqQ5: "What should we check before choosing a program?",
      faqA5:
        "Expert team quality, hygiene conditions, emergency plans, and ethical dolphin welfare standards are key criteria.",
      faqNeedHelpLabel: "Need Help?",
      faqMetaCountLabel: "FAQ",
      faqMetaCountValue: "5 updated topics",
      faqMetaSupportLabel: "Support",
      faqMetaSupportValue: "Expert team",
      faqQuickGuideTitle: "Quick Navigation",
      faqQuickGuideText:
        "For program-related questions, visit the Tickets page; for detailed assistance, go to the Contact page.",
      faqVisitQuestionsTitle: "Visit Questions",
      faqProgramQuestionsTitle: "Program Questions",
      footerText: "Dolphin Park. All rights reserved."
    },
    ru: {
      brandName: "Dolphin Park",
      navHome: "Главная",
      navAbout: "О нас",
      navTickets: "Билеты",
      navContact: "Контакты",
      navFaq: "FAQ",
      metaTitleHome: "Dolphin Park | Главная",
      metaDescriptionHome:
        "Официальный информационный сайт Dolphin Park: шоу, информация о посещении, контакты и часто задаваемые вопросы.",
      metaOgTitleHome: "Dolphin Park",
      metaOgDescriptionHome:
        "Семейный, увлекательный и информативный опыт Dolphin Park.",
      metaTitleAbout: "Dolphin Park | О нас",
      metaDescriptionAbout: "История Dolphin Park, миссия и подход к безопасности.",
      metaOgTitleAbout: "Dolphin Park | О нас",
      metaOgDescriptionAbout: "Видение, миссия и стандарты качества Dolphin Park.",
      metaTitleTickets: "Dolphin Park | Билеты",
      metaDescriptionTickets:
        "Информация о билетах, расписании и посещении Dolphin Park. Онлайн-оплаты нет.",
      metaOgTitleTickets: "Dolphin Park | Билеты",
      metaOgDescriptionTickets: "Информационные цены и детали посещения.",
      metaTitleContact: "Dolphin Park | Контакты",
      metaDescriptionContact: "Контактные данные Dolphin Park, адрес и карта локации.",
      metaOgTitleContact: "Dolphin Park | Контакты",
      metaOgDescriptionContact: "Телефон, электронная почта и адрес.",
      metaTitleFaq: "Dolphin Park | FAQ",
      metaDescriptionFaq:
        "Часто задаваемые вопросы Dolphin Park и информация перед посещением.",
      metaOgTitleFaq: "Dolphin Park | FAQ",
      metaOgDescriptionFaq: "Ответы на самые частые вопросы перед визитом.",
      heroTag: "Без барьеров, только радость",
      heroTitle: "Что нужно знать о дельфинотерапии",
      heroText:
        "Узнайте о наших программах, которые помогают физическому, эмоциональному и социальному развитию через контролируемое взаимодействие с дельфинами под наблюдением специалистов.",
      heroCtaPrimary: "Смотреть информацию о программе",
      heroCtaSecondary: "Связаться с нами",
      homeHighlightsTitle: "Кому это подходит?",
      homeHighlightsText:
        "Дельфинотерапия не заменяет медицинское лечение; в подходящих случаях она рассматривается как поддерживающий подход.",
      homeFocusList1: "Расстройства аутистического спектра и задержки развития",
      homeFocusList2: "Синдром Дауна и трудности в обучении",
      homeFocusList3: "Синдром дефицита внимания и гиперактивности",
      homeFocusList4: "Проблемы мышечного тонуса и координации",
      homeFocusList5: "Тревожность, низкая уверенность в себе и трудности социальной коммуникации",
      homeCard1Title: "Аутизм и задержки развития",
      homeCard1Text:
        "Может поддерживать мотивацию у людей с расстройствами аутистического спектра и задержками развития.",
      homeCard2Title: "Внимание и социальная коммуникация",
      homeCard2Text:
        "Может быть полезной при трудностях с вниманием, социальной коммуникацией и уверенностью в себе.",
      homeCard3Title: "Области физической поддержки",
      homeCard3Text:
        "Водные активности могут способствовать развитию координации, баланса и мышечного тонуса.",
      homeExperienceTitle: "Возможные преимущества",
      homeExperienceText:
        "Цель программ - повысить мотивацию участника и поддержать обучение в позитивной и вовлекающей среде.",
      homeExperienceList1: "Поддержка баланса и координации через движение в воде",
      homeExperienceList2: "Снижение тревожности и укрепление уверенности в себе",
      homeExperienceList3: "Надежда и моральная поддержка для семей благодаря целостному подходу",
      homeScienceTitle: "Научный взгляд и ограничения",
      homeScienceText:
        "Несмотря на множество положительных отзывов, научные данные о дельфинотерапии пока остаются ограниченными. Этот подход следует рассматривать не как чудо-лечение, а как дополнительную поддержку рядом с существующими медицинскими и образовательными программами.",
      homeEthicsTitle: "Безопасность и этические вопросы",
      homeEthicsText:
        "При выборе программы ключевыми критериями являются безопасность участника, условия гигиены, планы экстренных действий и этичные стандарты содержания дельфинов.",
      homePlanningText:
        "Содержание программы, длительность и цели должны быть заранее определены, а состояние здоровья участника должно оцениваться экспертной командой.",
      homeShowcaseTitle: "Видео-презентация парка",
      homeShowcaseText:
        "Этот блок выделен для презентационных видео вашего парка. Даже короткое обзорное видео заметно повышает доверие и общий эффект страницы.",
      homeShowcaseNote:
        "Чтобы использовать собственное видео парка, достаточно обновить путь к видеофайлу в этом разделе.",
      homeTherapyTitle: "Что такое дельфинотерапия?",
      homeTherapyText:
        "Дельфинотерапия - это дополнительный подход, который поддерживает физическое, эмоциональное и социальное развитие через контролируемое взаимодействие с дельфинами под наблюдением специалистов.",
      homeTarget1Title: "Для кого?",
      homeTarget1Text: "Для людей с РАС, задержками развития и трудностями в обучении.",
      homeTarget2Title: "Области поддержки",
      homeTarget2Text: "Трудности внимания, координации и навыков социальной коммуникации.",
      homeTarget3Title: "Возможные преимущества",
      homeTarget3Text: "Более высокая мотивация, поддержка уверенности и улучшение баланса в воде.",
      aboutTitle: "О Dolphin Park",
      aboutText:
        "Dolphin Park был создан, чтобы объединить любовь к морю с познавательными и увлекательными впечатлениями.",
      aboutMissionTitle: "Наша миссия",
      aboutMissionText:
        "Дарить незабываемые моменты, уделяя приоритетное внимание благополучию животных и просвещению.",
      aboutVisionTitle: "Наше видение",
      aboutVisionText:
        "Стать самым любимым семейным центром отдыха и осознанности в регионе.",
      aboutSafetyTitle: "Безопасность и качество",
      aboutSafetyText:
        "Во всех активностях применяются международные стандарты безопасности и профессиональный контроль.",
      aboutScienceTitle: "Научный взгляд и ограничения",
      aboutScienceText:
        "Хотя сообщается о множестве положительных случаев, научные данные пока ограничены, а результаты могут различаться у разных людей. Этот подход не должен рассматриваться как замена медицинской помощи.",
      aboutEthicsTitle: "Безопасность и этические принципы",
      aboutEthicsText:
        "Безопасность участников, гигиена, планы экстренных действий и соблюдение этических стандартов ухода за дельфинами должны быть основными критериями при выборе программы.",
      ticketsTitle: "Билеты и информация о посещении",
      ticketsText:
        "Этот сайт предназначен только для информирования. Онлайн-оплата не принимается.",
      ticketsTableHeadType: "Тип программы",
      ticketsTableHeadPrice: "Стоимость",
      ticketsTableHeadNote: "Описание",
      ticketsAdult: "Оценочная сессия",
      ticketsChild: "Программа поддержки (для детей)",
      ticketsFamily: "Пакет семейных консультаций",
      ticketsCurrency: "TRY",
      ticketsNoteAdult: "Консультация специалиста + планирование",
      ticketsNoteChild: "Планируется с учетом возраста и состояния здоровья",
      ticketsNoteFamily: "Информирование + поддерживающие сессии",
      ticketsHoursTitle: "Часы работы",
      ticketsHoursText: "Ежедневно 10:00 - 19:00",
      ticketsPolicyTitle: "Заметки для посетителей",
      ticketsPolicyText:
        "Рекомендуем прибыть минимум за 30 минут до начала шоу.",
      ticketsQuickInfoLabel: "Быстрая информация",
      ticketsMetaProgramLabel: "Программа",
      ticketsMetaProgramValue: "3 варианта",
      ticketsMetaPaymentLabel: "Оплата",
      ticketsMetaPaymentValue: "Без онлайн-оплаты",
      ticketsContactCta: "Позвоните нам для записи",
      ticketsDisclaimerTitle: "Важная информация",
      ticketsDisclaimerText:
        "Программы не заменяют медицинское лечение. Планирование рекомендуется проводить совместно с профильными врачами и терапевтами.",
      contactTitle: "Контакты",
      contactText:
        "По вопросам свяжитесь с нами по телефону, электронной почте или через социальные каналы.",
      contactPhoneLabel: "Телефон",
      contactEmailLabel: "Эл. почта",
      contactAddressLabel: "Адрес",
      contactAddressValue: "Moonlight Beach, Merkez, 152. Sk., 07980 Kemer/Antalya",
      contactMapTitle: "Локация",
      contactDirectLinesLabel: "Прямые контакты",
      contactResponseTitle: "Время ответа",
      contactResponseText: "Мы отвечаем на сообщения в течение того же дня.",
      contactReachTitle: "Свяжитесь с нами",
      contactReachText:
        "Содержание программы, длительность и цели зависят от участника. Поделитесь медицинской информацией с нашей экспертной командой для корректного планирования.",
      faqTitle: "Часто задаваемые вопросы",
      faqText: "Здесь вы найдете самые популярные вопросы перед визитом.",
      faqQ1: "Можно ли оплатить картой в парке?",
      faqA1:
        "Этот сайт носит информационный характер. Оплата проводится на месте или по инструкции при обращении.",
      faqQ2: "Есть ли возрастные ограничения для детей?",
      faqA2: "Дети до 4 лет могут пройти бесплатно в сопровождении семьи.",
      faqQ3: "Есть ли парковка?",
      faqA3: "Да, для посетителей доступна бесплатная парковка.",
      faqQ4: "Заменяет ли дельфинотерапия медицинское лечение?",
      faqA4:
        "Нет. Ее следует рассматривать как поддерживающий метод вместе с существующими медицинскими и образовательными программами.",
      faqQ5: "На что обратить внимание при выборе программы?",
      faqA5:
        "Ключевые критерии: квалификация специалистов, условия гигиены, планы экстренных действий и этические стандарты содержания дельфинов.",
      faqNeedHelpLabel: "Нужна помощь?",
      faqMetaCountLabel: "FAQ",
      faqMetaCountValue: "5 актуальных тем",
      faqMetaSupportLabel: "Поддержка",
      faqMetaSupportValue: "Экспертная команда",
      faqQuickGuideTitle: "Быстрый переход",
      faqQuickGuideText:
        "По вопросам программ перейдите на страницу Билеты, а для подробной помощи - на страницу Контакты.",
      faqVisitQuestionsTitle: "Вопросы о посещении",
      faqProgramQuestionsTitle: "Вопросы о программах",
      footerText: "Dolphin Park. Все права защищены."
    },
    de: {
      brandName: "Dolphin Park",
      navHome: "Startseite",
      navAbout: "Über uns",
      navTickets: "Tickets",
      navContact: "Kontakt",
      navFaq: "FAQ",
      metaTitleHome: "Dolphin Park | Startseite",
      metaDescriptionHome:
        "Offizielle Informationsseite von Dolphin Park: Shows, Besuchsinfos, Kontakt und häufig gestellte Fragen.",
      metaOgTitleHome: "Dolphin Park",
      metaOgDescriptionHome:
        "Familienfreundliches, unterhaltsames und informatives Dolphin Park Erlebnis.",
      metaTitleAbout: "Dolphin Park | Über uns",
      metaDescriptionAbout: "Geschichte, Mission und Sicherheitsansatz von Dolphin Park.",
      metaOgTitleAbout: "Dolphin Park | Über uns",
      metaOgDescriptionAbout: "Vision, Mission und Qualitätsverständnis von Dolphin Park.",
      metaTitleTickets: "Dolphin Park | Tickets",
      metaDescriptionTickets:
        "Dolphin Park Ticket-, Zeit- und Besuchsinformationen. Keine Online-Zahlung.",
      metaOgTitleTickets: "Dolphin Park | Tickets",
      metaOgDescriptionTickets: "Informationsbasierte Preise und Besuchsdetails.",
      metaTitleContact: "Dolphin Park | Kontakt",
      metaDescriptionContact: "Kontaktinformationen, Adresse und Standortkarte von Dolphin Park.",
      metaOgTitleContact: "Dolphin Park | Kontakt",
      metaOgDescriptionContact: "Telefon-, E-Mail- und Adressinformationen.",
      metaTitleFaq: "Dolphin Park | FAQ",
      metaDescriptionFaq:
        "Häufig gestellte Fragen zu Dolphin Park und Informationen vor dem Besuch.",
      metaOgTitleFaq: "Dolphin Park | FAQ",
      metaOgDescriptionFaq: "Antworten auf die häufigsten Fragen vor Ihrem Besuch.",
      heroTag: "Keine Barrieren, nur Freude",
      heroTitle: "Was Sie über Delfintherapie wissen sollten",
      heroText:
        "Erfahren Sie mehr über unsere Programme, die die körperliche, emotionale und soziale Entwicklung durch kontrollierte Interaktion mit Delfinen unter fachlicher Begleitung unterstützen.",
      heroCtaPrimary: "Programminfos ansehen",
      heroCtaSecondary: "Kontakt aufnehmen",
      homeHighlightsTitle: "Für wen ist es geeignet?",
      homeHighlightsText:
        "Delfintherapie ersetzt keine medizinische Behandlung; in geeigneten Fällen wird sie als unterstützender Ansatz betrachtet.",
      homeFocusList1: "Autismus-Spektrum-Störungen und Entwicklungsverzögerungen",
      homeFocusList2: "Down-Syndrom und Lernschwierigkeiten",
      homeFocusList3: "Aufmerksamkeitsdefizit- und Hyperaktivitätsstörung (ADHS)",
      homeFocusList4: "Probleme mit Muskeltonus und Koordination",
      homeFocusList5: "Ängste, geringes Selbstvertrauen und soziale Kommunikationsprobleme",
      homeCard1Title: "Autismus und Entwicklungsverzögerungen",
      homeCard1Text:
        "Kann die Motivation bei Menschen mit Autismus-Spektrum-Störungen und Entwicklungsverzögerungen unterstützen.",
      homeCard2Title: "Aufmerksamkeit und soziale Kommunikation",
      homeCard2Text:
        "Kann bei Aufmerksamkeitsproblemen, sozialer Kommunikation und geringem Selbstvertrauen unterstützend wirken.",
      homeCard3Title: "Bereiche körperlicher Unterstützung",
      homeCard3Text:
        "Wasserbasierte Aktivitäten können Koordination, Gleichgewicht und Muskeltonus fördern.",
      homeExperienceTitle: "Mögliche Vorteile",
      homeExperienceText:
        "Ziel der Programme ist es, die Motivation der Teilnehmenden zu stärken und das Lernen in einer positiven, motivierenden Umgebung zu unterstützen.",
      homeExperienceList1: "Förderung von Gleichgewicht und Koordination durch Bewegung im Wasser",
      homeExperienceList2: "Beitrag zur Verringerung von Angst und zur Stärkung des Selbstvertrauens",
      homeExperienceList3: "Ganzheitliche Erfahrung mit Hoffnung und moralischer Unterstützung für Familien",
      homeScienceTitle: "Wissenschaftliche Sicht und Grenzen",
      homeScienceText:
        "Obwohl viele positive Erfahrungen berichtet werden, ist die wissenschaftliche Evidenz zur Delfintherapie weiterhin begrenzt. Dieser Ansatz sollte nicht als Wundermethode verstanden werden, sondern als ergänzende Unterstützung neben bestehenden medizinischen und pädagogischen Programmen.",
      homeEthicsTitle: "Sicherheit und ethische Aspekte",
      homeEthicsText:
        "Bei der Programmauswahl sind Teilnehmendensicherheit, Hygienestandards, Notfallplanung und ethische Delfinwohlfahrtsstandards zentrale Kriterien.",
      homePlanningText:
        "Programminhalte, Dauer und Ziele sollten vorab klar definiert werden, und das Gesundheitsprofil der Teilnehmenden sollte vom Expertenteam bewertet werden.",
      homeShowcaseTitle: "Park-Vorstellungsvideo",
      homeShowcaseText:
        "Dieser Bereich ist für Ihre Park-Videos vorgesehen. Selbst ein kurzes Vorstellungsvideo kann Vertrauen und Wirkung der Seite deutlich erhöhen.",
      homeShowcaseNote:
        "Um Ihr eigenes Park-Video zu verwenden, müssen Sie in diesem Abschnitt nur den Videopfad aktualisieren.",
      homeTherapyTitle: "Was ist Delfintherapie?",
      homeTherapyText:
        "Delfintherapie ist ein ergänzender Ansatz, der die körperliche, emotionale und soziale Entwicklung durch kontrollierte Interaktion mit Delfinen unter fachlicher Aufsicht unterstützt.",
      homeTarget1Title: "Für wen?",
      homeTarget1Text: "Autismus-Spektrum-Störungen, Entwicklungsverzögerungen und Lernschwierigkeiten.",
      homeTarget2Title: "Unterstützungsbereiche",
      homeTarget2Text: "Aufmerksamkeitsprobleme, Koordinationsschwierigkeiten und soziale Kommunikationsfähigkeiten.",
      homeTarget3Title: "Mögliche Vorteile",
      homeTarget3Text: "Mehr Motivation, Unterstützung des Selbstvertrauens und besseres Gleichgewicht durch Bewegung im Wasser.",
      aboutTitle: "Über Dolphin Park",
      aboutText:
        "Dolphin Park wurde gegründet, um die Liebe zum Meer mit lehrreichen und unterhaltsamen Erlebnissen zu verbinden.",
      aboutMissionTitle: "Unsere Mission",
      aboutMissionText:
        "Unvergessliche Momente schaffen und dabei Tierwohl sowie Bildung in den Mittelpunkt stellen.",
      aboutVisionTitle: "Unsere Vision",
      aboutVisionText:
        "Das beliebteste Familien- und Erlebniszentrum der Region zu werden.",
      aboutSafetyTitle: "Sicherheit und Qualität",
      aboutSafetyText:
        "Bei allen Aktivitäten gelten internationale Sicherheitsstandards und professionelle Aufsicht.",
      aboutScienceTitle: "Wissenschaftliche Sicht und Grenzen",
      aboutScienceText:
        "Obwohl viele positive Erfahrungen berichtet werden, ist die wissenschaftliche Evidenz weiterhin begrenzt und die Ergebnisse können individuell unterschiedlich ausfallen. Dieser Ansatz darf nicht als Ersatz für medizinische Versorgung verstanden werden.",
      aboutEthicsTitle: "Sicherheit und ethische Grundsätze",
      aboutEthicsText:
        "Teilnehmendensicherheit, Hygiene, Notfallplanung und ethische Standards im Umgang mit Delfinen sollten zentrale Kriterien bei der Programmauswahl sein.",
      ticketsTitle: "Tickets und Besuchsinformationen",
      ticketsText:
        "Diese Website dient nur der Information. Online-Zahlungen werden nicht verarbeitet.",
      ticketsTableHeadType: "Programmtyp",
      ticketsTableHeadPrice: "Preis",
      ticketsTableHeadNote: "Beschreibung",
      ticketsAdult: "Bewertungssitzung",
      ticketsChild: "Unterstützungsprogramm (Kind)",
      ticketsFamily: "Familienberatungs-Paket",
      ticketsCurrency: "TRY",
      ticketsNoteAdult: "Fachgespräch + Planung",
      ticketsNoteChild: "Geplant nach Alter und Gesundheitsprofil",
      ticketsNoteFamily: "Information + Unterstützungssitzungen",
      ticketsHoursTitle: "Öffnungszeiten",
      ticketsHoursText: "Täglich 10:00 - 19:00",
      ticketsPolicyTitle: "Besucherhinweise",
      ticketsPolicyText:
        "Wir empfehlen, mindestens 30 Minuten vor Showbeginn anzukommen.",
      ticketsQuickInfoLabel: "Schnellinfo",
      ticketsMetaProgramLabel: "Programm",
      ticketsMetaProgramValue: "3 Optionen",
      ticketsMetaPaymentLabel: "Zahlung",
      ticketsMetaPaymentValue: "Keine Online-Zahlung",
      ticketsContactCta: "Für Reservierung anrufen",
      ticketsDisclaimerTitle: "Wichtiger Hinweis",
      ticketsDisclaimerText:
        "Programme sind kein Ersatz für medizinische Behandlung. Die Planung sollte gemeinsam mit Fachärzten und Therapeuten erfolgen.",
      contactTitle: "Kontakt",
      contactText:
        "Bei Fragen erreichen Sie uns per Telefon, E-Mail oder über soziale Kanäle.",
      contactPhoneLabel: "Telefon",
      contactEmailLabel: "E-Mail",
      contactAddressLabel: "Adresse",
      contactAddressValue: "Moonlight Beach, Merkez, 152. Sk., 07980 Kemer/Antalya",
      contactMapTitle: "Standort",
      contactDirectLinesLabel: "Direkte Leitungen",
      contactResponseTitle: "Antwortzeit",
      contactResponseText: "Wir antworten auf Ihre Nachrichten noch am selben Tag.",
      contactReachTitle: "Kontaktieren Sie uns",
      contactReachText:
        "Programminhalte, Dauer und Ziele variieren je nach Teilnehmenden. Teilen Sie Gesundheitsinformationen mit unserem Expertenteam, damit wir passend planen können.",
      faqTitle: "Häufig gestellte Fragen",
      faqText: "Hier finden Sie die häufigsten Fragen vor Ihrem Besuch.",
      faqQ1: "Kann ich im Park mit Karte bezahlen?",
      faqA1:
        "Diese Website ist rein informativ. Zahlungen erfolgen vor Ort oder gemäß Kontaktanweisungen.",
      faqQ2: "Gibt es eine Altersgrenze für Kinder?",
      faqA2: "Kinder unter 4 Jahren können in Begleitung der Familie kostenlos eintreten.",
      faqQ3: "Gibt es Parkplätze?",
      faqA3: "Ja, für unsere Besucher stehen kostenlose Parkplätze zur Verfügung.",
      faqQ4: "Ersetzt Delfintherapie die medizinische Behandlung?",
      faqA4:
        "Nein. Sie sollte als unterstützende Methode neben bestehenden medizinischen und pädagogischen Programmen betrachtet werden.",
      faqQ5: "Worauf sollte man bei der Programmauswahl achten?",
      faqA5:
        "Wichtige Kriterien sind die Qualität des Expertenteams, Hygienebedingungen, Notfallpläne und ethische Standards im Umgang mit Delfinen.",
      faqNeedHelpLabel: "Brauchen Sie Hilfe?",
      faqMetaCountLabel: "FAQ",
      faqMetaCountValue: "5 aktuelle Themen",
      faqMetaSupportLabel: "Support",
      faqMetaSupportValue: "Expertenteam",
      faqQuickGuideTitle: "Schnellnavigation",
      faqQuickGuideText:
        "Für Fragen zu Programmen besuchen Sie die Seite Tickets; für detaillierte Unterstützung gehen Sie zur Seite Kontakt.",
      faqVisitQuestionsTitle: "Besuchsfragen",
      faqProgramQuestionsTitle: "Programmfragen",
      footerText: "Dolphin Park. Alle Rechte vorbehalten."
    }
  };

  function getSelectedLanguage() {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
      return storedLanguage;
    }
    return defaultLanguage;
  }

  function setSelectedLanguage(language) {
    if (!supportedLanguages.includes(language)) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, language);
  }

  function translatePage(language) {
    const dictionary = translations[language] || translations[defaultLanguage];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key && dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (key && dictionary[key]) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const key = element.getAttribute("data-i18n-content");
      if (key && dictionary[key]) {
        element.setAttribute("content", dictionary[key]);
      }
    });

    document.documentElement.setAttribute("lang", language);
  }

  function closeLanguageMenus() {
    document.querySelectorAll(".lang-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector(".lang-trigger");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  function updateLanguageDropdownUi(language) {
    const selectedMeta = languageMeta[language] || languageMeta[defaultLanguage];

    document.querySelectorAll(".lang-current-code").forEach((node) => {
      node.textContent = selectedMeta.code;
    });
    document.querySelectorAll(".lang-current-flag").forEach((node) => {
      node.setAttribute("src", selectedMeta.flagPath);
      node.setAttribute("alt", selectedMeta.alt);
    });

    document.querySelectorAll(".lang-option").forEach((option) => {
      const optionLanguage = option.getAttribute("data-lang");
      if (optionLanguage === language) {
        option.setAttribute("aria-current", "true");
      } else {
        option.removeAttribute("aria-current");
      }
    });
  }

  function initI18n() {
    const selectedLanguage = getSelectedLanguage();

    document.querySelectorAll(".lang-dropdown").forEach((dropdown) => {
      const trigger = dropdown.querySelector(".lang-trigger");
      const options = dropdown.querySelectorAll(".lang-option");
      if (!trigger || !options.length) {
        return;
      }

      trigger.addEventListener("click", () => {
        const isOpen = dropdown.classList.contains("open");
        closeLanguageMenus();
        if (!isOpen) {
          dropdown.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const nextLanguage = option.getAttribute("data-lang");
          if (!nextLanguage || !supportedLanguages.includes(nextLanguage)) {
            return;
          }
          setSelectedLanguage(nextLanguage);
          translatePage(nextLanguage);
          updateLanguageDropdownUi(nextLanguage);
          closeLanguageMenus();
        });
      });
    });

    // Legacy select support if a select-based switcher exists in any page.
    const selectSwitchers = document.querySelectorAll(".lang-switcher");
    selectSwitchers.forEach((switcher) => {
      switcher.value = selectedLanguage;
      switcher.addEventListener("change", (event) => {
        const nextLanguage = event.target.value;
        if (!supportedLanguages.includes(nextLanguage)) {
          return;
        }
        setSelectedLanguage(nextLanguage);
        translatePage(nextLanguage);
        updateLanguageDropdownUi(nextLanguage);
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      const insideLanguageMenu =
        target && typeof target.closest === "function" ? target.closest(".lang-dropdown") : null;
      if (!insideLanguageMenu) {
        closeLanguageMenus();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLanguageMenus();
      }
    });

    translatePage(selectedLanguage);
    updateLanguageDropdownUi(selectedLanguage);
  }

  window.DolphinI18n = {
    initI18n,
    getSelectedLanguage
  };
})();
