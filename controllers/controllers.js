import model from "../model/model.js";

function AllData(req,res) {
    const AllData = model.GetAllData()
    res.render('Employees',{AllData})
}

function IdData(req,res){
    const id = parseInt(req.params.id)
    const IdData = model.GetIdData(id)
    res.render('Employee',{IdData})
}

function UpdateEmpData(req,res){
    const id = parseInt(req.params.id)
    const IdData = model.GetIdData(id)
    res.render('update', {IdData})
}

function saveData(req, res){
    const id = parseInt(req.params.id)
    const body = req.body
    model.saveUpdateData(id, body)
    res.redirect(`/emp/${id}`)
}   

function deleteData(req, res){
    const Id = parseInt(req.params.id)
    model.getDeleteEmp(Id)
    res.redirect('/')

}

function addEmp1(req,res){
    const data = model.GetAllData()
    res.render('AddEmp', {data})
}


function addEmp(req, res){
    model.getaddEmp(req.body)
    console.log(req.body)
    res.redirect('/')
}


export default {
    AllData,    
    IdData,
    UpdateEmpData,
    saveData,
    deleteData,
    addEmp1,
    addEmp

}