export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605ddef9689ea33f5bfe09ec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-83jpj36e',
                  apiId: '408a332b-5ff8-459f-ab4f-43a7160d3322'
                },
                {
                  buildHookId: '605ddefad2bf903700628042',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cap7qhsp',
                  apiId: 'c93077a1-7238-4e90-a4df-97715c5c8abf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cap7qhsp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
