// models/index.js
import sequelize from "../db/index.js";
import userModel from "./user.js";
import projectModel from "./project.js";
import taskModel from "./task.js";

export const User = userModel(sequelize);
export const Project = projectModel(sequelize);
export const Task = taskModel(sequelize);

// Associations
Project.belongsTo(User, { foreignKey: "owner_id" });
Task.belongsTo(Project, { foreignKey: "project_id" });
User.hasMany(Project, { foreignKey: "owner_id" });
Project.hasMany(Task, { foreignKey: "project_id" });

export default { sequelize, User, Project, Task };
