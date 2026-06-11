# TASK-002: Atualizar Hero stats + headline

**Status:** `[x] Ready`

## O QUE E
Atualizar hero section: trocar a métrica "signed" (signed commits) por "testes" (automated tests), e ajustar headline/subtitle.

## EXECUTION MODE
- [ ] **YOLO**
- [x] **Interactive**
- [ ] **Pre-flight**

## PRE-CONDITIONS
- [x] Hero.tsx lido
- [x] pt-BR.json lido
- [x] en-US.json lido

## DEPENDENCIAS
- Nenhuma (independente)

## O QUE MODIFICAR

### 1. `src/components/Hero.tsx` — STATS array
Trocar:
```
{ key: 'signed', value: '100%', icon: '🔐' },
```
Por:
```
{ key: 'tests', value: '1000+', icon: '🧪' },
```

### 2. `src/i18n/locales/pt-BR.json` — hero.stats
Trocar:
```json
"signed": "Signed Commits"
```
Por:
```json
"tests": "Testes Automatizados"
```

### 3. `src/i18n/locales/en-US.json` — hero.stats
Trocar:
```json
"signed": "Signed Commits"
```
Por:
```json
"tests": "Automated Tests"
```

### 4. `src/i18n/locales/pt-BR.json` — hero.headline
Trocar headline de:
```
"Software Production-Grade Antes da Formatura"
```
Para:
```
"Full Stack Developer • Clean Architecture & DDD"
```

### 5. `src/i18n/locales/en-US.json` — hero.headline
Trocar headline de:
```
"Production-Grade Software Before Graduation"
```
Para:
```
"Full Stack Developer • Clean Architecture & DDD"
```

### 6. `src/i18n/locales/pt-BR.json` — hero.subtitle
Trocar subtitle de:
```
"Construindo aplicações escaláveis com tecnologias modernas. Apaixonado por Domain-Driven Design, testes e clean code."
```
Para:
```
"Código limpo, testes rigorosos, arquitetura bem definida. Transformo requisitos complexos em software de produção."
```

### 7. `src/i18n/locales/en-US.json` — hero.subtitle
Trocar subtitle de:
```
"Building scalable applications with modern technologies. Passionate about Domain-Driven Design, testing, and clean code."
```
Para:
```
"Clean code, thorough tests, well-defined architecture. Turning complex requirements into production-grade software."
```

## TESTES DERIVADOS
N/A — sem testes, apenas build check

## CONTRATO DE SAIDA
N/A

## ARMADILHAS
- Nenhuma — alteração direta em strings

## CRITERIO DE ACEITE
- [ ] Hero mostra "1000+" no lugar de "100%"
- [ ] Hero mostra "Testes Automatizados" / "Automated Tests"
- [ ] Headline é "Full Stack Developer • Clean Architecture & DDD"
- [ ] Subtitle é o novo texto
- [ ] `next build` passa sem erro

## POST-CONDITIONS
- [ ] `next build` sem erros

## ESTIMATIVA
LOC: ~20 | Tempo: ~5 min