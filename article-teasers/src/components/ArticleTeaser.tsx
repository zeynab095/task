import { useState, useEffect } from "react";

const ImageContainer = ({ text }: { text: string }) => {
  return (
    <div className="imageContainer">
      <h6>{text}</h6>
    </div>
  );
};

export default function ArticleTeaser() {
  const [data, setData] = useState<string | undefined>("a");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      const data = await response.json();
      setData(data.message);
    };

    fetchData()
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <li className="article-teaser">
      <div className="centerContainer">
        {error && <ImageContainer text={error} />}

        {loading && <ImageContainer text={"Loading..."} />}

        {!error && !loading && (
          <img
            src={data}
            alt=""
            width="200px"
            height="200px"
            onError={() => setError("Image address is not availave")}
          />
        )}
      </div>
    </li>
  );
}
