import { useState, useEffect } from "react";

const ImageContainer = ({ text }: { text: string }) => {
  return (
    <div className="imageContainer">
      <h6>{text}</h6>
    </div>
  );
};

export default function ArticleTeaser() {
  const [data, setData] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/imae/random");

      const data = await response.json();
      setData(data.message);
    };

    fetchData()
      .catch((e) => {
        console.log(e)
        setError("Error occured while fetching");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <li className="article-teaser">
      {error && <ImageContainer text={error} />}

      {loading && <ImageContainer text={"Loading..."} />}

      {!error && !loading && (
        <img
          src={data}
          alt=""
          width="200"
          height="200"
          onError={() => setError("Image address is not availave")}
        />
      )}
    </li>
  );
}
