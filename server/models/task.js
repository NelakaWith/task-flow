import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Task = sequelize.define(
    "Task",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      due_date: DataTypes.DATE,
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "tasks",
      timestamps: false,
    }
  );
  return Task;
};
