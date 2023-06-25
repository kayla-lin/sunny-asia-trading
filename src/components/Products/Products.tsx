import { css, cx } from "../../../styled-system/css";
import Image from "next/image";
import { container } from "../../../styled-system/patterns";
import { forwardRef } from "react";

const LED_PRICES = [
  {
    title: "4 LED Panel Light 5CCT (12 PCS)",
    per: "138 per case ($11.50ea)",
    bulk: "5 Cases or More: $114 per case ($9.5ea)",
  },
  {
    title: '6" LED Panel Light 5CCT (12 PCS)',
    per: "144 per case ($12ea)",
    bulk: "5 Cases or More: $120 per case ($10ea)",
  },
  {
    title: '2"X2" LED Panel Light 3CCT (4 PCS)',
    per: "$140 per case ($35ea)",
  },
  {
    title: '2"X4" LED Panel Light 3CCT (4 PCS)',
    per: "$200 per case ($50ea)",
  },
];

const priceBulletStyles = css({ listStyleType: "none", fontSize: "sm" });

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
      <div
        className={cx(
          css({
            display: "flex",
            justifyContent: "space-around",
          }),
          container()
        )}
      >
        {LED_PRICES.map((price, idx) => (
          <div
            key={idx}
            className={css({
              margin: "0 auto",
              marginBottom: "100px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "primary",
              color: "primary",
              display: "flex",
              flexDir: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px 20px",
            })}
          >
            <h3 className={css({ fontSize: "md", fontWeight: "bold" })}>
              {price.title}
            </h3>
            <li className={priceBulletStyles}>{price.per}</li>
            {price?.bulk && (
              <li className={priceBulletStyles}>{price?.bulk}</li>
            )}
          </div>
        ))}
      </div>
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
