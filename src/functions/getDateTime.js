 function getDateTime () {
    var date=new Date();
    var month_names =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
              
    var day = date.getDate();
    var month_index = date.getMonth();
    var year = date.getFullYear();
               
    return  month_names[month_index] + "-" +  day + "-" + year+" "+new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

export default getDateTime;