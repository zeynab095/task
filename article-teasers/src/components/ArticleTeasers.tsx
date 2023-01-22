import { useState, useEffect } from "react";
import ArticleTeaser from "./ArticleTeaser";

export default function ArticleTeasers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.randomnumberapi.com/api/v1.0/random?min=1&max=20&count=1`
    )
      .then((response) => response.json())
      .then((usefulData) => {
        setData(usefulData[0]);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ul className="ab-testing">
      {loading && <p>Loading...</p>}
      {error && <p>{`An error occurred: ${error}`}</p>}
      {!loading &&
        !error &&
        [...Array(data)].map((item, index) => <ArticleTeaser key={index} />)}
    </ul>
  );
}
