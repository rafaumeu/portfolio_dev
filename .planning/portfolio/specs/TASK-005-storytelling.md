# TASK-005: Adicionar storytelling nos projetos

**Status:** `[x] Ready`

## O QUE E
Adicionar descrições com storytelling (Problema → Solução → Resultado → Destaque Técnico) nos cards de projeto.

## EXECUTION MODE
- [ ] **YOLO**
- [x] **Interactive**
- [ ] **Pre-flight**

## PRE-CONDITIONS
- [x] Projects.tsx lido — renderiza `t(projects.items.${project.key}.description)`
- [x] i18n keys atuais são descrições genéricas (1 linha)

## DEPENDENCIAS
- TASK-001 (projetos reais) — as descrições precisam incluir os novos projetos

## O QUE MODIFICAR

### 1. `src/i18n/locales/pt-BR.json` — Atualizar descrições com storytelling

O componente Projects.tsx já renderiza `{t(projects.items.${project.key}.description)}` como uma `<p>`. Para storytelling completo (problema + solução + resultado + destaque), usar formato de 2-3 frases por projeto:

**Tesouros Portal:**
```json
"description": "Problema: Clube de Aventureiros de Jaú gerenciava tudo em papel — frequência, classes, especialidades — sem visibilidade para os pais. Solução: PWA offline-first com gamificação (XP, levels, conquistas), Supabase + PostgreSQL. Destaque: RBAC + testes Playwright + LGPD compliance. Portal público para pais e área admin com dashboard."
```

**Estacio Prep:**
```json
"description": "Problema: Estudar pra Estácio era maçante — PDFs e PDFs. Solução: App gamificado com XP estilo Duolingo, streaks, quizzes inteligentes e analytics de progresso. Destaque: Algorítmo de revisão espaçada + 100% cobertura de testes + CI/CD com validação de PR em < 2 min."
```

**HireMe Agent:**
```json
"description": "Problema: Dezenas de candidaturas manuais por dia. Solução: AI-powered job search engine com análise de currículos, envio automatizado via IMAP + Nodemailer, CLI com WebSocket. Destaque: 13 PRs merged no NousResearch Hermes Agent + matching inteligente com IA."
```

**Open Source:**
```json
"description": "Problema: Código de curso não mostra engenharia real. Solução: 20+ PRs merged em projetos open source reais. Destaque: 13 PRs no NousResearch Hermes Agent (skill system, delegate_tool, CI/CD) e 7 PRs no OpenHive AI (brand-aware caption gen, multi-platform publisher, MCP tools)."
```

**Rocketseat Forum Helper:**
```json
"description": "Problema: Alunos da Rocketseat perdiam tempo esperando respostas no fórum. Solução: Chrome Extension MV3 que analisa dúvidas e sugere respostas inteligentes. Destaque: Publicada na Chrome Web Store, TypeScript, CI/CD, testes E2E com Playwright."
```

**IgniteCall:**
```json
"description": "Problema: Agendamento manual sem integração com Google Calendar. Solução: App com autenticação OAuth, design system próprio, CI/CD automatizado. Destaque: Integração Google Calendar + Prisma ORM + deploy automatizado no Vercel."
```

**DevStore:**
```json
"description": "Problema: Loja online genérica sem SSR. Solução: E-commerce SSR com Stripe payments, caching inteligente e design responsivo. Destaque: SSR com ISR + 40% redução no time de carregamento + pagamentos Stripe em produção."
```

**Forum DDD:**
```json
"description": "Problema: Aprender DDD com teoria não era suficiente. Solução: Fórum full-stack implementado com Domain-Driven Design e Clean Architecture, do zero. Destaque: Fastify + Prisma + testes de unidade e integração + monorepo com turborepo."
```

### 2. `src/i18n/locales/en-US.json` — Mesmas descrições traduzidas

**Tesouros Portal:**
```json
"description": "Problem: Adventure Club of Jaú managed everything on paper — attendance, classes, specialties — with no visibility for parents. Solution: Offline-first PWA with gamification (XP, levels, achievements), Supabase + PostgreSQL. Highlight: RBAC + Playwright tests + LGPD compliance."
```

**Estacio Prep:**
```json
"description": "Problem: Studying for college was boring — PDFs and more PDFs. Solution: Gamified app with Duolingo-style XP, streaks, smart quizzes, and progress analytics. Highlight: Spaced repetition algorithm + 100% test coverage + CI/CD under 2 min per PR."
```

**HireMe Agent:**
```json
"description": "Problem: Dozens of manual applications daily. Solution: AI-powered job search engine with resume analysis, automated submissions via IMAP + Nodemailer, CLI with WebSocket. Highlight: 13 PRs merged in NousResearch Hermes Agent + AI-powered smart matching."
```

**Open Source:**
```json
"description": "Problem: Course code doesn't show real engineering. Solution: 20+ merged PRs in real open source projects. Highlight: 13 PRs in NousResearch Hermes Agent (skill system, delegate_tool, CI/CD) and 7 PRs in OpenHive AI (brand-aware caption gen, multi-platform publisher, MCP tools)."
```

**Rocketseat Forum Helper:**
```json
"description": "Problem: Rocketseat students wasted time waiting for forum answers. Solution: Chrome Extension MV3 that analyzes questions and suggests intelligent responses. Highlight: Published on Chrome Web Store, TypeScript, CI/CD, E2E tests with Playwright."
```

**IgniteCall:**
```json
"description": "Problem: Manual scheduling without Google Calendar integration. Solution: App with OAuth authentication, custom Design System, automated CI/CD. Highlight: Google Calendar integration + Prisma ORM + automated Vercel deploys."
```

**DevStore:**
```json
"description": "Problem: Generic online store without SSR. Solution: SSR e-commerce with Stripe payments, smart caching, responsive design. Highlight: SSR with ISR + 40% load time reduction + production Stripe payments."
```

**Forum DDD:**
```json
"description": "Problem: Learning DDD from theory alone wasn't enough. Solution: Full-stack forum built with Domain-Driven Design and Clean Architecture from scratch. Highlight: Fastify + Prisma + unit and integration tests + turborepo monorepo."
```

## TESTES DERIVADOS
N/A — apenas texto

## CONTRATO DE SAIDA
N/A

## ARMADILHAS
- Nenhuma técnica, mas as descrições estão mais longas agora — verificar se o CSS do card de projeto comporta texto maior. Se as descrições ficarem muito longas, adicionar `max-height` com `line-clamp` no CSS.

## CRITERIO DE ACEITE
- [ ] PT-BR: todas descrições têm formato problema → solução → destaque
- [ ] EN-US: todas descrições traduzidas com formato equivalente
- [ ] `next build` passa sem erro

## POST-CONDITIONS
- [ ] `next build` sem erros

## ESTIMATIVA
LOC: ~60 | Tempo: ~10 min