import Link from "next/link";

export default function Meals(){
    return(
        <main>
            <h1>Meals Page</h1>
            <p><Link href="/meals/1">Foods</Link></p>
            <p><Link href="/meals/2">Drinks</Link></p>
            <p><Link href="/meals/share">Share meals</Link></p>
        </main>
    )
}