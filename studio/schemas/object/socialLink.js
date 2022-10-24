export default {
  name: 'socialLink',
  type: 'object',
  title: 'Social Link',
  fields: [
    {
      name: 'name',
      title: 'Service Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Social URL',
      type: 'url'
    },
    {
      name: 'icon',
      title: 'Font Awesome Icon',
      type: 'string'
    }
  ]
}
