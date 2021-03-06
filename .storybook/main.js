module.exports = {
    stories: ['../packages/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-a11y',
        '@storybook/addon-storysource',
    ],
};
