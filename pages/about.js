import NavBar from "../components/NavBar";
import { useState }from 'react';
import Seo from "../components/Head";

export default function About() {
    const [count, setCounter] = useState(0);

    return (
        <div>
            <Seo title="About"/>
            <h1>about us</h1>
            {count}
            <button onClick={() => setCounter(count+1)}>+</button>
        </div>
    )
}