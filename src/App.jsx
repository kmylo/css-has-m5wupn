import { Fragment } from "react";
import "./styles.scss";

export default function App() {
  return (
    <Fragment className="App">
      {/* fragment className is not working */}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <section>
        <div>
          <h1>This div has a title</h1>
        </div>
        <div>
          <p>This div has a regular paragraph</p>
        </div>
        <div>
          <a href="/#">adsf</a>
        </div>
        <div>
          <p class="fancy-paragraph">
            This div has a paragraph with a class on it
          </p>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet{" "}
            <a href="/#">consectetur adipisicing eli</a>t. Recusandae,
            repellendus!
          </p>
        </div>
        <div>
          <p>This div has a regular paragraph</p>
        </div>
      </section>
    </Fragment>
  );
}
