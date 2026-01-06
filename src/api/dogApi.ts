import axios from "axios";
import type { ApiResponse, BreedsMap } from "../types/dog";

const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const fetchBreeds = async (): Promise<BreedsMap> => {
  const res = await api.get<ApiResponse<BreedsMap>>("/breeds/list/all");
    return res.data.message;
};

export const fetchSubBreeds = async (): Promise<BreedsMap> => {
  const res = await api.get<ApiResponse<BreedsMap>>("/breeds/list/all");
  return res.data.message;
};

export const fetchImageByBreed = async (
  breed: string,
  subBreed?: string
): Promise<string[]> => {
  const url = subBreed
    ? `/breed/${breed}/${subBreed}/images`
    : `/breed/${breed}/images`;

  const res = await api.get<ApiResponse<string[]>>(url);
  return res.data.message;
};