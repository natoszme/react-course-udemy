import { useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const onChangeHandler = e => {
        setName(e.target.value);
    };

    console.log({ name })
    return <form>
        <input name="name" value={name} onChange={onChangeHandler} />
        <input type="submit" />
    </form>
};

export default App;