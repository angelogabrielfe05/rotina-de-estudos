# Progresso do projeto

App pessoal de organização de estudos. Uma página só (HTML, CSS e JavaScript puro), sem servidor: os dados ficam no navegador de quem usa.

Site: https://angelogabrielfe05.github.io/rotina-de-estudos/

Última atualização: 05/10/2026

## Fases

| Fase | O que é | Situação |
|---|---|---|
| 0 | Plano, entrevista e preparação do projeto | Concluída |
| 1 | Horário semanal | Concluída |
| 2 | Checklist de temas | Concluída |
| 3 | Registro de estudo, calendário e sequência de dias | Concluída |
| — | Publicação no GitHub Pages | Concluída |
| 4 | Google Calendar e estatísticas | Não iniciada (opcional) |

## O que o app faz hoje

### Horário
- Duas semanas que se alternam (Laranja e Roxa); o app abre na semana atual.
- Blocos de aula, palestra, prática e estágio, mais os blocos pessoais (refeições, academia, missa).
- Café da manhã e academia mudam de horário conforme os compromissos do dia.
- Sugestão de blocos de estudo nos horários livres, com meta mínima por dia.
- Todo bloco é editável com um toque: nome, início, fim, remover e voltar ao original.
- No celular mostra um dia por vez; no computador, a semana inteira.

### Temas
- 46 temas: 16 semanas do CI III e 30 palestras, em cinco especialidades.
- Status por tema: a estudar, estudado, revisar.
- Revisão espaçada automática (padrão: 1, 7 e 30 dias), com limite diário e botão de adiar.
- Objetivos por tema, marcáveis um a um. Entram por um arquivo importado, não fazem parte do site.
- Filtros por origem (CI III, Palestras, Meus temas), especialidade e status, e busca por nome.
- Temas próprios: criar, editar e excluir.

### Calendário
- Registro rápido de estudo: tema, tempo gasto, dia e "preciso revisar".
- Mês em grade, com o tempo estudado em cada dia.
- Sequência de dias seguidos com folga: um dia de pausa não zera a contagem (ajustável).
- Totais da semana e do mês.

### Dados
- Exportar e importar um arquivo com todos os dados, para cópia de segurança e para levar de um aparelho a outro.

## Testes

106 verificações automáticas, todas passando na última execução (05/10/2026). Elas simulam cliques em um navegador invisível e cobrem as três telas.

Ainda sem teste automático:
- uso em um celular de verdade (só foi testada a largura de tela);
- as janelas do sistema para baixar o arquivo do Exportar e escolher o arquivo do Importar;
- a virada de dia na sequência (testada com datas simuladas).

## Pendências e ideias

- Conferir no uso real se a sequência de dias sobe como esperado.
- Horários antes das 07:00 ou depois das 22:00 não cabem na grade (por exemplo, uma corrida cedo).
- Celular e computador não sincronizam sozinhos; hoje isso é feito por Exportar e Importar.
- Fase 4, se fizer sentido: integração com Google Calendar e estatísticas.

## Histórico

- 04/10/2026: plano e entrevista; Fase 1 (horário semanal).
- 05/10/2026: Fase 2 (temas e revisão espaçada); filtros por origem e ordem por semana; Fase 3 (registro, calendário e sequência); ajustes no horário (blocos editáveis, café da manhã); publicação no GitHub Pages.
