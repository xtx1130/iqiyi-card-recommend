'use strict';

const fs = require('fs');
const path = require('path');
const crontabPath = '~/mycron';

let hour = process.argv[2]||18;
let min = process.argv[3]||0;
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
fs.exists('./sharkcron',status=>{
	if(status)
		return true;
	else{
		fs.writeFile('./sharkcron',min+' '+hour+' * * 1-5 /bin/sh '+path.resolve("./")+'/openShark.sh',err=>{//> path.resolve("./")+'/test.log 2>&1'
			if(err)
				console.log(err)
		})
	}
});



