// The main component (similar to a React functional component)
function ParentComponent() {
    const parentContainer = document.createElement('div');

    // State management: Using a variable 'value' to hold the state
    let value = 0;

    const valueContainer = document.createElement('div');
    valueContainer.textContent = 'Parent Component Value: 0';

    const childContainer = document.createElement('div');

    // Composition: Rendering child components within the parent component
    const childComponent1 = ChildComponent1();
    const childComponent2 = ChildComponent2();

    childContainer.appendChild(childComponent1);
    childContainer.appendChild(childComponent2);

    const button = document.createElement('button');
    button.textContent = 'Click Me';

    // Event handling: Listening to the button click
    button.addEventListener('click', handleButtonClick);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Event handling: Listening to the checkbox change
    checkbox.addEventListener('change', handleCheckboxChange);

    parentContainer.appendChild(valueContainer);
    parentContainer.appendChild(childContainer);
    parentContainer.appendChild(button);
    parentContainer.appendChild(checkbox);

    function handleButtonClick() {
        // Asynchronous state update simulation using setTimeout
        setTimeout(() => {
            value++;
            // Trigger re-render after state update
            update();
        }, 10);
    }

    function handleCheckboxChange(event) {
        // Asynchronous state update simulation using setTimeout
        setTimeout(() => {
            value = event.target.checked ? 1 : 0;
            // Trigger re-render after state update
            update();
        }, 10);
    }

    function update() {
        // Asynchronous rendering simulation using setTimeout
        setTimeout(() => {
            // Updating the text content of the value container to reflect the new state
            valueContainer.textContent = 'Parent Component Value: ' + value;

            // Remove previous child components before re-rendering
            while (childContainer.firstChild) {
                childContainer.removeChild(childContainer.firstChild);
            }

            // Re-rendering child components
            childContainer.appendChild(ChildComponent1());
            childContainer.appendChild(ChildComponent2());
        }, 10);
    }

    // Return the parent container, which represents the component's structure
    return parentContainer;
}

// Child component 1
function ChildComponent1() {
    const child1 = document.createElement('div');
    child1.textContent = 'Child Component 1';
    return child1;
}

// Child component 2
function ChildComponent2() {
    const child2 = document.createElement('div');
    child2.textContent = 'Child Component 2';
    return child2;
}

const rootElement = document.getElementById('root');

// Initial render: Append the ParentComponent to the root element
rootElement.appendChild(ParentComponent());
