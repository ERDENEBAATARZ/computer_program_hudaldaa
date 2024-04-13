const schema = {
  name: "resourcePlaylist",
  title: "Бүтээгдэхүүн жагсаалт оруулах",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Гарчиг",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resources",
      title: "Бүтээгдэхүүн",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "resource" }],
        },
      ],
    },
  ],
};

export default schema;
