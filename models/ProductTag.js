const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {} ///declaring ProductTag class, extending Model

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.STRING,
      references: { //references product model's id 
        model: 'product',
        key: 'id'
      } 
    },
   tag_id: {
    type: DataTypes.INTEGER,
    references: { //references tag model's id 
      model: 'tag',
      key: 'id'
    }
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
