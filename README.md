# Liga de Disc Golf — Campo Montemorelos · 4ta Temporada

Sitio estático con instrucciones, reglas, costos, hándicap y registro de la liga de Disc Golf en Montemorelos, N.L.

🌐 **Sitio en vivo:** https://arkev.github.io/ligaDGMM/

## Contenido

- Formato de la liga (10 jornadas, flex start, sanción PDGA)
- Layouts de juego y categorías
- Costos, paquetes y Ace Pool
- Sistema de hándicap (UDisc Leagues) y formato PDGA
- Desempates, reglas generales y puntuación
- Registro de participación y resultados

## Estructura

```text
ligaDGMM/
├── index.html   # Contenido y estructura del sitio
├── styles.css   # Estilos (incluye Material Symbols Rounded)
├── script.js    # Acordeón, menú hamburguesa, back-to-top, scroll suave
└── images/      # Logos e ilustraciones (liga-DGMM.svg, disc-golf-basket.svg)
```

El sitio no requiere build ni dependencias: es HTML + CSS + JS puros. Las únicas
dependencias externas son las fuentes de Google (`Material Symbols Rounded`).

## Publicación en GitHub Pages

Este repo ya está listo para publicarse como Project Site:

1. En GitHub abre **Settings → Pages**.
2. En **Build and deployment → Source** elige **Deploy from a branch**.
3. En **Branch** selecciona `main` y carpeta `/ (root)`. Guarda.
4. Espera 1–2 minutos y verifica en https://arkev.github.io/ligaDGMM/

Cada push a `main` redespliega el sitio automáticamente.

## Vista previa local

```bash
# Opción 1: servidor simple de Python
python3 -m http.server 8000
# abre http://localhost:8000

# Opción 2: VS Code con la extensión Live Server
```

## Notas

- El menú hamburguesa aparece en ≤ 767 px; en ≥ 768 px se muestra el menú completo.
- Los iconos usan [Material Symbols Rounded](https://fonts.google.com/icons) de Google.
