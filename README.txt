npm init
npm install express dotenv # para poder crear las rutas del proyecto
npm install -D nodemon     # -D (--save-dev) para que se actualize automaticamente

en package.json
"scripts": {
   "start" : "NODE_ENV=production node server" # En windows agregar "SET NODE_ENV=production & node server"
   "dev": "nodemon server"
 
 },
start: esta linea se va a ejectuar en serivdores de produccion
dev: solo en entorno de desarrollo.

luego creo el archivo config.env

para levantar en modo desarrollo:
npm run dev
