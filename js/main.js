const translations = {
  es: {
    "nav.treatments":"TRATAMIENTOS","nav.clinics":"CLÍNICAS","nav.about":"NOSOTROS",
    "nav.promotions":"PROMOCIONES","nav.contact":"CONTACTO","nav.book":"RESERVAR CITA",
    "hero.eyebrow":"MEDICINA ESTÉTICA AVANZADA",
    "hero.title":"LA BELLEZA<br>EN SU MÁXIMA<br><em>EXPRESIÓN</em>",
    "hero.statement":"Porque cuando te sientes eterna,<br>el mundo te percibe infinita.",
    "hero.discover":"DESCUBRIR MÁS",
    "intro.kicker":"NUESTRA FILOSOFÍA",
    "intro.title":"Cada piel.<br><em>Cada persona.</em>",
    "intro.text":"Entendemos la belleza como algo personal. Escuchamos, analizamos y creamos tratamientos adaptados a ti.",
    "treatments.kicker":"TRATAMIENTOS",
    "treatments.title":"Tecnología, ciencia<br><em>y naturalidad.</em>"
  },
  ca: {
    "nav.treatments":"TRACTAMENTS","nav.clinics":"CLÍNIQUES","nav.about":"NOSALTRES",
    "nav.promotions":"PROMOCIONS","nav.contact":"CONTACTE","nav.book":"RESERVAR CITA",
    "hero.eyebrow":"MEDICINA ESTÈTICA AVANÇADA",
    "hero.title":"LA BELLESA<br>EN LA SEVA MÀXIMA<br><em>EXPRESSIÓ</em>",
    "hero.statement":"Perquè quan et sents eterna,<br>el món et percep infinita.",
    "hero.discover":"DESCOBRIR MÉS"
  },
  en: {
    "nav.treatments":"TREATMENTS","nav.clinics":"CLINICS","nav.about":"ABOUT US",
    "nav.promotions":"PROMOTIONS","nav.contact":"CONTACT","nav.book":"BOOK NOW",
    "hero.eyebrow":"ADVANCED AESTHETIC MEDICINE",
    "hero.title":"BEAUTY<br>AT ITS HIGHEST<br><em>EXPRESSION</em>",
    "hero.statement":"Because when you feel eternal,<br>the world perceives you as infinite.",
    "hero.discover":"DISCOVER MORE"
  },
  fr: {
    "nav.treatments":"TRAITEMENTS","nav.clinics":"CLINIQUES","nav.about":"À PROPOS",
    "nav.promotions":"PROMOTIONS","nav.contact":"CONTACT","nav.book":"PRENDRE RENDEZ-VOUS",
    "hero.eyebrow":"MÉDECINE ESTHÉTIQUE AVANCÉE",
    "hero.title":"LA BEAUTÉ<br>DANS SA PLUS HAUTE<br><em>EXPRESSION</em>",
    "hero.statement":"Parce que lorsque vous vous sentez éternelle,<br>le monde vous perçoit comme infinie.",
    "hero.discover":"DÉCOUVRIR"
  }
};

let langIndex = 0;
const languages = ["es","ca","en","fr"];

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    if (dict[el.dataset.i18nHtml]) el.innerHTML = dict[el.dataset.i18nHtml];
  });

  document.documentElement.lang = lang;
  document.getElementById("currentLang").textContent = lang.toUpperCase();
  localStorage.setItem("lm-language", lang);
}

const saved = localStorage.getItem("lm-language");
if (saved && languages.includes(saved)) langIndex = languages.indexOf(saved);
applyLanguage(languages[langIndex]);

document.getElementById("langButton").addEventListener("click", () => {
  langIndex = (langIndex + 1) % languages.length;
  applyLanguage(languages[langIndex]);
});
