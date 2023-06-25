import { css, cx } from "../../../styled-system/css";
import Image from "next/image";
import { container } from "../../../styled-system/patterns";
import { forwardRef } from "react";

export const Products = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <section
        className={cx(
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
            margin: "100px 0",
          }),
          container({ maxWidth: "4xl" })
        )}
      >
        <Image
          priority
          src={"/img/led-panel.png"}
          width={175}
          height={175}
          alt="hero image example"
          className={css({ zIndex: 10, position: "relative" })}
        />
        <div>
          <h2 className={css({ fontSize: "3xl", fontWeight: "bold" })}>
            We sell by case
          </h2>
          <p>
            We distribute from a manufacturer in Asia to electricians,
            electrical companies, hardware stores, general contractors, and
            residential or offices to update lighting systems in conjunction
            with the Biden administration&apos;s light bulb bans.
          </p>
        </div>
      </section>
      <div ref={ref}>
        <iframe
          className={cx(
            css({
              aspectRatio: "cinema",
              width: "100%",
              height: "100vh",
              mb: "100px",
            }),
            container()
          )}
          src="/pdf/QKCatalog.pdf"
        />
      </div>
    </>
  );
});

Products.displayName = "Products";
