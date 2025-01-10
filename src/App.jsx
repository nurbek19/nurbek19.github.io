import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import CreateAdvertisement from "./pages/CreateAdvertisement";
import OwnerAdvertisementsList from "./pages/OwnerAdvertisementsList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CreateAdvertisement />} />
        <Route path="my-houses" element={<OwnerAdvertisementsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
