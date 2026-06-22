# SPEC: Gestão de Branches e Merge Estratégico

> **Status:** Implemented
> **Author:** Hermes Agent (em nome de Rafael)
> **Created:** 2026-06-21
> **Approved by:** [Rafael]

## 1. Contexto

Repositório `portfolio_dev` acumulou branches diversos durante o desenvolvimento (migração PHP, correções UX, versões alternativas). Branches inativos atrapalham a organização e obscurecem branches ativos. Estratégia: manter `next`, `react-branch` e `fix/mobile-first-ux`; consolidar PHP em branch `php`; eliminar obsoletos.

## 2. Requisitos Funcionais

### RF-01: Criar branch `php` baseado em `feature/php-migration`
**Critérios de Aceite (EARS):**
- WHEN branch `php` for criado THEN THE SYSTEM SHALL ser baseado em `feature/php-migration`
- WHEN merge for realizado THEN THE SYSTEM SHALL usar --no-ff com mensagem descritiva
- IF branch `feature/php-migration` estiver up-to-date THEN THE SYSTEM SHALL marcar PR #1 para fechamento

### RF-02: Preservar branches estratégicos
**Critérios de Aceite (EARS):**
- WHEN branches forem analisados THEN THE SYSTEM SHALL preservar `php`, `react-branch`, `fix/mobile-first-ux`
- WHEN branches obsoletos forem identificados THEN THE SYSTEM SHALL listar para aprovação de exclusão
- IF branch for estratégico THEN THE SYSTEM SHALL nunca ser excluído sem confirmação explícita

### RF-03: Remover branches inativos e obsoletos
**Critérios de Aceite (EARS):**
- WHEN branch estiver inativo há 2+ meses THEN THE SYSTEM SHALL listar para aprovação
- WHEN branch for deploy temporário THEN THE SYSTEM SHALL ser marcado como descartável
- IF usuário confirmar exclusão THEN THE SYSTEM SHALL remover local e remoto

### RF-04: Revisar conteúdo dos branches alvo
**Critérios de Aceite (EARS):**
- WHEN branch `next` for revisado THEN THE SYSTEM SHALL verificar conflitos com `main`
- WHEN branch `react-branch` for revisado THEN THE SYSTEM SHALL identificar diferenças úteis
- IF branch contiver código sem testes THEN THE SYSTEM SHALL alertar sobre ausência de coverage

## 3. Requisitos Não-Funcionais

| Categoria | Requisito | Métrica |
|-----------|-----------|---------|
| Performance | Lighthouse Performance (mobile) | >= 85 |
| Segurança | OWASP A03 Supply Chain | Dependências atualizadas |
| Acessibilidade | Lighthouse A11y | >= 90 |
| SEO | Lighthouse SEO | >= 95 |
| Cobertura | Test coverage | >= 90% |

## 4. Fora de Escopo

- Desenvolvimento de nova funcionalidade
- Migração de conteúdo Next.js para PHP
- Setup de ambiente PHP (servidor, config)
- Alterações em branches de terceiros (dependabot auto)

## 5. Arquitetura

```
[Git Repository]
    ├── main (produção)
    ├── php (migração PHP)
    ├── fix/mobile-first-ux (correção ativa)
    ├── next (versão Next.js alternativa)
    └── react-branch (versão React alternativa)
        ↓
[Branch Management Logic]
    ↓
[Create/Delete/Merge Operations]
```

## 6. Dependências

### Técnicas
- Git CLI
- GitHub CLI (gh)

### Blocadores
- Nenhum

## 7. Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Perda de código útil ao excluir branches | Média | Alto | Verificar conteúdo antes |
| Conflitos de merge não resolvidos | Baixa | Médio | Rebase com --strategy-option |
| Branches de produção impactados | Baixa | Alto | Preservar branches estratégicos |

## 8. Critério de Pronto (Definition of Done)

- [x] SPEC.md criada
- [x] Branch `php` criado e pushado
- [x] Branches inativos identificados
- [x] Branches obsoletos excluídos
- [x] Branches estratégicos preservados
- [x] Revisão de conteúdo dos branches alvo
- [x] Merges executados com sucesso
- [x] PRs obsoletas fechadas
- [x] SPEC.md marcada como Implemented

## 9. Change Log

| Data | Autor | Mudança |
|------|-------|---------|
| 2026-06-21 | Hermes Agent | Versão inicial |