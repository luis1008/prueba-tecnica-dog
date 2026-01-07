import { useEffect, useState } from "react";
import {fetchBreeds, fetchImageByBreed} from "../api/dogApi";
import type { BreedsMap } from "../types/dog";

interface Props {
  onResult: (images: string[], breed: string, subBreed?: string) => void;
}

export default function BreedForm({ onResult }: Props) {
  const [breeds, setBreeds] = useState<BreedsMap>({});
  const [breed, setBreed] = useState<string>("");
  const [subBreed, setSubBreed] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const isSearchDisabled = breed === "" || loading;

    useEffect(() => {
        fetchBreeds().then(setBreeds).catch(() => setError("Error cargando razas"));
    }, []);

    const hasSubBreeds = breed && breeds[breed]?.length > 0;

    const handleSearch = async () => {
        if (!breed) return;

        try {
            setLoading(true);
            setError("");
            const images = await fetchImageByBreed(breed, hasSubBreeds ? subBreed : undefined);
            onResult(images, breed, hasSubBreeds ? subBreed : undefined);
        }
        catch {
            setError("Error fetching images");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <label htmlFor="breed-select"></label>
                <select
                id="breed-select"
                value={breed}
                onChange={e => {
                    setBreed(e.target.value);
                    setSubBreed("");
                }}
                >
                <option value="">Selecciona Raza</option>
                {Object.keys(breeds).map((b) => (
                    <option key={b} value={b}>{b}</option>
                ))}
            </select>

            <select
                value={subBreed}
                disabled={!hasSubBreeds}
                onChange={(e) => setSubBreed(e.target.value)}
            >
                <option value="">Selecciona Subraza</option>
                {hasSubBreeds &&
                    breeds[breed].map((sb) => (
                        <option key={sb} value={sb}>{sb}</option>
                    ))}     
            </select>

            <button
            type="button" 
            onClick={handleSearch}
            disabled={isSearchDisabled}
            >
            Buscar
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
                