# Sea-Tools: Herramientas para Seafight

Plataforma web para jugadores de Seafight, diseñada para ofrecer múltiples funcionalidades útiles dentro del juego, comenzando por una calculadora de puntos élite. Desarrollada por un jugador apasionado por la comunidad, con el objetivo de añadir futuras herramientas de apoyo al juego.

## Tabla de Contenido

1. [Características](#características)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Cómo Empezar](#cómo-empezar)
4. [¿Quieres Contribuir?](#quieres-contribuir)
5. [Convención de Commits](#convención-de-commits)
6. [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Características

### Calculadora de Puntos Élite (PEL)

- Calcula los puntos élite (PEL) totales que puedes obtener.
- Se basa en:
  - Puntos PEL que recibes por cada disparo.
  - El intervalo (recarga) entre tus disparos (en segundos).
  - El tiempo total de juego que planeas dedicar (en horas).
- Muestra los resultados en tiempo real, incluyendo un cálculo de los puntos por hora para que optimices tu farmeo.

### Características Futuras

Tenemos planeado añadir más calculadoras y herramientas, como:

- **Gestor de Recursos por Evento:**
  - Una potente herramienta para llevar un control preciso de tus recursos durante los eventos del juego.
  - **Inicio de Evento:** Registra la cantidad inicial de cada uno de tus recursos (perlas, coronas, etc.).
  - **Seguimiento en Tiempo Real:** Se creará un panel para el evento donde cada recurso tendrá su propia pestaña. Podrás registrar gastos (egresos) como la compra de munición o llaves, y ver tu balance actualizado al instante.
  - **Balance Final:** Al finalizar el evento, introduce tus cantidades finales. La herramienta calculará automáticamente la ganancia o pérdida neta de cada recurso, mostrándote un resumen claro de tu rendimiento.
  - **Historial de Eventos:** Podrás gestionar múltiples eventos de forma separada, cada uno con su propio título y balance, para comparar tu progreso a lo largo del tiempo.
- ¡Y mucho más!

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el mantenimiento y la escalabilidad:

```
sea-tools/
├── public/              # Archivos estáticos (fuentes, favicons, etc.)
│   └── fonts/           # Fuentes de la aplicación (WOFF, TTF, etc.)
└── src/                 # Código fuente de la aplicación
    ├── assets/          # Imágenes y recursos estáticos procesados por Vite
    ├── components/      # Componentes de React reutilizables
    ├── lib/             # Lógica de negocio, hooks, servicios y utilidades
    ├── styles/          # Archivos SCSS globales, variables y estilos compartidos
    ├── App.tsx          # Componente principal de la aplicación
    └── main.tsx         # Punto de entrada de la aplicación
```

## Cómo Empezar

Sigue estos pasos para clonar el proyecto y ejecutarlo en tu máquina local para desarrollo y pruebas.

### Pre-requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS) y npm.

### Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/JuanWebDeveloper/sea-tools.git
   ```

2. **Navega a la carpeta del proyecto:**

   ```bash
   cd sea-tools
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

¡Y listo! Abre tu navegador y visita `http://localhost:5173` (o el puerto que indique la terminal) para ver la aplicación en acción.

## ¿Quieres Contribuir?

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación o quieres corregir un error, sigue estos pasos:

1. **Abre un Issue:** Antes de empezar a programar, por favor, [abre un issue](https://github.com/tu-usuario/sea-tools/issues) para discutir el cambio que propones. Esto nos ayuda a mantenernos organizados.

2. **Haz un Fork:** Crea una copia del repositorio en tu propia cuenta de GitHub.

3. **Crea una Rama:** Desde tu fork, crea una nueva rama para tus cambios. Nómbrala de forma descriptiva (ej. `feat/calculadora-daño` o `fix/error-visual-header`).

   ```bash
   git checkout -b feat/mi-nueva-funcionalidad
   ```

4. **Desarrolla:** Haz todos los cambios necesarios en tu rama.

5. **Haz Commit:** Empaqueta tus cambios en un commit. ¡Recuerda seguir la [convención de commits](#convención-de-commits) que hemos definido!

   ```bash
   git commit -m "feat: Se añade la nueva calculadora de daño"
   ```

6. **Sube tus Cambios:** Sube tu rama a tu fork en GitHub.

   ```bash
   git push origin feat/mi-nueva-funcionalidad
   ```

7. **Abre un Pull Request:** Ve al repositorio original y abre un Pull Request desde tu rama. Describe detalladamente los cambios que hiciste.

## Convención de Commits

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/), una especificación simple sobre los mensajes de los commits. Esto crea un historial de commits explícito y fácil de navegar.

Cada mensaje de commit consiste en un **tipo**, un **ámbito** opcional y una **descripción**.

`<tipo>[ámbito opcional]: <descripción>`

### Tipos Principales

- **feat**: Para una nueva característica para el usuario (`feature`).
- **fix**: Para la corrección de un error en producción (`bug fix`).
- **docs**: Cambios exclusivos en la documentación (como este README).
- **style**: Cambios que no afectan el significado del código (espacios, formato, etc).
- **refactor**: Un cambio en el código que no corrige un error ni añade una característica.
- **chore**: Otros cambios que no modifican el código `src` ni los archivos de prueba (ej. actualización de dependencias).

**Ejemplo:**

```bash
git commit -m "feat(recursos): Añadir botón para registrar gastos"
```

```bash
git commit -m "fix: Corregir cálculo de PEL con valores decimales"
```

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- SCSS
- HTML5
