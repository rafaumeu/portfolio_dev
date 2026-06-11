# TASK-001: Trocar projetos genéricos por projetos reais

**Status:** `[x] Ready`

## O QUE E
Substituir Pizza Shop, Hairday e InOrbit por HireMe Agent, Rocketseat Forum Helper e Open Source Contributions no array PROJECTS.

## EXECUTION MODE
- [ ] **YOLO**
- [x] **Interactive**
- [ ] **Pre-flight**

## PRE-CONDITIONS
- [x] Projetos atuais mapeados em Projects.tsx
- [x] i18n keys existentes em pt-BR.json e en-US.json

## DEPENDENCIAS
- Nenhuma (independente)

## IMPORTS
- N/A (edição de dados + i18n)

## O QUE CRIAR / MODIFICAR

### 1. `src/components/Projects.tsx` — Substituir no array PROJECTS

**Remover:**
- pizzaShop (key: "pizzaShop")
- hairday (key: "hairday")
- inorbitFront (key: "inorbitFront")

**Adicionar:**

```ts
{
  key: "hiremeAgent",
  tags: ["Next.js 16", "AI", "CLI", "IMAP", "WebSocket"],
  github: "https://github.com/rafaumeu/career-ops", // or "Código sob demanda"
  demo: "https://hiremeagent.vercel.app",
  image: "/images/hireme-agent.png",
},
{
  key: "openSource",
  tags: ["Hermes Agent", "OpenHive AI", "20+ PRs"],
  github: "https://github.com/rafaumeu",
  image: "/images/open-source.png",
},
{
  key: "rocketseatForumHelper",
  tags: ["Chrome Extension", "MV3", "TypeScript"],
  github: "https://github.com/rafaumeu/rocketseat-forum-helper",
  image: "/images/forum-helper.png",
},
```

**Manter:** tesourosPortal, estacioPrep, ignitecall, devStore, forum (total: 7 projetos)

**Adicionar link de código onde falta:**
- tesourosPortal: adicionar `github: "https://github.com/rafaumeu/tesouros-portal"`
- estacioPrep: adicionar `github: "https://github.com/rafaumeu/estacio-prep"`

### 2. `src/i18n/locales/pt-BR.json` — Adicionar keys nos `projects.items`:
```json
"hiremeAgent": {
  "name": "HireMe Agent",
  "description": "AI-powered job search engine com análise de currículos, envio automatizado de candidaturas e matching inteligente via CLI + WebSocket"
},
"openSource": {
  "name": "Contribuições Open Source",
  "description": "20+ PRs merged em projetos reais: NousResearch Hermes Agent (13 PRs) e OpenHive AI (7 PRs)"
},
"rocketseatForumHelper": {
  "name": "Rocketseat Forum Helper",
  "description": "Chrome Extension MV3 que ajuda alunos da Rocketseat com respostas inteligentes no fórum da plataforma"
}
```

### 3. `src/i18n/locales/en-US.json` — Adicionar traduções:
```json
"hiremeAgent": {
  "name": "HireMe Agent",
  "description": "AI-powered job search engine with resume analysis, automated applications, and intelligent matching via CLI + WebSocket"
},
"openSource": {
  "name": "Open Source Contributions",
  "description": "20+ merged PRs in real projects: NousResearch Hermes Agent (13 PRs) and OpenHive AI (7 PRs)"
},
"rocketseatForumHelper": {
  "name": "Rocketseat Forum Helper",
  "description": "Chrome Extension MV3 helping Rocketseat students with intelligent forum responses"
}
```

## TESTES DERIVADOS
N/A — sem testes unitários no projeto (apenas build check)

## CONTRATO DE SAIDA
N/A — alteração de dados + i18n, sem exports

## ARMADILHAS
- Manter exatamente 7 projetos (remover 3, adicionar 3 = 8 → 7) — remover pizzaShop, hairday, inorbitFront

## CRITERIO DE ACEITE
- [ ] Pizza Shop removido do array
- [ ] Hairday removido do array
- [ ] InOrbit removido do array
- [ ] HireMe Agent adicionado com github + demo
- [ ] Open Source adicionado com github
- [ ] Rocketseat Forum Helper adicionado com github
- [ ] Tesouros Portal TEM github link agora
- [ ] Estacio Prep TEM github link agora
- [ ] i18n pt-BR tem as 3 novas keys
- [ ] i18n en-US tem as 3 novas keys
- [ ] `next build` passa sem erro

## POST-CONDITIONS
- [ ] `next build` passa sem erro
- [ ] Nenhum import quebrado

## ESTIMATIVA
LOC: ~100 | Tempo: ~10 min