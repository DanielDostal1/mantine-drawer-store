import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";

import HomeView from "./views/HomeView";
import TechnicalObjectsView from "./views/TechnicalObjectsView";
import RevisionUnitsView from "./views/RevisionUnitsView";

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="technical-objects" element={<TechnicalObjectsView />} />
          <Route path="revision-units" element={<RevisionUnitsView />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
