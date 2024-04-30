import { Link } from "react-router-dom";

function Home() {
  document.title = "RaphaStash";

  return (
    <div>
      <h1>RaphaStash</h1>

      <figcaption>
        A crowdsourced knowledge database powered by blockchain.
      </figcaption>

      <div className="home-image-container">
        <img src="https://replicate.delivery/mgxm/b0ca2e9b-7818-442a-9db4-30d79111790c/chaplin_1.jpeg" />
        <img src="https://replicate.delivery/mgxm/175a4668-2151-40e5-8499-e6e84af10542/lisa.png" />
        <img src="https://replicate.com/api/models/stability-ai/stable-diffusion/files/928234b0-22b4-4938-8552-1af213b7294f/out-0.png" />
      </div>
      <div className="home-image-container">
        <img src="https://replicate.com/api/models/stability-ai/stable-diffusion/files/d10cccc4-087e-4938-9f68-676a95df7a5b/out-0.png" />
        <img src="https://replicate.com/api/models/stability-ai/stable-diffusion/files/10b64689-e067-4d22-a7fc-75930297ade5/out-0.png" />
        <img src="https://replicate.delivery/pbxt/KKLe7Hb195UNMS5JVasS3aRi21EF9Mz9Y9inDBdPaDeWZJXk/rain-020.png" />
      </div>

      <p>
        Images collected by <b>Raphael barasa</b>&mdash;This images only act as a placeholder and are non-functionable.
      </p>
    </div>
  );
}

export { Home };
