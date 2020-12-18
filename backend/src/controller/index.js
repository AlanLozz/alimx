const ctrl = {}

ctrl.save = (req,res) => {
    const {nombre, segundoNombre, apellidoPat, apellidoMat, fechaNacimiento, correo, celular} = req.body;
    req.getConnection(async(err,conn)=>{
        if(err){
            console.log(err);
            res.status(500).json({message:'Ha ocurrido un error interno'});
        }
        conn.query(`INSERT INTO users_test_alanlozano(nombre, segundoNombre, apellidoPat, apellidoMat, fechaNacimiento, correo, telefono) VALUES('${nombre}','${segundoNombre}','${apellidoPat}','${apellidoMat}','${fechaNacimiento}','${correo}','${celular}')`,[],(err,data)=>{
            if(err){
                console.log(err);
                res.status(500).json({message:'Ha ocurrido un error al guardar los datos'});
            }
            res.status(200).json({message:'Tus datos se han guardado exitosamente'});
        });
    });
};

ctrl.getAll = (req,res) => {
    req.getConnection((err,conn)=>{
        conn.query('select  * from users_test_alanlozano',[],(err,data)=>{
            res.json(data);
        });
    });
};

ctrl.dropAll = (req,res) => {
    req.getConnection((err,conn)=>{
        conn.query(`DELETE FROM users_test_alanlozano`,[],(err,data)=>{
            res.redirect('/get');
        });
    });
};

module.exports = ctrl;