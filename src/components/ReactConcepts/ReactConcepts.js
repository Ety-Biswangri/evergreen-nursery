import React from 'react';
import './ReactConcepts.css';

const ReactConcepts = () => {
    return (
        <div className='core'>
            <div className='core-concepts'>
                <h1 style={{ textAlign: "center", marginBottom: "40px" }}>React Core Concepts</h1>
                <div className='core-concepts-one'>
                    <h2 style={{ marginBottom: "13px" }}>What are the differences between Props and State?</h2>
                    <p> Props and State are related to each other. The differences between Props and State are given below:
                        <li>Props are used to send data from parent component to child component. On the contrary, States are used to store the information about the components.</li>
                        <li>Props are read only and can not be modified. While, States can be changed asynchronously.</li>
                        <li>Basically, State determines the current situation of a component. On the other hand, Props determines the communication between parent and child components.</li>
                    </p>
                </div>
                <div className='core-concepts-two'>
                    <h2 style={{ marginBottom: "13px" }}>How useState() Works?</h2>
                    <p style={{ textAlign: 'justify', fontSize: "17px" }}>
                        The useState() is a react hook. If we give a initial state value to the useState(), it returns an array. The first element of this array is a state variable and the other element is a function which updates the state variable's value. React renders any component (of any application) based on the change of the state of this component. So, useState() is used to denote the change to react.
                        The updating process of the state is asynchronous. So we get the updated value of state in asynchronous way. This is how useState() works.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default ReactConcepts;