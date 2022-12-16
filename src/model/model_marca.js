const{DataTypes}=require("sequelize")
const database=require("../database")

const marca = database.define("marca",{
    
    idmarca:{
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
    tableName:"Marca",
    timestamps:false
})

module.exports=marca
