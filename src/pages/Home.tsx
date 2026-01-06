import { useState } from "react";
import BreedForm from "../components/BreedForm";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [breed, setBreed] = useState<string>("");
  const [subBreed, setSubBreed] = useState<string | undefined>();

    return (
        <div>
            <h1>Galeria de Perros</h1>
            <BreedForm onResult={(imgs, b, sb) => {
                setImages(imgs);
                setBreed(b);
                setSubBreed(sb);
            }} />

            {images.length > 0 && (
                <ImageGrid images={images} breed={breed} subBreed={subBreed} />
            )}
        </div>
    );
}
