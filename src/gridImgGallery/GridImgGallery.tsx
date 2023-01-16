import "./gridImgGallery.scss";
import { useQuery } from "react-query";

interface UnsplashResponse {
  results: UnsplashImage[];
}

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
}

const accessKey = "idnmt2I-Zi1H4z_ByTSBy4NgqMllV92Ne5RzXdvQPzU";

export const GridImgGallery = () => {
  const { data, isLoading, error } = useQuery<UnsplashResponse, Error>(
    "imgGallery",
    async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=nature&per_page=12&client_id=${accessKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data?.results.map((result) => result.urls.regular));

  return (
    <section className="container__imgGallery">
      {data?.results.map((result) => (
        <div className="imgGallery__imgContainer">
          <img src={result.urls.regular} alt="" />
        </div>
      ))}
    </section>
  );
};
