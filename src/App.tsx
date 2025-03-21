import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";

import DefectsView from "./views/DefectsView";
import TechnicalObjectsView from "./views/TechnicalObjectsView";
import RevisionUnitsView from "./views/RevisionUnitsView";
import { Drawers } from "./drawers/Drawers";

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Drawers />
        <Routes>
          <Route index element={<DefectsView />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="technical-objects" element={<TechnicalObjectsView />} />
          <Route path="revision-units" element={<RevisionUnitsView />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
