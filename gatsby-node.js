exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const page = {
    id: "1",
    name: "2",
  };

  createPage({
    path: `/room/${page.id}`,
    component: require.resolve(`./src/templates/room.jsx`),
    context: { page },
  });
  const page1 = {
    id: "3",
    name: "5",
  };

  createPage({
    path: `/room/${page1.id}`,
    component: require.resolve(`./src/templates/room.jsx`),
    context: { page1 },
  });
};
