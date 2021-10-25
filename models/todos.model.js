module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    id: {
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
      primaryKey: 1,
      type: Sequelize.INTEGER
    }
  });

  return Todo;
};
