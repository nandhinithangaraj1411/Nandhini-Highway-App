class Victim{
constructor(){
//this.name=name;
//this.contact=contact;
this.highwayno=null;
this.state=null;
//this.severity=severity
}
getHospitalInfo(){
   /* var hospitalref= database.ref('Highways')
    //console.log(hospitalref)
    
    hospitalref.orderByKey().equalTo("highway1").on("value",(data) =>{
        if(allHospitals!==undefined)
        {
        allHospitals=data.val();
        console.log(allHospitals)
        }
    })*/





    console.log("Getting info" + this.highwayno);
    console.log(this.state);
var ref=database.ref(this.state)
ref.orderByKey().equalTo(this.highwayno).on("value",(data)=>{
   
         allHospitals=data.val()


})
if(allHospitals!==undefined){
console.log(allHospitals)
var displayPos=100
//console.log(allHospitals.highwayno)
for(var i in allHospitals)
{
   //console.log("in for loop"+allHospitals[])
    var eachHospital=allHospitals[i]
   // console.log(eachHospital)
   if(eachHospital!==undefined)
   {
    for (var j in eachHospital){
        //console.log(eachHospital[j])
    text("Hospital:" + eachHospital[j].Address,100,displayPos)
   // text("Hospital:" + allHospitals[i].ContactNo,100,displayPos+20)
    text("Hospital:" + eachHospital[j].Name,100,displayPos+40)
    displayPos=displayPos+60
    }
}
}
}
}

async getHighways()
{
    //allHighways=[];
  var highwayRef= await database.ref(this.state).once("value")
  if(highwayRef.exists()){
    highwayOptions=highwayRef.val();
    console.log(highwayOptions);
   allHighways=Object.keys(highwayOptions);
   console.log(allHighways)
  
    
  }
}
}
