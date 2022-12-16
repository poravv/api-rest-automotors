const{DataTypes}=require("sequelize")
const database=require("../database")

const modelo = database.define("modelo",{
    
    idmodelo:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    tableName:"Modelo",
    timestamps:false
})

module.exports=modelo
