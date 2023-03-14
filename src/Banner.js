import "./Banner.css";
import figlet from "figlet";
import deltaCorpsPriest from "figlet/importable-fonts/Delta Corps Priest 1";
import { Children } from "react";

figlet.parseFont("Delta Corps Priest 1", deltaCorpsPriest);

export default function Banner({ children }) {
  const graphics = [];
  [children]
    .flat()
    .flatMap((child) =>
      typeof child === "string" ? child.trim().split(" ") : child
    )
    .filter((child) => typeof child !== "string" || child.length > 0)
    .forEach((word) => {
      let graphic;
      figlet(
        typeof word === "string" ? word : word.props.children,
        "Delta Corps Priest 1",
        (_, result) => (graphic = result)
      );
      graphics.push(
        <pre
          className="Banner_Word"
          style={{
            letterSpacing: "-0.25px",
            ...(typeof word === "string" || !("style" in word.props)
              ? null
              : word.props.style),
          }}
        >
          {graphic}
        </pre>
      );
    });
  return Children.map(graphics, (graphic) => graphic);
}
