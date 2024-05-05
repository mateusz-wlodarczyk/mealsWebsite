import Link from "next/link";
import Header from "./header";
import classes from "./page.module.css";
import ImagesSlides from "./components/images/images-slides";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImagesSlides />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>next level food for next level foodies</h1>
            <p>taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">join the community</Link>
            <Link href="/meals">explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2> how it works</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </section>
        <section className={classes.section}>
          <h2> why next level food</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </section>
      </main>
    </>
  );
}
