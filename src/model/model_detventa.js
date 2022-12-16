const{DataTypes}=require("sequelize")
const sequelize=require("../database")
const det_modelo=require("./model_detmodelo")

const det_venta=sequelize.define("det_venta",{
    idventa:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    iddet_modelo:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    estado:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    descuento:{
        type:DataTypes.DECIMAL(13.2),
        allowNull:false
    },
    subtotal:{
        type:DataTypes.DECIMAL(13.2),
        allowNull:false
    }
},{
    tableName:"Det_venta",
    timestamps:false
})

det_venta.hasOne(det_modelo,{
    foreignKey:"iddet_modelo",
    sourceKey:"iddet_modelo"
})

module.exports=det_venta