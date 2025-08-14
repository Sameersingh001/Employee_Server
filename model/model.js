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
        phone: empData[index].details.phone = body.phone,
        image : empData[index].img = body.img
    };
}

export default {
    GetAllData,
    GetIdData,
    saveUpdateData
}