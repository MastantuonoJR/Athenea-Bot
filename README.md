# Athenea: Bot de Raid

## Descripción

Athenea es un poderoso bot de raid capáz de destruir servidores de Discord en segundos, está con comandos handleados y utiliza logs para informar al usuario acerca del ataque, esta es su primera versión así que solo incluye tres comandos.

## Comandos Principales

- **Nuke:** Elimina todos los canales, crea uno y envía un mensaje personalizado.
- **Raid:** Elimina todos los canales y crea canales mientras se envían mensajes simultaneamente.
- **Massban:** Banea a todos los usuarios posibles.

## Instalación

Para instalar a Athenea, sigue estos pasos:

1. Clona el repositorio desde GitHub:
   ```bash
   git clone https://github.com/smastantuonojr/athenea-bot.git
   ```
2. Dirigete a la carpeta del programa
   ```bash
    cd athenea-bot/src
    ```
3. Instala las librerías necesarias
   ```bash
   npm i discord.js
   ```
   ```bash
   npm i colors
   ```
4. Inicia el bot
   ```bash
   node athenea.js
   ```

   ## Configuración

   Debes de ir a `src/config.json` y configurar el archivo:
   
   ```
   {
    "Token": "TU_TOKEN",
    "Prefix": "TU_PREFIJO",
    "Name": "NOMBRE_DEL_CANAL",
    "Message": "TU_MENSAJE"
    }
   ```

<h6>&copy Steven 2025</h6>
