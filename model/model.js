import empData from '../EmployeeData.js'

function GetAllData(){
    const GetAllData = empData
    return GetAllData
}


function GetIdData (id){
    const Iddata = empData.filter((data) => data.id == id)
    return Iddata
}


function saveUpdateData(id , body){
    const index = empData.findIndex((data) => data.id == id)

       return { 
        name: empData[index].name = body.name,
        email: empData[index].details.email = body.email,
        age: empData[index].details.age = body.age,
        description: empData[index].description = body.description,
        phone: empData[index].details.phone = body.phone,
        image : empData[index].img = body.img
    };
}


function getDeleteEmp(Id){
    const index = empData.findIndex((emp) => emp.id == Id)
    empData.splice(index, 1)
}


function getaddEmp(body){
    const {name,img,description,department, company, age, email, phone, joining_date } = body;

    const newID = empData.length ?empData[empData.length -1].id + 1 :1
    empData.push({id:newID ,name,img,description,department, company,
            details: {
            age: parseInt(age),
            email,
            phone,
            joining_date
        }
    })
    return empData
}




export default {
    GetAllData,
    GetIdData,
    saveUpdateData,
    getDeleteEmp,
    getaddEmp
}