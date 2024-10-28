import React, { useState } from "react";
// WHY type is superior to interface

type ButtonProps = {
    text: string;
    color: "red" | "blue";
}

type IButtonProps = {
    text: string;
    color: "red" | "blue";
}

//With objects we have no problems

type Url = string;

interface IURL { url: string}

let interfaceUrl: IURL = "url";
let typeUrl: Url = "url";

// interfaces works with objects only, so it has its limits


type DefaultBotonProps = React.ComponentProps<"button">; // accepts al <button> props


// Extends and intersection

type SuperButtonProps = ButtonProps & {
    size: "md" | "lg";
}

interface ISuperButtonProps extends IButtonProps {
    size: "md" | "lg";
}


// event handler function

function Button() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("Clicked!");
    return <button onClick={handleClick}>Click me!</button>;
}


// hooks
// its not neccesary to type state if the initial state is the same as the rest of the usage of that state
const [count, setCount] = useState(0);

// Perhaps its neccesary if the initial state doesnt accomplish with future state type
type User = {
    name: string;
    age: number;
}
const [user, setUser] = useState<User | null>(null);
