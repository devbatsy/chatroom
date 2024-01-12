const websocket = require('ws');
const express = require('express')
const http = require('http');
const path = require('path');
const port = 8080||process.env.PORT;
const clienttotal = 20;
let adminConnection;
var body = require('body-parser');
var urlencoded = body.urlencoded({extended:false})
var app = express();
let client_arr = [];
let client_obj = {};
var uniqueNames = [];
var uniqueId = 0;
var main = [];
var num = '';
var numi = '';
var flu;
var client_id = 0;
var server = http.createServer(app);
var active = [];
var client_name = ''
var client_no = '';
var sending_obj = {
	destiny:'',
	sender:'',
	msg:'',
	client_arr,
	typing:false,
	new_login:[],
	online_users_no:0
};
var ty = [];
var double_check = false;
var error_server_pub = '';
class clientPack{
	constructor(message,meth,online,uid,feedBack)
	{
		this.purpose = 'admin';
		this.message = message;
		this.method = meth;
		this.online = online;
		this.uid = uid;
		this.feedBack = feedBack;
	}
}
const wss = new websocket.Server({server});
let feedBackArray = new Array();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'/ai_introduction')));
app.use(express.static(path.join(__dirname,'/admin')));
app.set('view engine', 'ejs')

	app.get('/chatapp', (req,res)=>
	{
		res.sendFile(__dirname + '/start_page.html')
	});
	app.get('/', (req,res)=>
	{
		res.sendFile(__dirname + '/ai_introduction/intro.html')
	});
	app.get('/c904', (req,res) =>{
		client_obj = {};
		res.sendFile(__dirname + '/admin/admin.html')
	})
	app.post('/server',urlencoded ,(req,res, next)=>
	{
		var temp = req.body.name
		req.body['static_id'] = client_id;
		req.body['custom_id'] = `SV26${client_id}${req.body.name.slice(0,5)}5`;

		client_obj = {};
		switch(true)
		{
			case temp.length > 0:
				res.render(__dirname + '/index.ejs',{profile_name:req.body.name});
				client_obj = req.body;
			break;
			default:
				res.sendFile(__dirname + '/start_page.html')
		}
	})

	//socket connection section
	wss.on('connection', function(ws){
		ws['client_file'] = {name:client_obj.name,c_id:client_obj.custom_id,s_id:client_obj.static_id,act:'green',usercode:client_obj.usercode,profile_pic:client_obj.avatar_msg}
			main.push(ws);
			sending_obj.online_users_no = main.length
			sending_obj['msg'] = '';
			sending_obj['new_login'][0] = 'add';
			sending_obj['new_login'][1] = ws['client_file'].name;
			sending_obj['new_login'][2] = ws['client_file'].c_id;
			sending_obj['new_login'][3] = ws['client_file'].usercode;
			sending_obj['new_login'][4] = ws['client_file'].profile_pic;
			
			switch(true)
			{
				case main.length < (clienttotal)+1:
					switch(true)
					{
						case Object.keys(client_obj).length > 0:
							main.forEach(val =>
								{
									function check(value)
									{
									  return value === val.client_file
									}
				
									if(!client_arr.some(check))
									{
										client_arr.push(val.client_file);
				
										switch(true)
										{
											case ws !== adminConnection:
												client_id++;
										}
									}
				
									val.send(JSON.stringify(sending_obj));
								})
					}
					sending_obj['new_login'] = [];
					client_obj = {};
					switch(true)
					{
						case adminConnection !== undefined:
							adminConnection.send(JSON.stringify(new clientPack(ws['client_file'],'update',client_id,uniqueId)));
						break;
					}
				break;
				default:
					switch(true)
					{
						case Object.keys(client_obj).length > 0:
							ws.close()
					}
			}
			//MSG SECTION
		ws.on('message', function(data)
		{
			error_server_pub = false
			try
			{
				JSON.parse(data)
			}
			catch(err)
			{
				error_server_pub = true
			}
			if(!error_server_pub)
			{
				let parsed = JSON.parse(data);
				switch(true)
				{
					case parsed.sender === 'admin':
						switch(true)
						{
							case parsed.msg === 'Userrequest':
								adminConnection = ws;
								main.splice(main.indexOf(ws),1);
								ws.send(JSON.stringify(new clientPack(client_arr,'gen',client_id,uniqueId,feedBackArray)));
							break;
							case parsed.msg.purpose === 'disconnect':
								let next = main.filter(val =>{return val['client_file'].c_id === parsed.msg.id});
								next[0].close();
							break;
							case parsed.msg === 'clearFeedback':
								feedBackArray = [];
						}
					break;
					case parsed.uName !== undefined:
						let checked = uniqueNames.some(val => {return val === parsed.uName});
						switch(true)
						{
							case !checked:
								uniqueNames.push(parsed.uName)
								uniqueId++;
								switch(true)
								{
									case adminConnection !== undefined:
										adminConnection.send(JSON.stringify(new clientPack({},'uniqueness',client_id,uniqueId)));
								}
								
						}
					break;
					case parsed.feedBack !== undefined:
						let stringVersion = `${ws['client_file'].name}: \n ${parsed.feedBack}`;
						feedBackArray.push(stringVersion);

						switch(true)
						{
							case adminConnection !== undefined:
								adminConnection.send(JSON.stringify(new clientPack(stringVersion,'feedBackUpdate')))
						}

					break;
					default:
						ty = parsed.to
						sending_obj['msg'] = parsed.msg;
						sending_obj['typing'] = parsed.typing;
						sending_obj['sender'] = ws.client_file.name;
						sending_obj['media_control'] = parsed.media_control;
						sending_obj['state'] = parsed.state;
						if(parsed.to.includes('all'))
						{
							main.forEach(val =>
							{
								if(val != ws)
								{
									sending_obj['destiny'] = 'work.png';
									val.send(JSON.stringify(sending_obj));
								}
							})
						}
						else if(!parsed.to.includes('all'))
						{
							parsed.to.forEach(va =>
								{
									sending_obj['destiny'] = 'chat-bubbles.png';
									main.forEach(value =>
									{
										if(value.client_file.c_id == va )
										{
											value.send(JSON.stringify(sending_obj));
										}
									})
									
								})
						}
				}
			}
			else if(error_server_pub)
			{
				if(ty.includes('all'))
				{
					main.forEach(val =>
					{
						if(val != ws)
						{
							val.send(data);
						}
					})
				}
				else if(!ty.includes('all'))
				{
					ty.forEach(va =>
						{
							main.forEach(value =>
							{
								if(value.client_file.c_id == va )
								{
									value.send(data);
								}
							})
							
						})
				}
				ty = [];
			}
		})

		function sendClosed(ws,e)
		{
			sending_obj['msg'] = '';
			sending_obj['new_login'][0] = 'remove';
			sending_obj['new_login'][1] = ws['client_file'].name;
			sending_obj['new_login'][2] = ws['client_file'].c_id;
			sending_obj['new_login'][3] = e;
			if(sending_obj.typing === true)
			{
				sending_obj.typing = false;
			}

			main.forEach(val =>
				{
					val.send(JSON.stringify(sending_obj))
				})
		}


		//close
		ws.on('close', function()
		{
			switch(true)
			{
				case ws !== adminConnection:
					let e = main.indexOf(ws);
					switch(true)
					{
						case adminConnection !== undefined:
							adminConnection.send(JSON.stringify(new clientPack(client_arr[e],'remove')));
					}
					client_arr.splice(e,1);
					main.splice(e,1);
					
					sending_obj.online_users_no = main.length;
					sendClosed(ws,e);
					sending_obj['new_login'] = [];
				break;
				case ws == adminConnection:
					adminConnection = undefined;
			}
		})
	
	})
server.listen(port);