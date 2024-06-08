import { useEffect } from "react";

export default function CalcExp(n) {
    useEffect(() => {
        console.log(eval(n));
    }, [n])
}