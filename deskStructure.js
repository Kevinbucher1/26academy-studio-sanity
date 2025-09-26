// Ce fichier définit la nouvelle organisation de votre menu de gauche dans Sanity

export const myStructure = (S) =>
  S.list()
    .title('Contenu Principal')
    .items([
      // Les types de contenu principaux que vous éditez souvent
      S.documentTypeListItem('parcours').title('Parcours de Formation'),
      S.documentTypeListItem('pageFlexible').title('Pages Flexibles'),
      S.documentTypeListItem('testimonial').title('Témoignages'),
      
      S.divider(), // Ajoute un séparateur visuel

      // On crée un "dossier" pour regrouper les catégories et filtres
      S.listItem()
        .title('Catégories & Filtres')
        .child(
          S.list()
            .title('Catégories & Filtres')
            .items([
              S.documentTypeListItem('category').title('Catégories de Formation'),
              S.documentTypeListItem('partenaire').title('Partenaires Académiques'),
              S.documentTypeListItem('certification').title('Types de Certification'),
              S.documentTypeListItem('financement').title('Types de Financement'),
            ])
        ),
      
      // Ajoutez ici d'autres éléments si nécessaire, par exemple :
      // S.documentTypeListItem('mediaTag').title('Media Tag'),
    ])