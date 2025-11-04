// js/lang.js
// Single-file language system. English default. Supports:
// - data-i18n="key"           -> sets textContent
// - data-i18n-attr="attr:key" -> sets attribute (e.g. placeholder:title:alt)
// - data-i18n-html="key"      -> sets innerHTML (use sparingly for structured content)

const translations = {
  en: {
    // NAV
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About",
    nav_contact: "Contact",

    // INDEX / HERO
    hero_title: "Welcome to Padaria Branco Quente",
    hero_subtitle: "Freshly baked bread and traditional pastries every day.",

    // MENU
    menu_hero_title: "Our Menu",
    menu_section_title: "Freshly Baked Goods",
    // Example product keys (add more if needed)
    prod_pao_title: "Pão de Monchique",
    prod_pao_desc: "Our signature bread with a crispy crust and soft interior.",
    prod_nata_title: "Pastel de Nata",
    prod_nata_desc: "Creamy custard tart with flaky pastry and cinnamon.",

    // ABOUT
    about_title: "About Us",
    our_story: "Our Story",
    hero_subtitle_about: "Three generations of baking tradition in Monchique",
    from_humble: "From Humble Beginnings",
    history_1: "Founded in 1987 by João and Maria Silva, Padaria Branco Quente started as a small neighborhood bakery serving fresh bread to the residents of Monchique.",
    history_2: "What began as a modest wood-fired oven operation has grown into a beloved local institution, now run by their daughter Ana and her husband Carlos.",

    // CONTACT
    contact_title: "Contact Us",
    contact_header: "Get in Touch",
    contact_subheader: "We’d love to hear from you! Send us a message or visit our bakery.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send Message",

    // FOOTER
    footer_rights: "All rights reserved.",
    footer_navigation: "Navigation",
    footer_hours: "Hours",
  },

  pt: {
    // NAV
    nav_home: "Início",
    nav_menu: "Menu",
    nav_about: "Sobre",
    nav_contact: "Contacto",

    // INDEX / HERO
    hero_title: "Bem-vindo à Padaria Branco Quente",
    hero_subtitle: "Pão acabado de cozer e pastelaria tradicional todos os dias.",

    // MENU
    menu_hero_title: "O Nosso Menu",
    menu_section_title: "Produtos acabados de fazer",
    prod_pao_title: "Pão de Monchique",
    prod_pao_desc: "O nosso pão emblemático, com crosta estaladiça e miolo macio.",
    prod_nata_title: "Pastel de Nata",
    prod_nata_desc: "Tarte de nata cremosa com massa folhada e canela.",

    // ABOUT
    about_title: "Sobre Nós",
    our_story: "A Nossa História",
    hero_subtitle_about: "Três gerações de tradição de padaria em Monchique",
    from_humble: "De Humildes Começos",
    history_1: "Fundada em 1987 por João e Maria Silva, a Padaria Branco Quente começou como uma pequena padaria de bairro que servia pão fresco aos moradores de Monchique.",
    history_2: "O que começou como um modesto forno a lenha cresceu para se tornar uma instituição querida, agora gerida pela filha Ana e o marido Carlos.",

    // CONTACT
    contact_title: "Contacte-nos",
    contact_header: "Entre em Contacto",
    contact_subheader: "Adoramos ouvir de si! Envie-nos uma mensagem ou visite a padaria.",
    form_name: "Nome",
    form_email: "Email",
    form_message: "Mensagem",
    form_send: "Enviar Mensagem",

    // FOOTER
    footer_rights: "Todos os direitos reservados.",
    footer_navigation: "Navegação",
    footer_hours: "Horário",
  }
};

// make function globally available (so inline onclicks keep working)
window.setLanguage = function(lang) {
  if (!translations[lang]) lang = 'en';
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('site_lang', lang);

  // translate textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const value = translations[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  // translate attributes: syntax data-i18n-attr="placeholder:contact_name,title:tooltip"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const mapping = el.getAttribute('data-i18n-attr'); // e.g. placeholder:contact_name
    mapping.split(',').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && translations[lang][key]) {
        el.setAttribute(attr, translations[lang][key]);
      }
    });
  });

  // translate innerHTML when necessary (use sparingly) - keys defined in translations
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  // update language button visual state if present
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('opacity-60', btn.getAttribute('data-lang') !== lang);
  });
};

// initialize on DOM load using saved language or default 'en'
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site_lang') || 'en';
  window.setLanguage(saved);

  // hook up buttons with data-lang-btn if onclick not used
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) window.setLanguage(lang);
    });
  });
});
