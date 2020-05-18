import { addParameters, configure } from '@storybook/react';

const req = require.context('../packages', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

addParameters({
    backgrounds: [
        { name: 'twitter', value: '#00aced', default: true },
        { name: 'facebook', value: '#3b5998' },
    ],
});

configure(loadStories, module);
