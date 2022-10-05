// function Greet(){
//     return <h1>Hello Aditya</h1>;
// }

// const Greet=()=>{
//     return <h1>Hello Aditya</h1>;
// }

// export default Greet;

export const Greet = (props) => {
    return (
     <div>
        <h1>
            Hello {props.name} a.k.a {props.heroNmae}
        </h1>
        {props.children}
    </div>   
    );
}

//export default Greet;