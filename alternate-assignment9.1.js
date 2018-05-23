/* createObject object has properties Name, Height and aboutYourSelf() method */
	var createObject={
		
		Name:"bala",
		Height:180,
		aboutYourSelf:function(){
			
					return "I am "+this.Name+". I am "+this.Height+" cm height";
				}
	}
	var me=createObject; //me is initialized to createObject
	console.log(me.aboutYourSelf()); //instance of object me returns aboutYourSelf() method properties