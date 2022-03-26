import React from 'react';
import './ReactConcepts.css';

const ReactConcepts = () => {
    return (
        <div className='core'>
            <div className='core-concepts'>
                <h1 style={{ textAlign: "center", marginBottom: "30px" }}>React Core Concepts</h1>
                <div className='core-concepts-one'>
                    <h2 style={{ marginBottom: "10px" }}>What are the differences between Props and State?</h2>
                    <p> Props and State are related to each other. The differences between Props and State are given below:
                        <li>Props are used to send data from parent component to child component. On the contrary, States are used to store the information about the components.</li>
                        <li>Props are read only and can not be modified. While, States can be changed asynchronously.</li>
                        <li>Basically, State determines the current situation of a component. On the other hand, Props determines the communication between parent and child components.</li>
                    </p>
                </div>
                <div className='core-concepts-two'>
                    <h2>How useState() Works?</h2>
                    <p>
                        The useState() is one of the react hooks. useState() returns an array.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReactConcepts;