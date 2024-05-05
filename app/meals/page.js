import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "../components/meals/loading-out";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.slugMeals);

  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function PageMeals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default PageMeals;
