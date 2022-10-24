

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'create',/*  'delete', */ 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
            description: 'Title of the site'
        },
        {
            name: 'tagline',
            type: 'string',
            title: 'Slogan',
            description: "Your site's slogan"
          },
          {
            name: 'primaryMenu',
            type: 'array',
            description: 'Set the primary navigation bar links.',
            title: 'Navigation Menu (Primary)',
            of: [{ type: 'menuItem' }]
          },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            description: 'Description of the site'
        },
        {
            name: 'keywords',
            title: 'Meta Keywords',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Keywords for the site'
        },
        {
            name: 'author',
            title: 'Site Author',
            type: 'string',
            description: 'Author of the site'
        },
        {
            name: 'url',
            title: 'Site URL',
            type: 'url',
            description: 'URL of the site'
        },
        {
            name: 'googleAnalyticsId',
            title: 'Google Analytics ID',
            type: 'string',
            description: 'Google Analytics ID of the site'
        },
        {
            name: 'disqusShortname',
            title: 'Disqus Shortname',
            type: 'string',
            description: 'Disqus Shortname of the site'
        },
    ]
}