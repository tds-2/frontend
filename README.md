# FrontEndIndustriaJFTDSII26I

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


---
---
# Configuración del Entorno - Proyecto Angular

Aplicación desarrollada con:

- Angular CLI 21.2.10
- Angular 21.2.12
- Node.js 24.14.1
- npm 11.11.0

---

# Objetivo

Este documento explica cómo:

- clonar el repositorio
- instalar dependencias
- configurar el entorno
- ejecutar el proyecto localmente

---

# Requisitos Previos

Instalar previamente:

- Git
- Node.js
- npm

---

# Versiones Recomendadas

| Herramienta | Versión Recomendada |
|---|---|
| Node.js | 24.14.1 |
| npm | 11.11.0 |
| Angular CLI | 21.2.10 |

---

# Versiones Compatibles

Las siguientes versiones deberían funcionar correctamente:

| Herramienta | Versiones Compatibles |
|---|---|
| Node.js | 22.x - 24.x |
| npm | 10.x - 11.x |
| Angular CLI | 21.x |

Importante:
- Se recomienda usar las versiones exactas utilizadas durante el desarrollo.
- Versiones inferiores pueden provocar errores de compilación o instalación.

---

# Verificar Instalación

Verificar versiones instaladas:

```bash
node -v
npm -v
ng version
```

Ejemplo esperado:

```bash
Node.js: v24.14.1
npm: 11.11.0
Angular CLI: 21.2.10
```

---

# Instalar Angular CLI

Si `ng` no está disponible en el sistema:

```bash
npm install -g @angular/cli
```

Verificar instalación:

```bash
ng version
```

---

# Clonar el Repositorio

Clonar el proyecto desde GitHub:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta del proyecto:

```bash
cd NOMBRE_DEL_PROYECTO
```

---

# Instalar Dependencias

Instalar todas las dependencias del proyecto:

```bash
npm install
```

Esto generará automáticamente la carpeta:

```txt
node_modules
```

Importante:
- `node_modules` no se descarga desde GitHub.
- Las dependencias se reconstruyen usando `package.json` y `package-lock.json`.

---

# Ejecutar el Proyecto

Iniciar el servidor de desarrollo:

```bash
ng serve
```

o alternativamente:

```bash
npm start
```

Abrir en el navegador:

```txt
http://localhost:4200
```

---

# Configuración del Backend

El frontend consume un backend configurado en:

```ts
https://localhost:7192/api/colaboradorapi
```

Antes de ejecutar Angular:

- el backend debe estar iniciado
- el puerto `7192` o el que uses debe estar disponible
- HTTPS debe funcionar correctamente

---

# Scripts Disponibles

## Iniciar aplicación

```bash
npm start
```

## Compilar aplicación

```bash
npm run build
```

## Compilar observando cambios

```bash
npm run watch
```

## Ejecutar pruebas

```bash
npm test
```

---

# Archivos Importantes

## package.json

Define:
- dependencias
- scripts
- configuración del proyecto

## package-lock.json

Mantiene versiones exactas de dependencias.

Importante:
- no eliminar
- no modificar manualmente

## angular.json

Configuración principal de Angular.

## .gitignore

Evita incluir archivos innecesarios en el repositorio.

---

# Problemas Comunes

## Error: 'ng' no se reconoce como un comando

Instalar Angular CLI:

```bash
npm install -g @angular/cli
```

---

## Error durante `npm install`

Eliminar:

```txt
node_modules
package-lock.json
```

Luego reinstalar:

```bash
npm install
```

---

## Error de conexión con el backend

Verificar:

- backend ejecutándose
- puerto correcto
- URL correcta

---

## Error por incompatibilidad de versiones

Verificar:

```bash
node -v
npm -v
ng version
```

Se recomienda usar:

- Node.js 24.14.1
- npm 11.11.0
- Angular CLI 21.2.10

---

# Actualización de Dependencias

Actualizar dependencias:

```bash
npm update
```

Actualizar Angular CLI:

```bash
npm install -g @angular/cli
```

Actualizar Angular:

```bash
ng update
```

Importante:
- algunas actualizaciones pueden romper compatibilidad
- realizar pruebas después de actualizar

---