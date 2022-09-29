import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='bg-white rounded-md text-black md:mb-48 md:mt-24'>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-teal-500 rounded-t-md">
                    How Does React Work?
                </div>
                <div className="collapse-content"> 
                    <p className='text-justify p-4 text-lg'>
                        While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. <br /><br />
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. <br /> <br />
                        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-teal-500 border-y-2 border-white">
                    <div>What is the difference between props and state?</div>
                </div>
                <div className="collapse-content text-lg"> 
                    <p className='text-justify p-4'>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                    
                    <div className='text-left mx-4'>
                        <div>
                            <h1 className='underline'>Props:</h1>
                            <ul className='list-disc ml-6'>
                                <li>Props are read-only.</li>
                                <li>Props are immutable.</li>
                                <li>Props allow you to pass data from one component to other components as an argument.</li>
                                <li>Props can be accessed by the child component.</li>
                                <li>Props are used to communicate between components.</li>
                                <li>Stateless component can have Props.</li>
                                <li>Props make components reusable.</li>
                                <li>Props are external and controlled by whatever renders the component.</li>
                            </ul>
                        </div>
                        <div className='mt-4'>
                            <h1 className='underline'>State:</h1>
                            <ul className='list-disc ml-6'>
                                <li>State changes can be asynchronous.</li>
                                <li>State is mutable.</li>
                                <li>State holds information about the components.</li>
                                <li>State cannot be accessed by child components.</li>
                                <li>Props are used to communicate between components.</li>
                                <li>States can be used for rendering dynamic changes with the component.</li>
                                <li>State cannot make components reusable.</li>
                                <li>The State is internal and controlled by the React Component itself.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-teal-500 rounded-b-md active:rounded-none">
                    Why do we use useEffact?
                </div>
                <div className="collapse-content text-lg"> 
                    <p className='text-justify p-4'>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;