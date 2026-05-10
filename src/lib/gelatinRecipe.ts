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
    `Idade: ${data.age}`,
    `Altura: ${data.height} cm`,
    `Peso: ${data.weight} kg`,
    `Cintura: ${data.waist} cm`,
  ].join(" | ");
}

export function buildRecipeFullContent(data: RecipeFormData): string {
  const goal = data.goal.trim() || "emagrecimento gradual";
  const sleep = data.sleep.trim() || "nao informado";
  const health = data.healthConditions.trim() || "nenhuma condicao informada";
  const meds = data.medications.trim() || "nenhum medicamento ou suplemento informado";

  return `Resumo pessoal
Objetivo: ${goal}
Sono: ${sleep}
Condicoes de saude: ${health}
Medicamentos/suplementos: ${meds}

Receita guia diaria
Agua filtrada quente: 440 ml
Gelatina sem sabor: 13 g
Cha verde concentrado: 220 ml
Gengibre em po: 1 g
Canela em po: 1 g
Suco de limao fresco: 1 colher de sopa
Mel: 1 colher de cha

Preparo
Prepare o cha verde concentrado e deixe amornar.
Hidrate a gelatina sem sabor em 130 ml de agua fria por 2 minutos.
Misture a agua quente ate dissolver completamente.
Adicione o cha verde, gengibre, canela, limao e mel.
Leve a geladeira por 3 a 4 horas, ate firmar.

Como consumir
Divida em 2 porcoes.
Consuma a primeira porcao pela manha.
Consuma a segunda porcao 20 a 30 minutos antes do almoco ou jantar.

Acompanhamento
Observe cintura, energia, fome, sono e constancia semanalmente.
Se houver desconforto, reduza a intensidade ou pause.
Evite usar a receita como substituta de refeicoes completas.

Aviso importante
Este material e educativo e nao substitui orientacao medica ou nutricional. Consulte uma profissional de saude antes de iniciar se voce estiver gravida, amamentando, tiver condicoes de saude, usar medicamentos ou apresentar qualquer reacao adversa.`;
}

const STORAGE_KEY = "stylo-maison-happ-recipe";

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
