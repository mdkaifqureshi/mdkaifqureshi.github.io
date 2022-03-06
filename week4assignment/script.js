var names=new Array();
names[0]="Bruce";
names[1]="Jacob";
names[2]="Joseph";
names[3]="jonathan";
names[4]="harry";
names[5]="hank";
names[6]="walter";
names[7]="anthony";
names[8]="peter";
names[9]="jolly";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}