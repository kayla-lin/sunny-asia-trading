import { css, cx } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";

interface Props {
  viewProducts: VoidFunction;
}

export const Navbar = ({ viewProducts }: Props) => {
  return (
    <div
      className={css({
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "gray",
        bg: "white",
      })}
    >
      <nav
        className={cx(
          css({
            display: "flex",

            justifyContent: "space-between",
            p: "10px 0",
            h: "50px",

            alignItems: "center",
          }),
          container()
        )}
      >
        <div
          className={css({ display: "flex", alignItems: "center", gap: "5px" })}
        >
          <h1
            className={css({
              fontSize: "xl",
              fontWeight: "bold",
              color: "primary",
            })}
          >
            SUNNY ASIA
          </h1>
          <h1
            className={css({
              fontSize: "xl",
              fontWeight: "light",
              color: "secondary",
            })}
          >
            TRADING
          </h1>
        </div>
        <li
          onClick={viewProducts}
          className={css({
            fontSize: "sm",
            color: "primary",
            fontWeight: "bold",
            listStyleType: "none",
            _hover: {
              color: "secondary",
            },
          })}
        >
          Products
        </li>
      </nav>
    </div>
  );
};
