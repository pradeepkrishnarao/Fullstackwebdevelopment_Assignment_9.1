/* createObject() is a function that has myObj object properties Name, Height and aboutYourSelf() method and returns myObj object */
	function createObject() { 
        var myObj = new Object();
		
        myObj.Name = "bala";
        myObj.Height = 180;
        myObj.aboutYourSelf = function () {
			
			return "I am " + this.Name + ". I am " + this.Height + " cm height";
		
        }
			return myObj; //createObject() function returns myObj object
    }
        var me = createObject(); //me is initialized to createObject()
        console.log(me.aboutYourSelf()) //instance of object me returns aboutYourSelf() method properties