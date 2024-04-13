const schema = {
  name: 'resource',
  title: 'Бүтээгдэхүүн оруулах',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Бүтээгдэхүүний нэр',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Линк үүсгэх',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'downloadLink',
      title: 'Татах линк',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'views',
      title: 'Татсан тоо',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'poster',
      title: 'Постер зураг ',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      }
    },
    {
      name: 'category',
      title: 'Төрөл',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['ms office', 'autocad', 'windows', 'бусад', 'other']
      }
    }
  ]
}

export default schema;