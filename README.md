# meli
# 🛒 Abuse Prevention - Validación de Datos de Compras

Este proyecto implementa el **último paso del proceso de compras** antes de la confirmación de pedido, permitiendo al usuario revisar y validar su información (nombre, dirección y país), así como completar un **captcha de seguridad** para mitigar errores en los datos.

El sistema está dividido en dos capas:
- **Backend (Express + TypeScript)**: provee APIs simuladas de usuarios y países mediante archivos JSON locales.
- **Frontend (React + TypeScript + Vite)**: ofrece la interfaz del proceso de validación y confirmación, con soporte para múltiples idiomas e integración de captcha.

---

## 🧱 Estructura del proyecto


├── server/ # Servidor backend (Express)

├── client/ # Aplicación frontend (React)

### 1️⃣ Clonar el repositorio
git clone https://github.com/sofiadevel/abuse-prevention.git
## Instalar dependencias del servidor
cd server

npm install
## Instalar dependencias del cliente
cd ../client

npm install

## Ejecución del proyecto
## Backend
Ejecuta el servidor Express en modo desarrollo:

npm run dev

El servidor se ejecutará en: http://localhost:3000

## Frontend
En otra terminal:

npm run dev
La aplicación se servirá en:http://localhost:5173

El cliente consume el backend a través de las rutas:

/meli-users → Información del usuario

/meli-countries → Lista de países disponibles

🧩 Funcionalidades principales
✅ PurchasePage
Muestra los productos antes de pasar a la validacion de datos

Permite continuar hacia la validación

## ValidationPage
Precarga los datos del usuario

Permite modificarlos

Incluye validación de campos con Formik + Yup

Incluye Captcha de Google reCAPTCHA

Los cambios se guardan localmente en localStorage

## ConfirmationPage

Muestra el resumen del pedido y la información actualizada del usuario

🌍 Internacionalización (i18n)
El middleware detectLanguage.ts en el backend detecta el idioma en función del dominio:

mercadolivre.com.br → Portugués (pt)

mercadolibre.com.ar → Español (es)

Otros dominios → Inglés (en)

## Tecnologías utilizadas
## Backend:

Node.js + Express

TypeScript

## Frontend:

React + TypeScript

Vite

React Router DOM

Formik + Yup

React-Select (para el selector de país)

Bootstrap 5

Google reCAPTCHA

i18n (internacionalización simple)

Testing:

Jest

React Testing Library

Mock Service Worker (para pruebas de APIs)

## Pruebas unitarias
Las pruebas se encuentran en la carpeta:

client/src/test

Ejecuta las pruebas con:

npm test

Cobertura de pruebas:

api.test.ts → Mock APIs (usuarios y países)

Captcha.test.tsx → Componente de verificación

ValidationPage.test.tsx → Validación de formulario y captcha

## Scripts disponibles
Comando	Descripción
npm run dev	Inicia el servidor o cliente en modo desarrollo
npm run build	Compila los archivos TypeScript
npm start	Inicia el servidor Express compilado
npm test	Ejecuta las pruebas unitarias con Jest

## Mocks disponibles
Endpoint	Descripción	Fuente
/meli-users	Devuelve datos de usuario simulados	server/data/users.json
/meli-countries	Devuelve la lista de países	server/data/countries.json


