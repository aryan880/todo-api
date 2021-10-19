module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    id: {
      type: Sequelize.UUID,
      primaryKey: 1,
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
