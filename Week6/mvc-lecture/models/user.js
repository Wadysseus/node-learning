var Users = [{
	name: 'Angus McDangle',
	age: 32,
	email: 'boinkotron@inapprop.es'
	createdAt: 148590230 // Stardate since 1970
},{
	name: 'Cornelius P. Hornswaggle',
	age: 72,
	email: 'donkeykongchampion@aol.com'
	createdAt: 148590299 // Stardate since 1970
}]

module.exports = {
	findAll: function() {
		return Users;
	},
	findOne: function() {
		return Users[index];
	}
}