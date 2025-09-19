// /studio/schemas/pageFlexible.js

export default {
  name: 'pageFlexible',
  title: 'Page Flexible',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Contenu de la page (code HTML)',
      type: 'code',
      options: {
        language: 'html',
      }
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo', // On utilise votre schéma SEO partagé
    },
  ],
};