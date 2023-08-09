import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => {
                setFruit(e.target.value)
                console.log(`${name} chosed ${e.target.value}`)
            }} value={fruit}>
                <option value="Apple">Apple</option>
                <option value="Cherry">Cherry</option>
                <option value="Melon">Melon</option>
            </select>
        </div>
    );
}

export default Exercise2;

