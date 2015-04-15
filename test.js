var Person = Class.extend({
	_issleeping:true,
	init:function(name){
		this._name = name;	
	},
	isSleeping:function(){
		return this._issleeping;
	}
});

var Programmer = Person.extend({
	init:function(name,issleeping){
		this._super(name);
		this._issleeping = issleeping;		
		
	}
});

var person = new Person("张三");
var diors = new Programmer("李四",false);
console.log(person.isSleeping());
console.log(person._name);
console.log(diors._name);
console.log(diors.isSleeping());