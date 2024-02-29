function customRender(reactElement, Container) {

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // Container.appendChild(domElement);
    
 const domElement = document.createElement(reactElement.type);
 console.log(domElement);
 domElement.innerHTML = reactElement.children;
 for(const prop in reactElement.props){
    if(prop ==='childern') continue;
    
    domElement.setAttribute(prop,reactElement.props[prop])
    console.log(domElement);
    }
    Container.appendChild(domElement);


}

const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: ''
    },
    children: 'Click on me'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
