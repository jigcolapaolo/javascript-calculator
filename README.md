# Javascript Calculator <img src="https://github.com/user-attachments/assets/c6654a8f-fd1f-4545-920f-bf532eabb447" alt="App Logo" width="50" height="50" />
<br>
<img src="https://github.com/user-attachments/assets/82b7c38e-8fb7-40dc-b210-e50a75cc3aa4" alt="App Img" width="300" height="300" />

## 🛠️ Tecnologías Utilizadas

- **Framework:** React
- **Lenguaje:** TypeScript
- **Estilos:** SCSS
- **Testing:** Vitest (unitario), Playwright (end-to-end)
- **Linter:** ESLint

## 📚 Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local.

### 1. Clonar el repositorio

````
git clone https://github.com/jigcolapaolo/javascript-calculator.git
````

### 2. Instalar dependencias

```
npm install
````

### 4. Ejecutar la aplicación

Para ejecutar el proyecto en modo desarrollo:

````
npm run dev
````

Para construir y ejecutar en modo producción:

````
npm build
npm start
````

## 🧪 Tests

La app incluye tests unitarios y de extremo a extremo (E2E) con configuraciones específicas para Vitest y Playwright.

### Ejecutar Tests Unitarios con Vitest

- **Unitarios**: Puedes ejecutar todos los tests con:
````
npm test
````

### Ejecutar Tests E2E con Playwright

1. Usa el siguiente comando para ejecutar todos los tests de Playwright:
````
npx playwright test
````
Opcional con UI:
````
npx playwright test --ui
````
