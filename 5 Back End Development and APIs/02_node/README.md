# Node + Express

### Paso 1: iniciar el proyecto: instalar dependencias de desarrollo y TypeScript

- Iniciar *package.json*
```bash
npm init -y
```


### Paso 2: Configurar TypeScript

> Instala `typescript` de manera glogal para "desarrollo"

```bash
npm i typescript -g
```

> Instalar `tsc` de manera global para transpilar el "desarrollo"

```bash
npm i ts-node -g
```

> Crea un archivo de configuración de TypeScript llamado tsconfig.json en la raíz del proyecto.

```bash
tsc --init
```

`./tsconfig.json`

```json	
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Paso 3: Agregar scripts en el archivo package.json
> Abre tu archivo package.json y agrega los siguientes scripts:

`./package.json`

```json
{
  "scripts": {
    "dev": "nodemon ./src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### Paso 4: Instalar Paquetes

> Dependencies

```bash
npm i express cors dotenv mongoose
```

> Development

```bash
npm i @types/node @types/express @types/cors @types/dotenv @types/mongoose @types/jsonwebtoken -D
```

### Paso 5: Crear el servidor
> Crea un archivo `index.ts` en la raíz de tu proyecto para definir el servidor.

```typescript
import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'

const PORT = 3000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### Paso 6: Ejecutar el servidor
> Para iniciar el servidor en modo de **desarrollo**, ejecuta el siguiente comando:

```bash
npm run dev
```

> * Y para compilar tu código TypeScript a JavaScript y ejecutar el servidor en **producción**, ejecuta:

```bash
npm run build
npm start
```