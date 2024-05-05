import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slugMeals);

  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailt:${meal.creator_email}`}>{meal.name}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
