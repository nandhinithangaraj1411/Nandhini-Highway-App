
var form,victim,isAccident=false;
var database,allHospitals,stateRef,highwayOptions,allHighways;
function setup() {
  var canvas=createCanvas(displayWidth,displayHeight);
   database=firebase.database()
   form=new Form();
   form.display();
   victim=new Victim();
   
   
}

function draw() {
  background(255,255,255);  
  if(isAccident) 
  {
    victim.getHospitalInfo();
    //isAccident=false;
  }
  
  
}
