const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_menu: "Menu",
        nav_about: "About Us",
        nav_contact: "Contact",

        // Hero / About Page
        about_title: "About Us",
        about_subtitle: "A story baked with tradition and passion.",
        about_story_title: "Our Story",
        about_story_text: "Padaria Deliciosa was founded in 1987 in the heart of Monchique. What started as a small family bakery has grown into a beloved place for locals and visitors who seek the authentic taste of traditional Portuguese bread and pastries.",
        about_tradition_title: "Genuine Tradition",
        about_tradition_text: "Every day, our team starts before dawn to knead fresh dough, bake crispy bread, and prepare delicious pastries — always using local ingredients and traditional techniques passed down through generations.",
        about_team_title: "Meet Our Team",
        about_team_carlos: "Carlos preparing traditional pastries.",
        about_team_maria: "Maria shaping fresh bread dough at dawn.",
        about_team_joao: "João arranging pastries in the bakery display.",
        about_mission_title: "Our Mission",
        about_mission_text: "To preserve the true essence of Portuguese baking while creating moments of joy for everyone who visits our bakery.",

        // Contact Page
        contact_title: "Contact Us",
        contact_subtitle: "We would love to hear from you.",
        contact_form_title: "Send Us a Message",
        contact_name: "Your Name",
        contact_email: "Email Address",
        contact_message: "Your Message",
        contact_button: "Send Message",
        contact_visit_title: "Visit Our Bakery",
        contact_address: "Address",
        contact_phone: "Phone",
        contact_email_text: "Email",
        contact_hours: "Opening Hours",
        contact_map_text: "Google Map would appear here",
        contact_map_subtext: "Showing our bakery location in Monchique",

        // Footer
        footer_description: "Traditional Portuguese bakery in Monchique since 1987.",
        footer_navigation: "Navigation",
        footer_hours: "Hours",
        footer_follow: "Follow Us",
        footer_rights: "All rights reserved.",

        // Opening Hours in Footer
        hours_weekdays: "Monday - Friday: 6am - 7pm",
        hours_saturday: "Saturday: 6am - 5pm",
        hours_sunday: "Sunday: 7am - 2pm",
    },

    pt: {
        // Navegação
        nav_home: "Início",
        nav_menu: "Menu",
        nav_about: "Sobre Nós",
        nav_contact: "Contacto",

        // Hero / Sobre
        about_title: "Sobre Nós",
        about_subtitle: "Uma história feita com tradição e paixão.",
        about_story_title: "A Nossa História",
        about_story_text: "A Padaria Deliciosa foi fundada em 1987 no coração de Monchique. O que começou como uma pequena padaria familiar tornou-se num local querido por locais e visitantes que procuram o verdadeiro sabor do pão e da pastelaria tradicional portuguesa.",
        about_tradition_title: "Tradição Autêntica",
        about_tradition_text: "Todos os dias, a nossa equipa começa antes do amanhecer para amassar a massa fresca, cozer pão estaladiço e preparar doces deliciosos — sempre com ingredientes locais e técnicas tradicionais passadas de geração em geração.",
        about_team_title: "A Nossa Equipa",
        about_team_carlos: "Carlos a preparar doçaria tradicional.",
        about_team_maria: "Maria a moldar massa de pão fresco ao amanhecer.",
        about_team_joao: "João a organizar os pastéis na vitrine da padaria.",
        about_mission_title: "A Nossa Missão",
        about_mission_text: "Preservar a verdadeira essência da padaria portuguesa, criando momentos de alegria para todos os que nos visitam.",

        // Contacto
        contact_title: "Fale Connosco",
        contact_subtitle: "Adoramos ouvir a sua opinião.",
        contact_form_title: "Envie-nos uma Mensagem",
        contact_name: "O Seu Nome",
        contact_email: "Endereço de Email",
        contact_message: "A Sua Mensagem",
        contact_button: "Enviar Mensagem",
        contact_visit_title: "Visite a Nossa Padaria",
        contact_address: "Morada",
        contact_phone: "Telefone",
        contact_email_text: "Email",
        contact_hours: "Horário de Funcionamento",
        contact_map_text: "O Google Maps será apresentado aqui",
        contact_map_subtext: "a mostrar a localização da nossa padaria em Monchique",

        // Rodapé
        footer_description: "Padaria tradicional portuguesa em Monchique desde 1987.",
        footer_navigation: "Navegação",
        footer_hours: "Horário",
        footer_follow: "Siga-nos",
        footer_rights: "Todos os direitos reservados.",

        // Horário no rodapé
        hours_weekdays: "Segunda - Sexta: 6h - 19h",
        hours_saturday: "Sábado: 6h - 17h",
        hours_sunday: "Domingo: 7h - 14h",
    }
};

// Function to switch languages
function switchLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const translationKey = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][translationKey]) {
            el.textContent = translations[lang][translationKey];
        }
    });
}

// Set saved or default language
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    switchLanguage(savedLang);
});
