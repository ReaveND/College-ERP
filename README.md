# ERP-CMS
An ERP project for a College using MERN

## Important Tips:
### Creating a Project:
> npm create vite@latest {appname}
### Installing Node_Modules:
> npm install/i
### Installing Styled Components:
> npm i styled-components
### Installing Router:
> npm i react-router-dom
### Installing Tailwins CSS:
> npm install tailwindcss @tailwindcss/vite
### Configuring Tailwind plugin in Vite Config:
import { defineConfig } from 'vite'  
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
### Importing Tailwind on the CSS file accessing it:
> @import "tailwindcss";
