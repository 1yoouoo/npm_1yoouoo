<h1 align="center">1yoouoo</h1>

<p align="center">
    <img src="./docs/assets/logo.png" alt="Logo" />
    <br>
    <i>Starter Project for <strong>React</strong> using <strong>TypeScript</strong> that allows customization of all components. Dedicated to my projects. Maybe it works for you as well :) <br><strong>npm init 1yoouoo</strong></i>
</p>
<p align="center">
  This project was created for the reuse of repeated components in 1yoouoo's toy projects.
  <b>I don't like to use other people's libraries</b>, so I created my own, with the goal of making it easy to download and adapt to your needs to quickly create projects.<br/>  But if you want to use this library, check below how to use it :)
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-react-ts-web-starter"><strong>www.npmjs.com/package/1yoouoo</strong></a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://github.com/eslint/eslint">
    <img src="https://img.shields.io/badge/typescript-5.0.2-blue"/>
  </a>
  <a href="https://github.com/eslint/eslint">
    <img src="https://img.shields.io/badge/code%20style-eslint-green"/>
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat"/>
  </a>
  <a href="https://www.npmjs.com/package/1yoouoo">
    <img alt="npm" src="https://img.shields.io/npm/v/1yoouoo">
  </a>
</p>

# Getting Started

### command installs the 1yoouoo package using npm.

```
npm install 1yoouoo
```

### or

### command installs the 1yoouoo package and adds it to the dependencies section in the package.json file. This is used for installing packages required for production.

```
npm install --save 1yoouoo
```

### or

### command installs the 1yoouoo package and adds it to the devDependencies section in the package.json file. This is used for installing packages required for development.

```
npm install --save-dev 1yoouoo
```

# How to use

## Copyright

### Usage example :

```js
import "./App.css";
import { Copyright } from "copy-right-library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        ...
        <Copyright name="1yoouoo" current_year="2023" />
      </header>
    </div>
  );
}

export default App;
```
