export interface RecipeFormData {
  age: string;
  height: string;
  weight: string;
  waist: string;
  goal: string;
  sleep: string;
  healthConditions: string;
  medications: string;
}

export function buildRecipeProtocolHeader(data: RecipeFormData): string {
  return [
    `Age : ${data.age}`,
    `Taille : ${data.height} cm`,
    `Poids : ${data.weight} kg`,
    `Tour de taille : ${data.waist} cm`,
  ].join(" | ");
}

export function buildRecipeFullContent(data: RecipeFormData): string {
  const goal = data.goal.trim() || "perte de poids progressive";
  const sleep = data.sleep.trim() || "non renseigne";
  const health = data.healthConditions.trim() || "aucune condition indiquee";
  const meds = data.medications.trim() || "aucun medicament ou complement indique";

  return `Resume personnel
Objectif : ${goal}
Sommeil : ${sleep}
Conditions de sante : ${health}
Medicaments/complements : ${meds}

Recette guide quotidienne
Eau filtree chaude : 440 ml
Gelatine neutre : 13 g
The vert concentre : 220 ml
Gingembre en poudre : 1 g
Cannelle en poudre : 1 g
Jus de citron frais : 1 cuillere a soupe
Miel : 1 cuillere a cafe

Preparation
Preparez le the vert concentre et laissez tiedir.
Hydratez la gelatine neutre dans 130 ml d'eau froide pendant 2 minutes.
Ajoutez l'eau chaude et melangez jusqu'a dissolution complete.
Ajoutez le the vert, le gingembre, la cannelle, le citron et le miel.
Placez au refrigerateur pendant 3 a 4 heures, jusqu'a ce que la preparation soit ferme.

Comment consommer
Divisez en 2 portions.
Consommez la premiere portion le matin.
Consommez la deuxieme portion 20 a 30 minutes avant le dejeuner ou le diner.

Suivi
Observez chaque semaine le tour de taille, l'energie, la faim, le sommeil et la regularite.
En cas d'inconfort, reduisez l'intensite ou faites une pause.
N'utilisez pas cette recette comme substitut de repas complets.

Avis important
Ce contenu est educatif et ne remplace pas un avis medical ou nutritionnel. Consultez une professionnelle de sante avant de commencer si vous etes enceinte, allaitez, avez des conditions de sante, prenez des medicaments ou presentez une reaction indesirable.`;
}

const STORAGE_KEY = "stylo-maison-app-recipe";

export function loadSavedRecipe(): RecipeFormData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as RecipeFormData;
  } catch {
    return null;
  }
}

export function saveRecipe(data: RecipeFormData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
