// /studio/schemas/index.js

import parcours from './parcours'
import category from './category'
import pageFlexible from './pageFlexible'
import seo from './seo'
import testimonial from './testimonial'
import partenaire from './partenaire'
import certification from './certification'
import financement from './financement'

// On exporte un tableau contenant tous nos schémas.
// L'ordre n'a pas d'importance ici.
export const schemaTypes = [parcours, category, pageFlexible, seo, testimonial, partenaire,
  certification, financement]