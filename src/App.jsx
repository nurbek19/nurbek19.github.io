import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAdvertisement from "./pages/CreateAdvertisement";
import OwnerAdvertisementsList from "./pages/OwnerAdvertisementsList";


function App() {
  return (
    <BrowserRouter basename="/nurbek19.github.io">
      <Routes>
        <Route path="/" element={<CreateAdvertisement />} />
        <Route path="/my-houses" element={<OwnerAdvertisementsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
