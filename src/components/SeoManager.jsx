import { useEffect } from 'react';
import { sectionSeo, siteContent } from '../content/siteContent';

const sectionOrder = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

function getSectionKey(hash) {
  const key = hash.replace('#', '') || 'home';
  return sectionSeo[key] ? key : 'home';
}

function upsertMeta(selector, attribute, value) {
  const node = document.head.querySelector(selector);
  if (!node || !value) return;
  node.setAttribute(attribute, value);
}

function updateStructuredData(sectionKey, siteUrl) {
  const script = document.getElementById('seo-json-ld');
  if (!script) return;

  const meta = sectionSeo[sectionKey];
  const pageUrl = `${siteUrl}/${meta.path}`.replace(/\/#/, '/#');
  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteContent.name,
      jobTitle: siteContent.role,
      image: siteContent.avatar,
      url: siteUrl,
      email: siteContent.email,
      sameAs: [siteContent.github, siteContent.linkedin],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${siteContent.name} Portfolio`,
      url: siteUrl,
      description: siteContent.bio,
      inLanguage: 'en-IN',
    },
    {
      '@context': 'https://schema.org',
      '@type': sectionKey === 'about' ? 'ProfilePage' : 'CollectionPage',
      name: meta.title,
      url: pageUrl,
      description: meta.description,
      isPartOf: {
        '@type': 'WebSite',
        name: `${siteContent.name} Portfolio`,
        url: siteUrl,
      },
      about: {
        '@type': 'Person',
        name: siteContent.name,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: sectionOrder.map((key, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: sectionSeo[key].title,
        item: `${siteUrl}/${sectionSeo[key].path}`.replace(/\/#/, '/#'),
      })),
    },
  ];

  script.textContent = JSON.stringify(graph);
}

export default function SeoManager() {
  useEffect(() => {
    const updateSeo = () => {
      const sectionKey = getSectionKey(window.location.hash);
      const meta = sectionSeo[sectionKey];
      const siteUrl =
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? window.location.origin
          : siteContent.siteUrl;
      const pageUrl = `${siteUrl}/${meta.path}`.replace(/\/#/, '/#');

      document.title = meta.title;

      upsertMeta('meta[name="description"]', 'content', meta.description);
      upsertMeta('meta[name="keywords"]', 'content', siteContent.keywords.join(', '));
      upsertMeta('meta[name="author"]', 'content', siteContent.name);
      upsertMeta('meta[name="robots"]', 'content', 'index, follow');

      upsertMeta('meta[property="og:title"]', 'content', meta.title);
      upsertMeta('meta[property="og:description"]', 'content', meta.description);
      upsertMeta('meta[property="og:url"]', 'content', pageUrl);
      upsertMeta('meta[property="og:image"]', 'content', siteContent.avatar);
      upsertMeta('meta[property="og:type"]', 'content', meta.type);
      upsertMeta('meta[property="og:site_name"]', 'content', `${siteContent.name} Portfolio`);
      upsertMeta('meta[property="og:locale"]', 'content', 'en_IN');

      upsertMeta('meta[name="twitter:title"]', 'content', meta.title);
      upsertMeta('meta[name="twitter:description"]', 'content', meta.description);
      upsertMeta('meta[name="twitter:image"]', 'content', siteContent.avatar);
      upsertMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');

      const canonical = document.getElementById('canonical-link');
      if (canonical) canonical.setAttribute('href', pageUrl);

      updateStructuredData(sectionKey, siteUrl);
    };

    updateSeo();
    window.addEventListener('hashchange', updateSeo);
    return () => window.removeEventListener('hashchange', updateSeo);
  }, []);

  return null;
}
