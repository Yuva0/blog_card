import "./App.css";
import BlogCard from "./components/BlogCard/BlogCard.js";

function App() {
  return (
    <div className="app">
      <BlogCard/>
      <div class="credits" data-gfe-screenshot-exclude="true">
        A challenge by &nbsp;
        <a href="https://www.greatfrontend.com/projects?ref=challenges">
          GreatFrontEnd Projects
        </a>
        . Built by &nbsp;
        <a href="https://www.greatfrontend.com/projects/u/yuva0">
          Tanuj Sengupta
        </a>
      </div>
    </div>
  );
}

export default App;
