//SingleTon
    var SingleTon = (function(){
        var instance;

        function createInstance(){
            var object = new Object("Instance");
            return object;
        }
        return{
            getInstance : function(){
                if(!instance){
                    instance = createInstance()
                }
                return instance
            }
        }
    })();

    var instance1 = SingleTon.getInstance();
    var instance2 = SingleTon.getInstance();

    console.log(instance1)