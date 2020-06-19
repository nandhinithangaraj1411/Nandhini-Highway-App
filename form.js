class Form{
constructor(){
  
this.name=createInput('name :');
this.contact=createInput('Contact :');
this.highwayno=null;
this.highway=createSelect("highway")
//this.state=createInput('State :');
this.state=null;
this.severity=createSelect('Severity :');
this.submit=createButton('submit : ')
    this.item=0;
    this.stateSel= createSelect('state');
}
async display(){
this.name.position(100,30)
this.contact.position(100,60)
this.highway.position(100,90)

this.severity.position(100,150)
this.submit.position(150,180)
this.stateSel.position(100,120)
this.severity.option('1')
this.severity.option('2')
this.severity.option('3')
this.severity.option('4')
this.severity.option('5')
this.severity.changed(()=>{this.item=this.severity.value();});
stateRef= await database.ref('States').once("value")
if(stateRef.exists())
{
  var stateOptions= stateRef.val();
  console.log(stateOptions)
  for(var i=1; i<4;i++)
  {
    this.stateSel.option(stateOptions[i]);
  }
}
this.stateSel.changed(()=>{this.state=this.stateSel.value(); 
  console.log(this.state);
  victim.state=this.state;
  victim.getHighways();
  
  for(var i=0;i<2;i++)
  {
    this.highway.option(allHighways[i]);
  }

  
  
  this.highway.changed(()=>{
    victim.highwayno=this.highway.value();
  })
  

});

this.submit.mousePressed(()=>{
    this.name.hide();
    this.contact.hide();
    this.highway.hide();
    this.stateSel.hide();
    this.severity.hide();
    this.submit.hide();
    //victim.state=this.state
   // console.log(victim.state)
   // victim.highwayno=this.highwayno.value();
   console.log(victim.state);
   console.log(victim.highwayno);
    isAccident=true;
   // victim=new Victim( this.name.value(), this.contact.value(), this.highwayno.value(), this.state.value(), this.item);
   // victim.getHospitalInfo();
  
   
})
}

/*async getHighways()
{
  var highwayRef= await database.ref(this.state).once("value")
  if(highwayRef.exists()){
    highwayOptions=highwayRef.val();
    console.log(highwayOptions);
  }
}*/
}
