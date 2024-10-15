const dateofBirth = "12/12/1980"

const getStudentName = () =>
{
    return "Khalid"
}
const getCampusName = () =>
{
    return("UEL Campus")
}
//exporting functions and variables outside the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth
//export with parameters
exports.Studentgrade=(marks)=>
{
    if(marks>50 && marks<70) return ("B grade")
        else
            return("A grade")
}

