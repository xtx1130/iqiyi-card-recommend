'use strict';

const fs = require('fs');
const path = require('path');
const plistPath = '/Library/LaunchDaemons';

let hour = process.argv[2]||18;
let min = process.argv[3]||0;
let plistData = fs.readFileSync('./plist.tpl').toString();
fs.exists('./openShark.sh',status=>{
	if(status)
		return true;
	else{
		fs.writeFile('./openShark.sh','open '+path.resolve("./")+'/remind.html',err=>{
			if(err)
				console.log(err)
		})
	}
});
let replacement = {
	min:min,
	hour:hour,
	path:path.resolve("./")
};
for(let i in replacement){
	let reg = new RegExp('\{\{'+i+'\}\}','ig');
	plistData = plistData.replace(reg,replacement[i]);
}
fs.writeFile(plistPath+'/com\.sharkphone\.launchctl.plist',plistData,err=>{
	if(err)
		console.log(err)
})


