import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/const";
import { css, cx } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";

const contactStyle = css({
  fontSize: "sm",
  fontWeight: "light",
});

export const Footer = () => {
  return (
    <footer
      className={css({
        bg: "primary",
        p: "20px 0",
        position: "sticky",
        color: "white",
      })}
    >
      <div className={container()}>
        <h3 className={css({ fontWeight: "bold" })}>Sunny Asia Trading</h3>
        <p className={contactStyle}>{CONTACT_PHONE}</p>
        <p className={contactStyle}>{CONTACT_EMAIL}</p>
        <p className={contactStyle}>{CONTACT_ADDRESS}</p>
      </div>
    </footer>
  );
};
