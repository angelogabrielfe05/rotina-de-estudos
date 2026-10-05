/* Temas do checklist: só os nomes (este arquivo é público).
   Os objetivos de cada tema ficam fora do site e entram pelo botão Importar dados.
   Cada tema: id, nome, esp (especialidade), origem e objetivos. */
const TEMAS_BASE = [
 {
  "id": "ci-01",
  "nome": "Espondiloartrites e Artropatias",
  "esp": "clinica",
  "origem": "CI III · Semana 1",
  "objetivos": []
 },
 {
  "id": "ci-02",
  "nome": "Neoplasias na Infância",
  "esp": "pediatria",
  "origem": "CI III · Semana 2",
  "objetivos": []
 },
 {
  "id": "ci-03",
  "nome": "TOC e Transtornos de Ansiedade",
  "esp": "mental",
  "origem": "CI III · Semana 3",
  "objetivos": []
 },
 {
  "id": "ci-04",
  "nome": "Sangramento na 1ª Metade da Gestação",
  "esp": "mulher",
  "origem": "CI III · Semana 4",
  "objetivos": []
 },
 {
  "id": "ci-05",
  "nome": "Síndromes Demenciais",
  "esp": "clinica",
  "origem": "CI III · Semana 5",
  "objetivos": []
 },
 {
  "id": "ci-06",
  "nome": "Icterícia Neonatal",
  "esp": "pediatria",
  "origem": "CI III · Semana 6",
  "objetivos": []
 },
 {
  "id": "ci-07",
  "nome": "Transtorno Bipolar e Personalidade Borderline",
  "esp": "mental",
  "origem": "CI III · Semana 7",
  "objetivos": []
 },
 {
  "id": "ci-08",
  "nome": "Síndromes Hipertensivas na Gestação",
  "esp": "mulher",
  "origem": "CI III · Semana 8",
  "objetivos": []
 },
 {
  "id": "ci-09",
  "nome": "Cefaleias e AVC",
  "esp": "clinica",
  "origem": "CI III · Semana 9",
  "objetivos": []
 },
 {
  "id": "ci-10",
  "nome": "Epilepsias e Meningites na Infância",
  "esp": "pediatria",
  "origem": "CI III · Semana 10",
  "objetivos": []
 },
 {
  "id": "ci-11",
  "nome": "Transtorno por Uso de Álcool e Abstinência",
  "esp": "mental",
  "origem": "CI III · Semana 11",
  "objetivos": []
 },
 {
  "id": "ci-12",
  "nome": "Sangramento na 2ª Metade da Gestação",
  "esp": "mulher",
  "origem": "CI III · Semana 12",
  "objetivos": []
 },
 {
  "id": "ci-13",
  "nome": "Olho Vermelho",
  "esp": "clinica",
  "origem": "CI III · Semana 13",
  "objetivos": []
 },
 {
  "id": "ci-14",
  "nome": "Cardiopatias Congênitas",
  "esp": "pediatria",
  "origem": "CI III · Semana 14",
  "objetivos": []
 },
 {
  "id": "ci-15",
  "nome": "Gestação Gemelar e Trabalho de Parto Prematuro",
  "esp": "mulher",
  "origem": "CI III · Semana 15",
  "objetivos": []
 },
 {
  "id": "ci-16",
  "nome": "Vasculites, Lúpus, Artrite Reumatoide e Febre Reumática",
  "esp": "clinica",
  "origem": "CI III · Semana 16",
  "objetivos": []
 },
 {
  "id": "pal-01",
  "nome": "Manejo das espondiloartrites",
  "esp": "clinica",
  "origem": "Palestra 1",
  "objetivos": []
 },
 {
  "id": "pal-02",
  "nome": "Fraturas, entorses e luxações",
  "esp": "outras",
  "origem": "Palestra 2",
  "objetivos": []
 },
 {
  "id": "pal-03",
  "nome": "Quando pensar em câncer infantojuvenil? Atenção aos sinais e aos sintomas",
  "esp": "pediatria",
  "origem": "Palestra 3",
  "objetivos": []
 },
 {
  "id": "pal-04",
  "nome": "Queimaduras superficiais e avaliação nutricional",
  "esp": "outras",
  "origem": "Palestra 4",
  "objetivos": []
 },
 {
  "id": "pal-05",
  "nome": "Abordagem da ansiedade na APS / Transtorno obsessivo e compulsivo",
  "esp": "mental",
  "origem": "Palestra 5",
  "objetivos": []
 },
 {
  "id": "pal-06",
  "nome": "Afecções da próstata: hiperplasia prostática benigna / câncer de próstata",
  "esp": "outras",
  "origem": "Palestra 6",
  "objetivos": []
 },
 {
  "id": "pal-07",
  "nome": "Abordagem diagnóstica dos sangramentos da primeira metade da gravidez / Mola e coriocarcinoma",
  "esp": "mulher",
  "origem": "Palestra 7",
  "objetivos": []
 },
 {
  "id": "pal-08",
  "nome": "Disfonia / rouquidão e disfagia / videolaringoscopia",
  "esp": "outras",
  "origem": "Palestra 8",
  "objetivos": []
 },
 {
  "id": "pal-09",
  "nome": "Abordagem diagnóstica das síndromes demenciais na APS",
  "esp": "clinica",
  "origem": "Palestra 9",
  "objetivos": []
 },
 {
  "id": "pal-10",
  "nome": "Síndrome Parkinsoniana",
  "esp": "clinica",
  "origem": "Palestra 10",
  "objetivos": []
 },
 {
  "id": "pal-11",
  "nome": "Manejo e diagnóstico diferencial da icterícia neonatal / Eritroblastose fetal",
  "esp": "pediatria",
  "origem": "Palestra 11",
  "objetivos": []
 },
 {
  "id": "pal-12",
  "nome": "Neoplasias pulmonares",
  "esp": "clinica",
  "origem": "Palestra 12",
  "objetivos": []
 },
 {
  "id": "pal-13",
  "nome": "Transtornos de personalidade com enfoque no Borderline / Estabilizadores do humor",
  "esp": "mental",
  "origem": "Palestra 13",
  "objetivos": []
 },
 {
  "id": "pal-14",
  "nome": "Manejo da hipertensão arterial sistêmica na APS",
  "esp": "clinica",
  "origem": "Palestra 14",
  "objetivos": []
 },
 {
  "id": "pal-15",
  "nome": "Abordagem clínica da pré-eclâmpsia / Síndrome HELLP / Avaliação do bem-estar fetal",
  "esp": "mulher",
  "origem": "Palestra 15",
  "objetivos": []
 },
 {
  "id": "pal-16",
  "nome": "Manejo da Doença Arterial Periférica",
  "esp": "outras",
  "origem": "Palestra 16",
  "objetivos": []
 },
 {
  "id": "pal-17",
  "nome": "Diagnóstico diferencial de cefaleias primárias e secundárias",
  "esp": "clinica",
  "origem": "Palestra 17",
  "objetivos": []
 },
 {
  "id": "pal-18",
  "nome": "Abordagem inicial do acidente vascular encefálico / Doença carotídea",
  "esp": "clinica",
  "origem": "Palestra 18",
  "objetivos": []
 },
 {
  "id": "pal-19",
  "nome": "Abordagem terapêutica inicial das epilepsias",
  "esp": "pediatria",
  "origem": "Palestra 19",
  "objetivos": []
 },
 {
  "id": "pal-20",
  "nome": "Meningites e meningoencefalites na infância",
  "esp": "pediatria",
  "origem": "Palestra 20",
  "objetivos": []
 },
 {
  "id": "pal-21",
  "nome": "Abordagem das dependências químicas",
  "esp": "mental",
  "origem": "Palestra 21",
  "objetivos": []
 },
 {
  "id": "pal-22",
  "nome": "Repercussões clínico-cirúrgicas do uso do álcool (pancreatite, cirrose e hepatite alcoólica)",
  "esp": "clinica",
  "origem": "Palestra 22",
  "objetivos": []
 },
 {
  "id": "pal-23",
  "nome": "Abordagem clínica e diagnóstica dos sangramentos da segunda metade da gestação",
  "esp": "mulher",
  "origem": "Palestra 23",
  "objetivos": []
 },
 {
  "id": "pal-24",
  "nome": "Aneurisma de aorta",
  "esp": "outras",
  "origem": "Palestra 24",
  "objetivos": []
 },
 {
  "id": "pal-25",
  "nome": "Abordagem sindrômica do olho vermelho / doenças infecciosas oculares",
  "esp": "outras",
  "origem": "Palestra 25",
  "objetivos": []
 },
 {
  "id": "pal-26",
  "nome": "Manejo dos tumores urogenitais",
  "esp": "outras",
  "origem": "Palestra 26",
  "objetivos": []
 },
 {
  "id": "pal-27",
  "nome": "Fisiopatologia das cardiopatias congênitas mais comuns",
  "esp": "pediatria",
  "origem": "Palestra 27",
  "objetivos": []
 },
 {
  "id": "pal-28",
  "nome": "Rastreio de cardiopatias congênitas no pré-natal",
  "esp": "mulher",
  "origem": "Palestra 28",
  "objetivos": []
 },
 {
  "id": "pal-29",
  "nome": "Gravidez gemelar e seu manejo no pré-natal",
  "esp": "mulher",
  "origem": "Palestra 29",
  "objetivos": []
 },
 {
  "id": "pal-30",
  "nome": "Exame físico do RN: achados normais e patológicos",
  "esp": "pediatria",
  "origem": "Palestra 30",
  "objetivos": []
 }
];
