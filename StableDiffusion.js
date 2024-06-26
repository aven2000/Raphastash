import { useState } from "react";

import { Form } from "../components/Form";

import { getImage } from "../api/ml";

function StableDiffusion() {
  document.title = "Stable Diffusion";

  /* default to transparent image */
  const [imageURL, setImageURL] = useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  );
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const formEntries = [
    {
      label: "Input",
      placeholder: "Enter a description of the image you want to generate in RaphaStash.",
      onChange: setCaption,
      onKeyPress: handleEnter,
    },
  ];

  async function handleEnter(key) {
    if (key == "Enter") {
      handleCaption();
    }
  }

  async function handleCaption() {
    setLoading(true);
    const imageURLRaw = await getImage(caption);
    setLoading(false);
    setImageURL(imageURLRaw);
  }

  function displayURL() {
    if (
      imageURL ===
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    ) {
      return <br />;
    } else {
      return (
        <span>
          <p>
            <b>Link to Image:</b> <span className="url">{imageURL}</span>
            <br />
          </p>
        </span>
      );
    }
  }

  return (
    <div>
      <h1>Stable Diffusion</h1>
      <img className="stable-diffusion-image" src={imageURL}></img>
      {displayURL()}
      <Form
        formEntries={formEntries}
        buttonText={loading ? "Loading..." : "Generate"}
        onClick={handleCaption}
      />
    </div>
  );
}

export { StableDiffusion };
