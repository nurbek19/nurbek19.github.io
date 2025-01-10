import { HashRouter, Routes, Route } from "react-router-dom";
import CreateAdvertisement from "./pages/CreateAdvertisement";
import OwnerAdvertisementsList from "./pages/OwnerAdvertisementsList";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CreateAdvertisement />} />
        <Route path="/my-houses" element={<OwnerAdvertisementsList />} />
      </Routes>
    </HashRouter>
  )
}

export default App
