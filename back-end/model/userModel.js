

module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('product',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }

    })
}