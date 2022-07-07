import { ThemeContext } from "./ThemeContext";
import { useContext, useState } from "react";


export const DivBox = () => {
    const theme = useContext(ThemeContext);
    const [schar, setschar] = useState("");

    const handleChanhge = (e: React.FormEvent<HTMLInputElement>) => {
        setschar( e.currentTarget.value);
    }

    return(
        <>
        <input onChange={(e)=>handleChanhge(e)} />
        <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme context {schar} {'Orçamento'} {'OrÃ§amento'} {'Garçon'} {'stomodæum'}</div>

        </>
    )
}