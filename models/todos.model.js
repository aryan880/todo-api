module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    id: {
      primaryKey: 1,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    value: {
      type: Sequelize.STRING
    },
    isDone: {
      type: Sequelize.BOOLEAN
    },
    sortOrder: {
      type: Sequelize.INTEGER
    }
  });

  return Todo;
};
