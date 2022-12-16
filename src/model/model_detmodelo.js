const{DataTypes}=require("sequelize");
const sequelize=require("../database");
const proveedor=require("./model_proveedor");
const sucursal=require("./model_sucursal");
const modelo=require("./model_modelo");
const marca=require("./model_marca");


const det_modelo=sequelize.define("det_modelo",{
    iddet_modelo:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    idmodelo:{
        type:DataTypes.STRING,
        foreignKey:true
    },
    costo:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    estado:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    fecha_insert:{
        type:DataTypes.DATE,
        //allowNull:false
    },
    fecha_upd:{
        type:DataTypes.DATE,
        //allowNull:false
    },
    idproveedor:{
        type:DataTypes.INTEGER,
        foreignKey:true
    },
    idsucursal:{
        type:DataTypes.INTEGER,
        foreignKey:true
    },
    idmarca:{
        type:DataTypes.INTEGER,
        foreignKey:true
    },
    chasis:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    anho:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    detalle:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    matricula:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    color:{
        type:DataTypes.STRING,
        //allowNull: false
    },
    img:{
        type:DataTypes.BLOB("long")
    },
    img1:{
        type:DataTypes.BLOB("long")
    },
    img2:{
        type:DataTypes.BLOB("long")
    },
    tipo_iva:{
        type:DataTypes.INTEGER,
        //allowNull: false
    },
},{
    tableName:"Det_modelo",
    timestamps:false
})

det_modelo.hasOne(proveedor,{
    foreignKey:"idproveedor",
    sourceKey:"idproveedor"
})

det_modelo.hasOne(modelo,{
    foreignKey:"idmodelo",
    sourceKey:"idmodelo"
})

det_modelo.hasOne(marca,{
    foreignKey:"idmarca",
    sourceKey:"idmarca"
})

det_modelo.hasOne(sucursal,{
    foreignKey:"idsucursal",
    sourceKey:"idsucursal"
})

module.exports=det_modelo;