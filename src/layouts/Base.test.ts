import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Base from './Base.astro';

describe('Base layout', () => {
	it('exposes skip link, site nav, and theme toggle', async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Base, {
			props: { title: 'Página de teste', description: 'Descrição' },
			slots: { default: '<p>Conteúdo</p>' },
		});
		expect(result).toContain('lang="pt"');
		expect(result).toContain('Ir para o conteúdo');
		expect(result).toContain('href="#conteudo"');
		expect(result).toContain(`href="${import.meta.env.BASE_URL}"`);
		expect(result).toContain(`href="${import.meta.env.BASE_URL}sobre"`);
		expect(result).toContain('data-theme-toggle');
		expect(result).toContain('theme-toggle__icon');
		expect(result).toMatch(/data-icon="(moon|sun)"/);
		expect(result).toMatch(/Ativar tema (escuro|claro)/);
		expect(result).not.toContain('>Tema<');
		expect(result).toContain('Página de teste');
		expect(result).toContain('Conteúdo');
		expect(result).toContain('matheus in a nutshell');
	});
});


