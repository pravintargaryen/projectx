import { useState } from "react";
import ollama from "ollama";
import "./Prescreen.styles.css";
import spinner from "../../src/assets/spinner.gif";

export default function Prescreen() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    const formInput = formData.get("query");
    const data = await getData(formInput);
    await callModel(data);
  }

  async function getData(forminput) {
    const url = await fetch(`https://swapi.dev/api/people/${forminput}/`);
    const data = await url.json();
    return data;
  }

  function handleInput(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  async function callModel(jsonData) {
    setLoading(true);
    const formattedJson = JSON.stringify(jsonData, null, 2);
    const response = await ollama.chat({
      model: "llama3.2",
      messages: [
        {
          role: "user",
          content: `Summarize this json data\n\n${formattedJson}`,
        },
      ],
    });
    setResult(response.message.content);
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <h1>Prescreen Crossref Agent</h1>

        <form action={handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleInput}
            id="query"
          />
          <button>Search</button>
        </form>
        <div>
          {loading ? (
            <div>
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div>{result && JSON.stringify(result)}</div>
          )}
        </div>
      </div>
    </>
  );
}
