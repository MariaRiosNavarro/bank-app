# Prop Bank - (Mobile First) with Global State (useContext) & React Router

The login is currently only fake and for now only one link, so you can click and test the app without any problems.

At the moment it is not possible to add other cards (add/remove account buttons disabled), there is only one example account.

# [Vercel Deployment here](https://bank-app-rosy.vercel.app/)

<div>
<img src="./public/readme/readme1.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme2.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme3.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme4.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme5.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme6.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme7.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme8.png" alt="readme pic" width="300px"/>
<img src="./public/readme/readme9.png" alt="readme pic" width="300px"/>

</div>

# How to set it up

Clone this repository

Install all dependencies: `npm install`

Run app in dev mode: npm run dev

Open your localhost

# A - How to use React Router in React

1 - Install React Router

`npm install react-router-dom`

2 - Configure the router

In your root component (here it's done in App.js) and define the routes for your application using the Route component. Wrap your application with the Router component to enable routing (example):

```jsx
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     {//⬇️ Here below ⬇️}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
```

3 - Wrapp in main.js your root OR in your App with the BrowserRouter your App, Example:

3a- Example in Root, inside StrictMode.:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {//⬇️ Here below ⬇️}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

3b- Example in App

```jsx
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       {//⬇️ Here below ⬇️}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

4 - Create internal links
To navigate between routes, use the Link or NavLink component provided by React Router (allways you need to import it). For Navigation is the NavLink recomended. This Tag has a .active class, so we cann change the styles wenn the NavLink is selected. For other routing we use Link. Example:

```js
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
    </nav>
  );
}

export default Navigation;
```

```css
nav .active {
  background-color: red;
}
```

# B - How to use useContext for Global State in React

1 - Create a context file, e.g. AppContext.js to define your global context. Here is an example of how to do this:

```jsx
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState); //your initial state: 0, "", [], etc..

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
```

2 - Set up the core component (normally App.js), import AppProvider and wrap your application with it. (Check allways that the import path is correct, here is an example, the path depends on your own structure.)

```jsx
import React from "react";
import {  AppProvider  } from "./AppContext";

function App() {
  return (
     {//⬇️ Here below ⬇️}
    <AppProvider>
      <App />
    <AppProvider>
  );
}

export default App;
```

3 - In any component where you want to access the global state, import and use your `useAppContext()` to get the context (curly brackets!). If you only need the state and not the setter, you can use only the state:

```jsx
import React from "react";
 // ⬇️ Here below ⬇️
import { useAppContext } from "./AppContext";

const MyComponent = () => {
      //⬇️ Here below ⬇️
  const { globalState, setGlobalState } = useAppContext();
  ...
  return(
    <>
    ...
    </>
 );
};

export default MyComponent;
```
