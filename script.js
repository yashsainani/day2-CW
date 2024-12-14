const rootDiv = document.getElementById('root');

const div = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Learn Web Development'),
    React.createElement('p', {}, 'Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.'),
    React.createElement(
        'div',
        {},
        React.createElement('span', {}, 'he aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from '),
        React.createElement('a', {href : 'https://developer.mozilla.org/en-US/', target : '_blank'}, 'the rest of MDN'),
        React.createElement('span', {}, ', and other intermediate to advanced resources that assume a lot of previous knowledge.')
    ),
    React.createElement('p', {}, 'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.')
);

const root = ReactDOM.createRoot(rootDiv);
root.render(div);