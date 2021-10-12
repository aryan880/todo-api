module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    value: {
      type: Sequelize.STRING,
    },
    isDone: {
      type: Sequelize.BOOLEAN,
    },
    sortOrder: {
      type: Sequelize.INTEGER,
    },
  });

  return Todo;
};
