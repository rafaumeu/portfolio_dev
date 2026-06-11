# TASK-003: Reescrever About Me

**Status:** `[x] Ready`

## O QUE E
Substituir o About Me genérico por um texto com personalidade real: quem é, de onde veio, stack principal, o que busca.

## EXECUTION MODE
- [ ] **YOLO**
- [x] **Interactive**
- [ ] **Pre-flight**

## PRE-CONDITIONS
- [x] pt-BR.json lido (about.bio)
- [x] en-US.json lido (about.bio)
- [x] About.tsx lido

## DEPENDENCIAS
- Nenhuma (independente)

## O QUE MODIFICAR

### 1. `src/i18n/locales/pt-BR.json` — about.bio
Substituir o texto atual por:

```json
"bio": "Sou de Jaú, SP. Comecei a programar em 2024 e em 2 anos já contribuí com 20+ PRs em projetos open source, construí um AI-powered job search engine e digitalizei um clube comunitário com gamificação.\n\nO que me diferencia: não faço só cursos — coloco código em produção. Meus projetos têm CI/CD, testes automatizados e documentação.\n\nStack principal: TypeScript, React, Next.js, Node.js, Fastify, Supabase.\nFoco: Clean Architecture, DDD, testes rigorosos."
```

### 2. `src/i18n/locales/en-US.json` — about.bio
```json
"bio": "From Jaú, Brazil. Started coding in 2024 and within 2 years contributed 20+ PRs to open source projects, built an AI-powered job search engine, and digitized a community club with gamification.\n\nWhat sets me apart: I don't just take courses — I ship code to production. My projects have CI/CD, automated tests, and proper documentation.\n\nCore stack: TypeScript, React, Next.js, Node.js, Fastify, Supabase.\nFocus: Clean Architecture, DDD, rigorous testing."
```

## TESTES DERIVADOS
N/A — apenas texto

## CONTRATO DE SAIDA
N/A

## ARMADILHAS
- O `\n\n` no JSON funciona com quebra de linha no React? Verificar se o componente About.tsx renderiza com `white-space: pre-line` ou se precisa de `<br />`. Se o CSS atual não tiver `white-space: pre-line`, adicionar no about.css ou usar `<p>` separados.

### Verificação necessária:
Se About.tsx renderiza `t('about.bio')` dentro de uma `<p>` tag, quebra de linha `\n\n` não será respeitada. Duas opções:
1. Opção A (recomendada): Adicionar `white-space: pre-line` no `about.css` para `.about-bio`
2. Opção B: Usar `<p>` tags separadas no componente

**Decisão:** Usar Opção A — `white-space: pre-line` no CSS. Mais simples, sem mudar o componente.

## CRITERIO DE ACEITE
- [ ] PT-BR mostra o novo texto com personalidade
- [ ] EN-US mostra o novo texto com personalidade
- [ ] As quebras de linha são respeitadas (`white-space: pre-line`)
- [ ] `next build` passa

## POST-CONDITIONS
- [ ] `next build` sem erros

## ESTIMATIVA
LOC: ~15 | Tempo: ~5 min