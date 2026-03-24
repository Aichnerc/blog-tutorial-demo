// Language configuration
export const languages = {
  en: 'English',
  de: 'Deutsch'
};

export const defaultLang = 'en';

// Language detection and URL helpers
export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// UI translations
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    'nav.menu': 'Menu',
    'theme.toggle': 'Toggle theme',
    'page.home.title': 'Home Page',
    'page.about.title': 'About Me',
    'page.blog.title': 'My Astro Learning Blog',
    'page.tags.title': 'Tag Index',
    'page.tags.tagged': 'Posts tagged with',
    'blog.written_by': 'Written by:',
    'greeting.new': 'New Greeting',
    'greeting.thanks': 'Thank you for visiting!',
    'about.subtitle': 'About Me',
    'about.intro': 'Here are a few facts about me:',
    'about.skills': 'My skills are:',
    'about.happy': 'I am happy to be learning Astro!',
    'about.finished': 'I finished this tutorial!',
    'about.goal': 'My goal is to finish in 3 days.',
    'rss.title': 'Astro Learner | Blog',
    'rss.description': 'My journey learning Astro',
    'post.title.1': 'My First Blog Post',
    'post.desc.1': 'This is the first post of my new Astro blog.',
    'post.title.2': 'My Second Blog Post',
    'post.desc.2': 'After learning some Astro, I couldn\'t stop!',
    'post.title.3': 'My Third Blog Post',
    'post.desc.3': 'I had some challenges, but asking in the community really helped!',
    'post.title.4': 'My Fourth Blog Post',
    'post.desc.4': 'This post will show up on its own!'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    'nav.menu': 'Menü',
    'theme.toggle': 'Theme wechseln',
    'page.home.title': 'Startseite',
    'page.about.title': 'Über mich',
    'page.blog.title': 'Mein Astro Lern-Blog',
    'page.tags.title': 'Tag-Übersicht',
    'page.tags.tagged': 'Beiträge mit Tag',
    'blog.written_by': 'Geschrieben von:',
    'greeting.new': 'Neue Begrüßung',
    'greeting.thanks': 'Danke für Ihren Besuch!',
    'about.subtitle': 'Über mich',
    'about.intro': 'Hier sind ein paar Fakten über mich:',
    'about.skills': 'Meine Fähigkeiten sind:',
    'about.happy': 'Ich freue mich, Astro zu lernen!',
    'about.finished': 'Ich habe dieses Tutorial abgeschlossen!',
    'about.goal': 'Mein Ziel ist es, in 3 Tagen fertig zu werden.',
    'rss.title': 'Astro Lernender | Blog',
    'rss.description': 'Meine Reise beim Erlernen von Astro',
    'post.title.1': 'Mein erster Blog-Beitrag',
    'post.desc.1': 'Dies ist der erste Beitrag meines neuen Astro-Blogs.',
    'post.title.2': 'Mein zweiter Blog-Beitrag',
    'post.desc.2': 'Nachdem ich etwas Astro gelernt hatte, konnte ich nicht mehr aufhören!',
    'post.title.3': 'Mein dritter Blog-Beitrag',
    'post.desc.3': 'Ich hatte einige Herausforderungen, aber die Community um Hilfe zu bitten hat wirklich geholfen!',
    'post.title.4': 'Mein vierter Blog-Beitrag',
    'post.desc.4': 'Dieser Beitrag wird eigenständig angezeigt!'
  }
};