import React from "react";


function Student(props){
    return <h1>Student Name:{props.name}</h1>;
    
}
function App() {
    return (
        <div>
            <Student name="Rizwan" />
        </div>
    );
}

export default prop;