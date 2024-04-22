import Image from 'next/image';
import classes from './page.module.css';

export default function mealsDetailsPage({ params }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
            <Image fill/>
        </div>
        <div className={classes.headerText}>

        </div>
      </header>
      <main></main>
    </>
  );
}
