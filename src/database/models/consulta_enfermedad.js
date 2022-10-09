'use strict'

module.exports = (sequelize, DataTypes) => {
  
  let Consulta_Enfermedad = sequelize.define('consulta_enfermedad', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true,
    freezeTableName: true,
  })

  Consulta_Enfermedad.associate = models => {
    Consulta_Enfermedad.belongsTo(models.consulta)
    Consulta_Enfermedad.belongsTo(models.enfermedad)
  }
  
  return Consulta_Enfermedad
}