# Práctica 7 - App de Películas con React

## Integrantes

- Faed Federico Velasco Mero

## Objetivo

Desarrollar una aplicación web en React usando Vite como entorno de desarrollo, que consuma información de una API de películas, muestre un listado organizado por género y el detalle de cada película, trabajada con control de versiones en GitHub y publicada en Netlify.

## Tecnologías

- React
- Vite
- React Router DOM
- CSS
- API de TMDB (The Movie Database)
- Git y GitHub
- Netlify

## Estructura del proyecto

```
src/
  components/
    Footer.jsx / Footer.css
    Hero.jsx / Hero.css
    MovieCard.jsx / MovieCard.css
    MovieGrid.jsx / MovieGrid.css
    MovieRow.jsx / MovieRow.css
  pages/
    LandingPage.jsx
    MovieDetails.jsx / MovieDetails.css
  routers/
    AppRouter.jsx
  services/
    httpClient.js
  utils/
    getMovieImg.js
  img/
    cucei-logo.png
    placeholder.png
  App.jsx / App.css
  main.jsx
  index.css
public/
  _redirects
```

## Instalación y ejecución local

1. Clonar el repositorio:
   ```
   git clone https://github.com/faedvelasco-ops/react-peliculas.git
   cd react-peliculas
   ```
2. Instalar dependencias:
   ```
   npm install
   ```
3. Crear un archivo `.env` en la raíz del proyecto con tu propia API Key de TMDB:
   ```
   VITE_TMDB_API_KEY=TU_API_KEY
   ```
4. Ejecutar en modo desarrollo:
   ```
   npm run dev
   ```

## Rutas utilizadas

- `/` — Página principal con el listado de películas por género.
- `/movies/:movieId` — Vista de detalle de una película.

## API utilizada

[TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api) — se consumen los endpoints:

- `/movie/popular` — película destacada del banner principal.
- `/genre/movie/list` — lista de géneros disponibles.
- `/discover/movie?with_genres=ID` — películas por cada género (carruseles).
- `/movie/:movieId` — detalle de una película.

## Descripción de funcionamiento

La página principal muestra un banner destacado con la película más popular del momento, seguido de varios carruseles horizontales organizados por género (Acción, Comedia, Drama, etc.). Al dar clic en cualquier póster se navega a la vista de detalle, donde se muestra el póster, título, géneros y la descripción de la película.

## Despliegue

- **Repositorio GitHub:** https://github.com/faedvelasco-ops/react-peliculas
- **Proyecto en Netlify:** _pendiente de agregar enlace_

## Conclusiones

Esta práctica permitió aplicar los conceptos fundamentales de React (componentes, props, hooks) junto con React Router para la navegación entre vistas, el consumo de una API externa y el flujo de trabajo con Git y GitHub mediante commits incrementales. Además, se reforzó el manejo de variables de entorno para proteger credenciales y el despliegue de una SPA en Netlify.
