function luminosity() {
	var r = process.argv[2];
	var g = process.argv[3];
	var b = process.argv[4];
	var luminaire = 0.2126*r + 0.7152*g + 0.0722*b;
	if (luminaire > 155){
	console.log('light');
	}
	else {
	console.log('dark');
}
}


luminosity()