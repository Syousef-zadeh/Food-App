import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "./meals-grid";
import { getMeals } from "@/lib/meals";

export default async function Meals() {
    const allMeals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipes and cook it by yourselfe. It is easy and
          fast!
        </p>
        <p className={classes.cta}>
            <Link href='/meals/share'>
                Share Your Favorite Recipe.
            </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[allMeals]}/>
      </main>
    </>
  );
}
