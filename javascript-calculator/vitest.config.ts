import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    exclude: [...configDefaults.exclude, 'tests/e2e/**'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
