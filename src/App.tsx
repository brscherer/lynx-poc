import { furnituresPictures } from "./assets/furnitures/furnituresPictures.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import './index.css'

export function App() {
  return <Gallery pictureData={furnituresPictures} />
}
