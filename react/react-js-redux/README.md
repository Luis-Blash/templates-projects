# React and redux

[Documentación react](https://create-react-app.dev/docs/getting-started)

```bash
npm init react-app my-app
```

Instalar redux
[Documentación redux](https://react-redux.js.org/introduction/getting-started)

```bash
npm install react-redux redux redux-thunk

```

Luego en una carpeta modules creamoslo que esta ahi

`src/modules`

Luego agregar en app.js

```js
import { Provider } from "react-redux";
import { store } from "./modules/store/store";

<Provider store={store} >
</Provider >

```
