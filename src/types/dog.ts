export type BreedsMap = {
  [bread: string]: string[];
};

export interface ApiResponse<T> {
  status: "success" | "error";
  message: T;
}

export interface DetailState {
  image: string;
  breed: string;
  subBreed?: string;
}