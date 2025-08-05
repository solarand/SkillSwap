import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./utils/routes";

function App() {
  return (
    <>
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
