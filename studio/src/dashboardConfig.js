export default {
    widgets: [
      {
        name: 'gatsby',
        options: {
          sites: [
            {
              siteUrl: 'https://southjam.gtsb.io/'
            }
          ],
        },
        layout: {
          height: 'small',
          width: 'auto',
        }
      },
      {
        name: 'netlify',
        options: {
          description:
            'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
          sites: [
            {
              buildHookId: '5ec81854f9f14e01df69736c',
              title: 'Domaincord',
              name: 'domaincord-cms',
              apiId: 'b128a53a-4b5c-465e-ac58-0ae8d8121537'
            }
          ],
        },
        layout: {
          height: 'auto',
          width: 'medium',
        }
      },
      {
        name: 'project-info',
        options: {
          data: [
            {
              title: 'GitHub Repository',
              value: 'https://github.com/southjam/site',
              category: 'Code'
            },
            {
              title: 'Website',
              value: 'https://southjam.com',
              category: 'Apps'
            },
          ]
        }
      },
      {
        name: 'structure-menu',
        layout: {
          height: 'small',
          width: 'medium',
        }
      },
      {name: 'project-users', layout: {height:  'auto'}},
      {
        name: 'document-list',
        options: {title: 'Recent Posts', order: '_createdAt desc', types: ['post']},
        layout: {width: 'medium'}
      }
    ]
  }