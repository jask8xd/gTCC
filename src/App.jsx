import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <header>
        <h1>Game time codechallenge</h1>
      </header>
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("No container to render");
}
const root = createRoot(container);
root.render(<App />);
