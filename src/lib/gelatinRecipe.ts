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
    `Âge : ${data.age || "non renseigné"}`,
    `Poids : ${data.weight ? `${data.weight} kg` : "non renseigné"}`,
    `Taille : ${data.height ? `${data.height} cm` : "non renseignée"}`,
    `Circonférence de la taille : ${data.waist ? `${data.waist} cm` : "non renseignée"}`,
  ].join(" | ");
}

export function buildRecipeFullContent(data: RecipeFormData): string {
  const age = data.age.trim() || "non renseigné";
  const weight = data.weight.trim() || "non renseigné";
  const height = data.height.trim() || "non renseignée";
  const waist = data.waist.trim() || "non renseignée";
  const goal = data.goal.trim() || "perte de poids progressive";
  const sleep = data.sleep.trim() || "non renseigné";
  const health = data.healthConditions.trim() || "aucune condition indiquée";
  const meds = data.medications.trim() || "aucun médicament ou supplément indiqué";

  return `Recette personnalisée
Âge : ${age}
Poids : ${weight}${weight === "non renseigné" ? "" : " kg"}
Taille : ${height}${height === "non renseignée" ? "" : " cm"}
Circonférence de la taille : ${waist}${waist === "non renseignée" ? "" : " cm"}
Objectif : ${goal}
Sommeil : ${sleep}
Maladies/conditions de santé : ${health}
Médicaments/suppléments : ${meds}

Votre recette
3 cuillères à soupe de sauce tomate prête
1 cuillère à café de mayonnaise
1/2 cuillère à café de vinaigre de cidre
1/2 cuillère à café d'édulcorant
1 pincée de sel
Paprika

Preparation
Mélangez tous les ingrédients jusqu'à obtenir une sauce homogène.
Ajustez le paprika selon votre goût.
Utilisez comme accompagnement dans une portion adaptée à votre objectif.

Avis important
Ce contenu est éducatif et ne remplace pas un avis médical ou nutritionnel. Consultez une professionnelle de santé avant de commencer si vous êtes enceinte, allaitez, avez des conditions de santé, prenez des médicaments ou présentez une réaction indésirable.`;
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
