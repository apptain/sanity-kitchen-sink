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
                  buildHookId: '62d3d12481fa5c375eb8a76a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8xf4dqms',
                  apiId: 'f3f69235-1f1a-4cbf-a526-7d0a089c3079'
                },
                {
                  buildHookId: '62d3d124e5d6e430b664cd8c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t7mtqqg6',
                  apiId: '87df53b6-934f-43d5-9ce1-c6e9f8ebbce3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apptain/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t7mtqqg6.netlify.app', category: 'apps'}
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
