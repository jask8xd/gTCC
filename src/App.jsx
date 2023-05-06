import { createRoot } from "react-dom/client";
import { Search } from "./view/Search";
const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("No container to render");
}
const root = createRoot(container);
root.render(<App />);
