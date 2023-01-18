# Create React, Vite, TailwindCSS, and ESLint App

<p align="center">
<img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/react.svg" width="125" align="center"><img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/plus-sign-white-tb.svg" width="60" align="center"><img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/vite.svg" width="125" align="center"><img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/plus-sign-white-tb.svg" width="60" align="center"><img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/tailwindcss.svg" width="125" align="center"><img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/plus-sign-white-tb.svg" width="60" align="center"><img src="https://github.com/CameronMontgomery/create-react-vite-tailwind/blob/main/src/assets/eslint.svg" width="125" align="center">
</p>

<div align="right">

<sub>Icons by [Icon8](https://www.icons8.com/)</sub>
 
 </div>

## Overview

While Vite already offers a very easy setup when compared to something like Webpack, there is some configuration needed, especially if you would like to use ESLint. This project aims to provide a fast and easy way to get going on your next project. The project uses an un-opinionated ESLint setting to aid development and Prettier for formatting. In addition, this project uses TailwindCSS and the TailwindCSS Prettier plug-in which automatically orders Tailwind class names.

If you are looking for a template without TailwindCSS, you can find it [here](https://github.com/CameronMontgomery/create-react-vite).

## Setup & Configuration
After you copy the template make sure to run ```npm install```

No configuration or setup is necessary; however, if you would like to change the default Prettier formatting rules you can in .prettier.config.js

If the automatic ordering of Tailwind classes via Prettier is not working after installing the plug-in, restart VSCode and it should function fine. 

## Scripts

To launch the project with the dev. server run:

```npm run dev```

To create a production build run:

```npm run build"```

To preview your build before production run:

```npm run preview```

To get a list of any ESLint warnings and Errors run:

```npm run lint```

after running this script and having errors you can run the following to walk you through the issues in more detail:

```npm run lint -- --debug```

To format the project with prettier run:

```npm run format```
