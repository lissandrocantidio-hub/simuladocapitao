# Simulado Capitão-Amador

Aplicação em Next.js para treinar a prova de Capitão-Amador com simulados por matéria, modo prova completa e questões comentadas com anexos quando necessário.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Estrutura

- `app/`: páginas, layout e componentes da experiência do simulado
- `data/questions/`: banco de questões por disciplina
- `public/anexos/`: PDFs e imagens de apoio usados nas questões
- `types/`: tipagens compartilhadas

## Regras do banco de questões

- Cada questão deve funcionar de forma independente no simulado.
- Quando a prova oficial usa um enunciado-base compartilhado, esse contexto precisa ser incorporado à própria questão.
- Se a resolução depender de anexo oficial, o arquivo deve ser referenciado em `attachments`.
- O texto pode ser reescrito para remover dependência de questão anterior, desde que preserve os dados necessários da prova.

## Desenvolvimento

O projeto usa App Router. Antes de alterar APIs ou convenções do Next.js, consulte a documentação local em `node_modules/next/dist/docs/`, conforme definido em `AGENTS.md`.
