# AGENTS.md — Blog pessoal (Notas)

## TDD (obrigatório)

Antes de implementar qualquer coisa, escrever um teste que descreva o comportamento e confirmar que ele falha.

1. **Vermelho** — teste falhando para o comportamento desejado.
2. **Verde** — mínimo de código de produção para o teste passar.
3. **Refatorar** — com a suíte verde.

Não adicionar código de produção sem um teste falhando correspondente. Vale para qualquer mudança futura neste projeto.

Ferramenta: **Vitest**. Lógica testável em funções puras (`src/lib/`). Páginas e componentes seguem o mesmo ciclo (teste do comportamento antes do markup), com `experimental_AstroContainer` quando for componente/página Astro.

```bash
npm test
```

## Stack

- Astro (saída estática: `output: 'static'`)
- TypeScript strict
- Sem React, sem Tailwind — CSS global
- Conteúdo em Markdown na pasta `content/` na raiz
- Vitest para testes

## Pastas

```
content/
  posts/          # posts .md
  sobre.md        # página Sobre
src/
  components/     # PostOutline, etc.
  layouts/        # Base.astro
  lib/            # funções puras (feed, outline, tema)
  pages/          # rotas
  styles/         # global.css
  consts.ts       # nome do site, descrição, links
  content.config.ts
```

## Rotas

| Rota | Origem |
|------|--------|
| `/` | Feed dos posts mais recentes |
| `/sobre` | `content/sobre.md` |
| `/posts/[slug]` | `content/posts/<slug>.md` |
| `404` | Página não encontrada |

Slug = nome do arquivo sem `.md` (`meu-estudo.md` → `/posts/meu-estudo`).

## Frontmatter dos posts

Obrigatório (validado por Zod em `src/content.config.ts`):

- `title` (string)
- `description` (string)
- `pubDate` (date)

Opcional:

- `updatedDate` (date)
- `draft` (boolean) — com `draft: true`, o post não entra no build de produção

## Como publicar um post

1. Criar `content/posts/meu-slug.md` com frontmatter e corpo em Markdown.
2. Usar `h2` / `h3` no corpo para o sumário lateral aparecer.
3. Rodar `npm run dev` e abrir `/posts/meu-slug`.
4. Em produção, omitir `draft: true` (ou remover o campo).

## Identidade

Editar `src/consts.ts` (nome do site, descrição, links). Placeholder inicial: **Notas**.

## Temas (claro / noturno)

- Sem JS: segue `prefers-color-scheme`.
- Com escolha do usuário: botão no cabeçalho grava em `localStorage`; `data-theme` no `<html>`.
- Script mínimo no `<head>` evita flash do tema errado.

## Paleta

Papel quente, tinta quase preta, link em verde profundo. Contraste medido (WCAG luminância relativa). Texto ≥ 4.5:1; UI ≥ 3:1.

### Claro (`--bg #f7f5f2`)

| Papel | Token | Hex | Razão vs fundo |
|-------|-------|-----|----------------|
| Texto | `--text` | `#1a1814` | 16.29:1 |
| Secundário | `--text-muted` | `#5c564e` | 6.66:1 |
| Link | `--link` | `#1b4d38` | 8.91:1 |
| Link hover | `--link-hover` | `#0f3326` | 12.68:1 |
| Superfície (código / ativo) | `--surface` | `#efeae3` | texto 14.81:1 |
| Traço / borda | `--border` | `#8a8378` | 3.45:1 |
| Foco | `--focus` | `#1a1814` | 16.29:1 |

### Noturno (`--bg #161411`)

| Papel | Token | Hex | Razão vs fundo |
|-------|-------|-----|----------------|
| Texto | `--text` | `#f3efe7` | 16.03:1 |
| Secundário | `--text-muted` | `#b7aea3` | 8.40:1 |
| Link | `--link` | `#9ddec0` | 11.94:1 |
| Link hover | `--link-hover` | `#c9f3e0` | 15.22:1 |
| Superfície | `--surface` | `#2a2622` | texto 13.09:1 |
| Traço | `--border` | `#6e675e` | 3.30:1 |
| Foco | `--focus` | `#f3efe7` | 16.03:1 |

Links sempre sublinhados. Item ativo do sumário: peso maior + barra lateral + `aria-current="location"` (não só cor).

## Tipografia

Fontes locais via Fontsource (sem CDN):

- **Leitura / títulos:** Source Serif 4 — corpo 1.25rem (20px), line-height 1.6, espaço após parágrafo 2em, alinhado à esquerda. H1 ~2.5rem, H2 1.75rem, H3 1.35rem.
- **Interface** (nav, datas, botões, sumário): Source Sans 3 — sumário 1rem (16px).
- **Código:** Source Code Pro — 0.9375rem (15px).

Coluna de leitura: `max-width: 42rem` (~80 caracteres).

## Sumário do post (`PostOutline`)

Só na página interna do post. Estrutura inspirada no índice do Google Docs (lista hierárquica), sem copiar cores/fontes do print.

- `<nav>` com heading "Nesta página"
- Entradas: headings de profundidade 2 e 3 (`render().headings`); h1 fica de fora
- Sem h2/h3: painel oculto
- Desktop: coluna sticky à esquerda (`14rem` + artigo `42rem`)
- < ~960px: o mesmo nav vira `<details>` "Nesta página" acima do artigo, fechado por padrão
- Seção em vista: `aria-current="location"` via IntersectionObserver
- Rolagem suave só sem `prefers-reduced-motion`

## Acessibilidade

Perfil **Standard (AA)** — WCAG 2.2 AA:

- HTML semântico, skip link, foco visível (anel 2px), alvos folgados no botão de tema
- `lang="pt"`, títulos de página únicos
- `prefers-reduced-motion`
- Matriz de contraste em `A11Y-DECISIONS.md`

## Dev server

```bash
npm run dev
```

Parar com Ctrl+C. Build: `npm run build`. Preview: `npm run preview`.
