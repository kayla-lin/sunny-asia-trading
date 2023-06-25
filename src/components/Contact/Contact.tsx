import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/const";
import { css, cx } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";

export const Contact = () => {
  return (
    <section
      className={css({
        bg: "primary",
        color: "white",
        position: "sticky",
        top: "50px",
        zIndex: 100,
      })}
    >
      <div
        className={cx(
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "sm",
            p: "10px 0",
          }),
          container()
        )}
      >
        <h3>{CONTACT_PHONE}</h3>
        <h3>{CONTACT_EMAIL}</h3>
        <h3>{CONTACT_ADDRESS}</h3>
      </div>
    </section>
  );
};
