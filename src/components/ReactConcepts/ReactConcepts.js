import React from 'react';

const ReactConcepts = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>React Core Concepts</h1>
            <div>
                <h2>What are the differences between Props and State?</h2>
                <p> Props and State are related to each other. The differences between Props and State are given below:
                    <li>Props are used to send data from parent component to child component. On the contrary, States are used to store the information about the components.</li>
                    <li>Props are read only and can not be modified. While, States can be changed asynchronously.</li>
                    <li>Basically, State determines the current situation of a component. On the other hand, Props determines the communication between parent and child components.</li>
                </p>
            </div>
            <div>
                <h2>How useState() Works?</h2>
                <p>
                    The useState() is one of the react hooks. useState() returns an array.
                </p>
            </div>
        </div>
    );
};

export default ReactConcepts;