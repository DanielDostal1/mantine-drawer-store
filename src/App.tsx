import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";

import RedView from "./views/RedView";
import GreenView from "./views/GreenView";
import BlueView from "./views/BlueView";

import { Drawers } from "./drawers/Drawers";

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Drawers />
        <Routes>
          <Route index element={<RedView />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="/green" element={<GreenView />} />
          <Route path="/blue" element={<BlueView />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
