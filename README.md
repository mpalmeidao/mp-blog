# matheus in a nutshell

Blog pessoal estático em [Astro](https://astro.build). Conteúdo em Markdown, tema claro/noturno e sumário nos posts.

**Site:** https://mpalmeidao.github.io/mp-blog/

## Desenvolvimento

```sh
npm install
npm run dev
```

| Comando           | Ação                                      |
| :---------------- | :---------------------------------------- |
| `npm run dev`     | Servidor local (`localhost:4321`)         |
| `npm test`        | Testes (Vitest)                           |
| `npm run build`   | Build estático em `./dist/`               |
| `npm run preview` | Preview do build                          |

## Conteúdo

- Posts: `content/posts/<slug>.md` → `/posts/<slug>`
- Sobre: `content/sobre.md` → `/sobre`

Frontmatter obrigatório nos posts: `title`, `description`, `pubDate`. Use `draft: true` para omitir o post do build de produção.

## Deploy

Push na `main` dispara o workflow GitHub Pages (`.github/workflows/deploy.yml`).

O site é um *project site* (`base: /mp-blog` em `astro.config.mjs`). Com domínio próprio na raiz, ajuste `site` e `base` conforme a [doc do Astro](https://docs.astro.build/en/guides/deploy/github/).
