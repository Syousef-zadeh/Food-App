export default function MealsGrid({meals}){
    return(
        <ul className={classes.meals}>
            {meals.map(meal => <li key={meal.id}
            
            ></li>)}
        </ul>
    )
}