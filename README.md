# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Some General Guidelines
Check the **index.css** file for all the variables needed to apply styles and colour schemes. Only use the variables and not any hardcoded values for colours and properties if not necessary.
The way it works is by setting the value of 'data-theme' attribute of the body tag to 'light' or 'dark' (refer to App.jsx for code). This way, we only need to change the value of the data-theme attribute to change the theme and the whole website's theme will be changed.

Some important variables are as follows : 
- --color-bg-primary : Colour for the background
- --color-bg-secondary : Colour for the elements on the foreground (alternate between these 2 for designs)
- --color-bg-highlight : Color to be chosen for buttons, links and other elements that need to stand out.
