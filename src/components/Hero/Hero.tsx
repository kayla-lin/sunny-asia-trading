import { css, cx } from "../../../styled-system/css";
import Image from "next/image";
import { container } from "../../../styled-system/patterns";
import { button } from "../../../styled-system/recipes";

interface Props {
  viewProducts: VoidFunction;
}

export const Hero = ({ viewProducts }: Props) => {
  return (
    <div
      className={css({
        position: "relative",
        maxWidth: "100vw",
        height: "50vh",
      })}
    >
      <div
        className={cx(
          container(),
          css({
            zIndex: 10,
            color: "white",
            fontWeight: "bold",
            h: "100%",
            display: "flex",
            flexDir: "column",
            justifyContent: "center",
            alignItems: "center",
          })
        )}
      >
        <h1
          className={css({
            fontSize: "3xl",
          })}
        >
          Welcome to Sunny Asia Trading
        </h1>
        <p
          className={css({
            maxW: "3xl",
            textAlign: "center",
            fontWeight: "light",
          })}
        >
          We import LED lights directory from manufacturers in China. We are
          proud of the excellent quality of product that has been popular in
          South Korea for 10 years.
        </p>
        <button
          className={button({ visual: "primary" })}
          onClick={viewProducts}
        >
          See Products
        </button>
      </div>
      <div className={css({ zIndex: -1 })}>
        <Image
          style={{ filter: "brightness(50%)" }}
          priority
          src={"/img/kitchen.jpg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Modern kitchen"
        />
      </div>
    </div>
  );
};
