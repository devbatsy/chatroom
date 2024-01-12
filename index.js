const ws = new WebSocket('ws://localhost:8080');
		const btn = document.querySelector('.btn')
		const input = document.querySelector('.in');
		const active = document.querySelector('.active');
		const toggle = document.querySelector('#toggle');
		const user_name = document.querySelector('.user_name p');
		const plate = document.querySelector('.plate');
		const plate_child = document.querySelectorAll('.plate div');
		const loader = document.querySelectorAll('.loader div');
		const text_cont = document.querySelector('.text_cont');
		const chat_room = document.querySelector('.chat_room');
		const status_up = document.querySelector('.status_up')
		const type_model = document.querySelector('.type_model span')
		const type_model_parent = document.querySelector('.type_model');
		const clipboard_master = document.querySelector('.clipboard_master')
		const arr_color = ['red' ,'blue', 'green','cyan'];
		const load_color = ['lightcyan' ,'lightblue', 'lightgreen','lightpurple']
		const bool = false;
		const bubble_hold = document.querySelector('.bubble_hold');
		const connect_disconect = document.querySelector('.connect_disconect');
		const contain_connect_disconect_img = document.querySelector('.contain_connect_disconect img');
		const search_bob = document.querySelector('.search_img_icon');
		const search_input = document.querySelector('.search');
		const search_click = document.querySelector('.search_click');
		const search_bar = document.querySelector('.search_bar');
		const float_bob = document.querySelector('.float_bob');
		const no_found = document.querySelector('.no_found');
		const fluid = document.querySelector('.fluid');
		const bulb = document.querySelector('.bulb');
		const toggle_img = document.querySelector('.toggle_img') 
		const sub_contain = document.querySelector('.sub_contain');
		const audio_box = document.querySelector('.audio_box');
		const video_page = document.querySelector('.video_page'); 
		const vid_btn = document.querySelector('.vid_btn'); 
		const video_img = document.querySelector('.video_img');
		const stream_site = document.querySelector('.stream_site');
		const feedbackTextarea = document.querySelector('#feedback');
		const sendFeed = document.querySelector('.sendFeed');
		const support = document.querySelector('.support');
		support.addEventListener('click', e =>{e.target.style.animationPlayState = 'paused'})
		var che = document.querySelector('.che')
		var volt = true;
		var static = true;
		var next_update = false;
		var server_obj = {
			to:['all'],
			msg:'',
			typing:'false',
			media_control:'',
			state:''
		};
		var copy_bin = '';
		var arr = [];
		var receiver = true;
		var receiver_pro = false;
		var c_array = [];
		var custom_id = 0;
		const sd_high = document.createElement('div')
			sd_high.classList.add('highlighting_search');
		var dynamic_arrayobj = {};
		var error_check_client = '';
		var chunk = [];
		const audio_mic_rec = document.createElement('audio');
		audio_mic_rec.classList.add('audio_pri')
		var bobby = '';
		var kick_in = true;
		var url_aud = '';
		var destination = '';
		var audio_sender = '';
		var state_render = '';
		var count = document.querySelector('.count');
		var count_var = 0;
		var iterate = '';
		const obj_ai_speech = {
			connection:{
				connect:' connected',
				disconnect:' disconnected'
			},
			message:{
				group:'chat mode set to group message',
				private:'chat mode set to private encryption with ',
				self_chat:'feeling bored?,try chatting with yourself',
				private_multiple:' in private chat room'
			},
			utilities:{
				empty_msg:'please enter a message',
				audio_record:'audio recording in progress',
				video_record:'video recording in progress',
				groupchat_enabled:'group chat enabled',
				groupchat_disabled:'group chat disabled',
			}
		}

		const encryption_code = {
			conv_lang:'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,&,?,:,!,0,9,8,7,6,5,4,3,2,1,',
			encypt_lang:'!,%,*,),(,^,-,+,},[,{,;,@,|,/,#,$,>,<,&,9,2,_,0,4,1,5,6,f,m,8,=,.,d,v,z,x,p,l,a'
		}

		const conv_lang_array = encryption_code['conv_lang'].split(',');
		const encrypt_lang_array = encryption_code['encypt_lang'].split(',');
		// console.log(conv_lang_array.length,encrypt_lang_array.length)
		const hello = 'hello guys whats up, hope you guys are fyn and your family'

		class encrpyt_msg{
			constructor(msg){
				this.msg = msg;
				this.de_encryption
				this.encryption
			}
			encryption(msg)
			{
				const split = msg.split('');
				let refined = new String()
				split.forEach(val =>
					{
						let indexed_alpha = new Object({alpha:null, recipient:null})
						conv_lang_array.forEach((value,idx) =>
							{
								if(value === val){
									indexed_alpha['alpha'] = idx
								}
							});
						const produce = () =>
						{
							switch(true)
							{
								case indexed_alpha['alpha'] != null:
									refined += encrypt_lang_array[indexed_alpha['alpha']];
									break;
								case indexed_alpha['alpha'] === null:
									// console.log(val)
									refined += val;
							}
						}

						produce()
					})
					console.log(refined)
					return refined;
			}

			de_encryption(msg)
			{
				const split = msg.split('');
				let refined = new String()
				split.forEach(val =>
					{
						let indexed_alpha = new Object({alpha:null, recipient:null})
						encrypt_lang_array.forEach((value,idx) =>
							{
								if(value === val)indexed_alpha['alpha'] = idx;
								else indexed_alpha['recipient'] = value
							});
						const produce = () =>
						{
							switch(true)
							{
								case indexed_alpha['alpha'] != null:
									refined += conv_lang_array[indexed_alpha['alpha']];
									break;
								case indexed_alpha['alpha'] === null:
									refined += val;
							}
						}

						produce()
					})
					return refined
			}
		}
		// let r = new encrpyt_msg().encryption(hello);
		// console.log(r)
		// console.log(new encrpyt_msg().de_encryption(r))



		bulb.addEventListener('click', (e) =>
		{
			active.scrollIntoView();
		});

		toggle_img.addEventListener('click', (e) =>
		{
			sub_contain.scrollIntoView();
		})

		search_click.addEventListener('click', (e) =>
		{
			c_array = []
			var chill = document.querySelectorAll('.div_cont');

			chill.forEach(value =>
			{
				if(value.children[0].innerHTML.includes(search_bar.value))
				{
					if(!c_array.includes(value.getAttribute('id')))
					{
						c_array.push(value.getAttribute('id'))
					}
					
				}
			});
			no_found.innerHTML = `${c_array.length} found`;
			if(c_array.length === 0)
			{
				search_bar.value = '';
				search_bar.placeholder = 'Search Not Found';
				no_found.innerHTML = '-------';
			}
		})
		float_bob.addEventListener('click', (e) =>
		{

			var chill = document.querySelectorAll('.div_cont');
			chill.forEach(value =>
			{
				if(value.getAttribute('id') === c_array[c_array.length-1])
				{
					value.appendChild(sd_high);
					value.scrollIntoView();
				}
			})
			c_array.splice(c_array.length-1)

			if(c_array.length !== 0)
			{
				no_found.innerHTML = `${c_array.length} left`;
			}
			else if(c_array.length === 0)
			{
				no_found.innerHTML = '-------';
			}
		})

		text_cont.addEventListener('click', (e) =>
		{
			var chill = document.querySelectorAll('.div_cont');
			chill.forEach(value =>
			{
				if(value.children[3] === sd_high && c_array.length === 0)
				{
					value.removeChild(sd_high)
				}
			})
		})
		//REMEMBER TO REMOVE THIS
		//starts here

			btn.onclick = function(e)
		{
			if(input.value != '')
			{
			custom_id++;
			server_obj['msg'] = input.value;
			server_obj['typing'] = false;
			ws.send(JSON.stringify(server_obj));
			const time = new Date()
			const p = document.createElement('p');
			const date = document.createElement('div');
			const d = document.createElement('div');
			const user = document.createElement('span');
			user.classList.add('user_span');
			user.innerHTML = 'you';
			date.classList.add('span_main');
			date.innerHTML = time.getHours()+':'+ time.getMinutes();
			p.classList.add('main_side');
			p.innerHTML = input.value;
			d.classList.add('div_cont')
			d.setAttribute('id', `#${custom_id}`)
			// d.classList.add('parent_render')
			d.appendChild(p);
			d.appendChild(date);
			d.appendChild(user);
			text_cont.appendChild(d);
			input.value = '';
			d.addEventListener('click', (e) =>
			{
				let delete_panel = document.createElement('div');
				let delete_bin = document.createElement('div');
				let copy_panel = document.createElement('div');
				delete_panel.classList.add('delete_panel');
				delete_bin.classList.add('delete_bin')
				copy_panel.classList.add('copy_bin');
				delete_panel.appendChild(delete_bin);
				delete_panel.appendChild(copy_panel);
				d.appendChild(delete_panel);

				delete_bin.addEventListener('click', (e) =>
				{
					text_cont.removeChild(d)
				})
				copy_panel.addEventListener('click', (e)=>
				{
					copy_bin = p.innerHTML;
				})
			})
			// console.log(server_obj['to'])
		}
	}

	//ends here

		search_bob.addEventListener('click', (e) =>
			{
			let arr_search_id = document.querySelectorAll('.incoming');
			arr_search_id.forEach(val =>
			{

				if(search_input.value === val.getAttribute('id'))
				{
					val.scrollIntoView();
				}
			})
		})

			function sendFeedBackMsg(){
				sendFeed.addEventListener('click' , e =>{
					switch(true)
					{
						case feedbackTextarea.value.length > 0:
							ws.send(JSON.stringify({feedBack:feedbackTextarea.value}));
							alert('Thank You For Droping A Feedback');
						break;
						default:
							alert('please enter a message');
					}
				})
			}

		ws.addEventListener('open',e =>
		{
			alert('connected successfully')
			ws.addEventListener('close', e =>{
				alert('😂😂, seems you have been disconnected, probably a net issue, admin kicked you out, or chat room is full')
			})
			sendFeedBackMsg();
			ws.send(JSON.stringify({uName:navigator.appVersion}))
			clipboard_master.addEventListener('click', (e) =>
			{
				console.log(input.value)
				input.value = copy_bin
			})
			input.addEventListener('input', (e)=> {

				server_obj['msg'] = '';
				server_obj['typing'] = true;
				ws.send(JSON.stringify(server_obj));
				})
			console.log('we are connected');
			arr.push('<%= profile_name%>');
			

			chat_room.addEventListener('click', e=>
			{
				ai_speech_sythesis(obj_ai_speech['message']['group'])
				server_obj['to'] = [];
				server_obj['to'].unshift('all');
				sub_contain.scrollIntoView();
				let arr_search_id = document.querySelectorAll('.incoming');
				var parcing = document.querySelectorAll('.parc');
				arr_search_id.forEach(function(val)
				{
					val.classList.remove('highlight')
				})
				for(let x in dynamic_arrayobj)
				{
					dynamic_arrayobj[x] = true;
				}

				parcing.forEach(value =>
				{
					fluid.removeChild(value)
				})
			});


			btn.onclick = function(e)
		{
			if(input.value != '')
			{
			custom_id++;
			server_obj['msg'] = new encrpyt_msg().encryption(input.value);
			console.log('this is the encrypted version: ' + new encrpyt_msg().encryption(input.value))
			server_obj['typing'] = false;
			ws.send(JSON.stringify(server_obj));
			const time = new Date()
			const p = document.createElement('p');
			const date = document.createElement('div');
			const d = document.createElement('div');
			const user = document.createElement('span');
			user.classList.add('user_span');
			user.innerHTML = 'you';
			date.classList.add('span_main');
			date.innerHTML = time.getHours()+':'+ time.getMinutes();
			p.classList.add('main_side');
			p.innerHTML = input.value;//'&#128512'
			d.classList.add('div_cont')
			d.setAttribute('id', `#${custom_id}`)
			// d.classList.add('parent_render')
			d.appendChild(p);
			d.appendChild(date);
			d.appendChild(user);
			text_cont.appendChild(d);
			// d.scrollIntoView();
			input.value = '';
			d.addEventListener('click', (e) =>
			{
				let delete_panel = document.createElement('div');
				let delete_bin = document.createElement('div');
				let copy_panel = document.createElement('div');
				delete_panel.classList.add('delete_panel');
				delete_bin.classList.add('delete_bin')
				copy_panel.classList.add('copy_bin');
				delete_panel.appendChild(delete_bin);
				delete_panel.appendChild(copy_panel);
				d.appendChild(delete_panel);

				delete_bin.addEventListener('click', (e) =>
				{
					text_cont.removeChild(d)
				})
				copy_panel.addEventListener('click', (e)=>
				{
					copy_bin = p.innerHTML;
				})
			})
		}else if(input.value === '')
		{
			alert(obj_ai_speech['utilities']['empty_msg'])
		}
	}

			ws.addEventListener('message', function({data})
			{	
				error_check_client = false;
				try
				{
					JSON.parse(data);
				}
				catch(err)
				{
					error_check_client = true
				}
				if(!error_check_client)
				{
					//NO ERROR SURFACED
					var parsed = JSON.parse(data);
					destination = parsed.destiny;
					audio_sender = parsed.sender;
					state_render = parsed.state;
				if(parsed['new_login'].length != 0 && parsed['new_login'][0] === 'add' && next_update)
				{
					connected_update(parsed);
				}
				if(static === true)
				{
					document.querySelector('.no_online').innerHTML = parsed.online_users_no;
					parsed.client_arr.forEach(val=>
					{
						connected_static(val,parsed);
					})
				}
				else if(parsed['new_login'].length != 0 && parsed['new_login'][0] === 'remove')
				{
					let y = document.querySelectorAll('.incoming');
					var parcing = document.querySelectorAll('.parc');

					document.querySelector('.no_online').innerHTML = parsed.online_users_no;
			
					ai_speech_sythesis(parsed['new_login'][1] + obj_ai_speech['connection']['disconnect'])

					connect_disconect.innerHTML = parsed['new_login'][1]
					contain_connect_disconect_img.style.opacity = '1';
					contain_connect_disconect_img.src = 'no-wifi.png'

					y.forEach((val,idx) =>
					{
						if(val.getAttribute('title') == parsed['new_login'][2]){
							var index_removed = val.getAttribute('title')
							if(server_obj['to'].includes(val.getAttribute('title')))
							{
								server_obj['to'].splice(index_removed, 1)
							}
							if(server_obj['to'].length === 0)
							{
								server_obj['to'].unshift('all');
							}
							plate.removeChild(val);
						}

					});

					parcing.forEach(value =>
					{
						if(value.getAttribute('title') === parsed['new_login'][2])
						{
							fluid.removeChild(value)
						}
					})
				}
				let name_check = document.querySelectorAll('.plate hold')

				if(che.checked)
				{
					if(destination === 'chat-bubbles.png')
						{
							msg_display(parsed);
						}
					else if(destination === 'work.png')
						{
							return 
						}
				}else if(!che.checked)
				{
					msg_display(parsed);
				}
				}
				if(error_check_client)
				{
					bobby = data;
					url_aud = window.URL.createObjectURL(bobby);
				if(che.checked)
				{
					if(destination === 'chat-bubbles.png')
						{
							if(state_render === 'audio')
							{
								red_cont()
							}else if(state_render === 'video')
							{
								blue_cont();
							}
						}
					else if(destination === 'work.png')
						{
							return 
						}
				}
					else if(!che.checked)
						{
							if(state_render === 'audio')
							{
								red_cont()
							}else if(state_render === 'video')
							{
								blue_cont();
							}
						}
				}

			});
		});

		function red_cont()
		{
			var audio_mic_sen = document.createElement('audio');
			var audio_cont = document.createElement('section');
			var destination_hold = document.createElement('div');
			var p = document.createElement('p');
			p.classList.add('sender_class');
			p.innerHTML = audio_sender;
			audio_cont.classList.add('audio_cont');
			audio_mic_sen.classList.add('audio_pri');
			destination_hold.classList.add('destination_hold');
			destination_hold.style.backgroundImage = `url(${destination})`;
			audio_mic_sen.controls = true;
			audio_mic_sen.src = url_aud;
			audio_cont.appendChild(audio_mic_sen);
			audio_cont.appendChild(p);
			audio_cont.appendChild(destination_hold);
			text_cont.appendChild(audio_cont);
			// audio_cont.scrollIntoView()
		}
		function blue_cont()
		{
			var video_sen = document.createElement('video');
			var p = document.createElement('p');
			var div = document.createElement('div');
			var time = document.createElement('p');
			var info_box = document.createElement('div');
			var video_destination = document.createElement('div');
			p.innerHTML = audio_sender;
			time.innerHTML = new Date().getHours()+':'+new Date().getMinutes();
			video_destination.style.backgroundImage = `url(${destination})`;
			video_destination.classList.add('video_destination');
			p.classList.add('sender_class')
			info_box.classList.add('info_box_one');
			info_box.appendChild(video_destination);
			info_box.appendChild(time);
			div.classList.add('video_leave');
			div.appendChild(video_sen);
			div.appendChild(p)
			div.appendChild(info_box)
			video_sen.controls = true;
			video_sen.src = url_aud;
			video_sen.classList.add('video_sen');
			text_cont.appendChild(div);
			// div.scrollIntoView()
		}


		function bubble_maker()
		{
			// bubble.classList.add('spawn')
			let bubb = document.createElement('div')
			bubb.classList.add('bubble');
			bubble_hold.appendChild(bubb);
			bubb.classList.add('spawn');
			bubb.innerHTML = '1 new msg';
			savage();
		}
		function savage()
		{
			var t = document.querySelectorAll('.bubble');
			if(t.length > 3)
			{
				bubble_hold.removeChild(t[0])	
			}
		}

		function connected_update(parsed)
		{

					var dblclick_check = 0;
					let r = document.createElement('p');
					let r_true_name = document.createElement('p')
					let div = document.createElement('div')
					let spa = document.createElement('span');
					let plate_img = document.createElement('img');
					let hold = document.createElement('div');
					const parc = document.createElement('img');
					const parc_p = document.createElement('p');


					r.innerHTML = parsed['new_login'][2];
					r_true_name.innerHTML = parsed['new_login'][1];
					div.setAttribute('title', parsed['new_login'][2])
					div.setAttribute('id', parsed['new_login'][3])
					r.style.color = arr_color[Math.floor(Math.random()*3)];
					r_true_name.classList.add('r_true_name')

					 document.querySelector('.no_online').innerHTML = parsed.online_users_no;

					 ai_speech_sythesis(parsed['new_login'][1] + obj_ai_speech['connection']['connect'])


					connect_disconect.innerHTML = parsed['new_login'][1];
					contain_connect_disconect_img.style.opacity = '1';
					contain_connect_disconect_img.src = 'wifi.png';

					dynamic_arrayobj[parsed['new_login'][2]] = true;

					parc.classList.add('parc');
					parc.src = `${parsed['new_login'][4]}`;
					plate_img.classList.add('client_elem');
					plate_img.src = `${parsed['new_login'][4]}`
					div.classList.add('incoming')
					spa.classList.add('active_span');
					hold.classList.add('hold');
					parc.appendChild(parc_p);
					hold.appendChild(plate_img);
					hold.appendChild(spa);
					hold.appendChild(r);
					hold.appendChild(r_true_name);
					div.appendChild(hold);
					plate.appendChild(div);

						parc_p.innerHTML = parsed['new_login'][1].slice(0,1);

					div.addEventListener('click',(e) =>
					{
						if(dynamic_arrayobj[parsed['new_login'][2]] === false)
						{
							var t = server_obj['to'].lastIndexOf(div.getAttribute('title'));

							div.classList.remove('highlight');
							server_obj['to'].splice(t,1);
							if(server_obj['to'].length  === 0)
								{
									server_obj['to'].unshift('all');
									ai_speech_sythesis(obj_ai_speech['message']['group'])
								}
								fluid.removeChild(parc);
								dynamic_arrayobj[parsed['new_login'][2]] = true;

						}
						else
						{
							if(server_obj['to'].includes('all'))
								{
									server_obj['to'] = [];
									ai_speech_sythesis(obj_ai_speech['message']['private'] + parsed['new_login'][1])
								} 

								const speech_sec = () =>
								{

									const multiple = () =>
									{
										ai_speech_sythesis((server_obj['to'].length + 1) + obj_ai_speech['message']['private_multiple'])
									}

									switch(true)
									{
										case server_obj['to'].length > 0:
											multiple()
									}
								}
								speech_sec()

							div.classList.add('highlight');
							if(!server_obj['to'].includes(div.getAttribute('title')))
								{
									server_obj['to'].push(div.getAttribute('title'));
								}
							fluid.appendChild(parc)
							dynamic_arrayobj[parsed['new_login'][2]] = false;

						}
					});
		}
		function connected_static(val,parsed)
		{
					var dblclick_check = 0;
					let r = document.createElement('p');
					let r_true_name = document.createElement('p')
					let div = document.createElement('div')
					let spa = document.createElement('span');
					let plate_img = document.createElement('img');
					let hold = document.createElement('div');
					const parc = document.createElement('img');
					const parc_p = document.createElement('p');

					dynamic_arrayobj[val.c_id] = true;
					// console.log(dynamic_arrayobj.keys())

					r.innerHTML = val.c_id;
					r_true_name.innerHTML = val.name;
					div.setAttribute('title',val.c_id)
					div.setAttribute('id',val.usercode)
					r.style.color = arr_color[Math.floor(Math.random()*3)];
					r_true_name.classList.add('r_true_name')

					parc.classList.add('parc');
					parc.src = `${val.profile_pic}`;
					plate_img.classList.add('client_elem');
					plate_img.src = `${val.profile_pic}`;
					div.classList.add('incoming')
					spa.classList.add('active_span');
					hold.classList.add('hold');
					parc.appendChild(parc_p);
					hold.appendChild(plate_img);
					hold.appendChild(spa);
					hold.appendChild(r);
					hold.appendChild(r_true_name);
					div.appendChild(hold);
					plate.appendChild(div);

					parc_p.innerHTML = val.name.slice(0,1);

					div.addEventListener('click',(e) =>
					{
						if(dynamic_arrayobj[val.c_id] === false)
						{
							var t = server_obj['to'].lastIndexOf(div.getAttribute('title'));

							div.classList.remove('highlight');
							server_obj['to'].splice(t,1);
							if(server_obj['to'].length  === 0)
								{
									server_obj['to'].unshift('all');
									ai_speech_sythesis(obj_ai_speech['message']['group'])
								}
								fluid.removeChild(parc);
								dynamic_arrayobj[val.c_id] = true;

						}
						else
						{
							if(server_obj['to'].includes('all'))
								{
									server_obj['to'] = [];
									const single = () =>
									{
										if(val.name === user_name.innerHTML)
										{
											ai_speech_sythesis(obj_ai_speech['message']['self_chat'])
										}
										else 
										{
											ai_speech_sythesis(obj_ai_speech['message']['private'] + val.name)
										}
									}
									single()
								} 

							const check_myself = () =>
							{
								const multiple = () =>
								{
									ai_speech_sythesis((server_obj['to'].length + 1) + obj_ai_speech['message']['private_multiple'])
								}

								switch(true)
								{
									case server_obj['to'].length > 0:
										multiple()
								}
							}

							check_myself();

							div.classList.add('highlight');
							if(!server_obj['to'].includes(div.getAttribute('title')))
								{
									server_obj['to'].push(div.getAttribute('title'));
								}
							fluid.appendChild(parc)
							dynamic_arrayobj[val.c_id] = false;

						}
					})
					static = false;
					next_update = true;
		}
		

		function msg_display(parsed,data)
		{
			
			if(parsed.msg != '' )
				{
					custom_id++;
					bubble_maker();
						const p = document.createElement('p');
						const date = document.createElement('div');
						const d = document.createElement('div');
						const user = document.createElement('span');
						const client_pub = document.createElement('div');

							client_pub.classList.add('public_client');
							client_pub.style.backgroundImage = `url(${parsed.destiny})`


						ai_speech_sythesis(`1 new message from ${parsed.sender}`)
						user.classList.add('client_span');
						user.innerHTML = parsed.sender;
						date.classList.add('span_client');
						date.innerHTML = new Date().getHours()+':'+new Date().getMinutes();
						p.classList.add('client_side')
						p.innerHTML = new encrpyt_msg().de_encryption(parsed.msg);
						d.classList.add('parent_render');
						d.classList.add('div_cont');
						d.setAttribute('id', `#${custom_id}`)
						d.appendChild(p);
						d.appendChild(date)
						d.appendChild(user);
						d.appendChild(client_pub)
						text_cont.appendChild(d);
						// d.scrollIntoView()
						var incre = text_cont.childNodes.length - 3;
						loader[1].parentNode.style.top = `${((d.offsetHeight + 10)*incre)}px`;

				d.addEventListener('click', (e) =>
					{
						let delete_panel = document.createElement('div');
						let delete_bin = document.createElement('div');
						let copy_panel = document.createElement('div');
						delete_panel.classList.add('delete_panel_client');
						delete_bin.classList.add('delete_bin')
						copy_panel.classList.add('copy_bin');
						delete_panel.appendChild(delete_bin);
						delete_panel.appendChild(copy_panel);
						d.appendChild(delete_panel);

						delete_bin.addEventListener('click', (e) =>
						{
							text_cont.removeChild(d)
						})
						copy_panel.addEventListener('click', (e)=>
						{
							copy_bin = p.innerHTML;
						})
					})
			}
			if(parsed.typing === true)
				{
					loader.forEach(val=>
					{
						val.style.opacity = '1';
						val.style.animationPlayState = 'running';
						val.style.background = load_color[Math.floor(Math.random()*3)];
					})
					type_model.innerHTML = parsed.sender + ' is typing...';
					type_model_parent.classList.add('type_model_toggle')
				}else if(parsed.typing === false)
				{
					loader.forEach(val=>
					{
						val.style.opacity = '0';
						val.style.animationPlayState = 'paused'
					})
					type_model.innerHTML = '';
					type_model_parent.classList.remove('type_model_toggle')
				}
				/*if(parsed.audio)
				{
					type_model.innerHTML = parsed.sender + ' is recording audio';
					type_model_parent.classList.add('type_model_toggle')
				}
				else if(!parsed.audio && url_aud != '')
				{
					type_model.innerHTML = '';
					type_model_parent.classList.remove('type_model_toggle');
				}*/
		}
		
		function light_theme()
		{
			text_cont.style.background = 'rgba(253,253,253)';
			document.querySelector('.container').style.background = 'rgba(236,240,234)';
			document.querySelector('.wrap').style.background = 'rgba(253,253,253)';
			input.style.background = 'rgba(236,240,234)'
		}
		function dark_theme()
		{
			text_cont.style.background = '#333';
			document.querySelector('.container').style.background = '#1d1d1d';
			document.querySelector('.wrap').style.background = '#333';
			input.style.background = 'grey'
		}


		navigator.mediaDevices.getUserMedia({audio:true ,video:true}).then(media_obj =>
		{
			let media = new MediaRecorder(media_obj);


			function counting()
			{
				count_var++;
				if(count_var <= 9)
				{
					count.innerHTML = `00.0${count_var}`;
				}
				else if(count_var > 9)
				{
					count.innerHTML = `00.${count_var}`;
				}
			}


			media.ondataavailable = function(ev)
			{
				chunk.push(ev.data);
			}
			media.onstop = function()
			{
				clearInterval(iterate);
				count_var = 0;
				count.innerHTML = '00.00';
				var blob = new Blob(chunk,{'type':`${server_obj.media_control}/mp3`});
				chunk = [];
				server_obj['msg'] = '';
				if(server_obj.media_control === 'audio')
				{
						if(blob.size !== 0)
					{
						server_obj.state = 'audio';
						server_obj.media_control = 'none'
						ws.send(JSON.stringify(server_obj));
						ws.send(blob);
						var audio_mic_stay = document.createElement('audio');
						var div_stay = document.createElement('div');
						audio_mic_stay.controls = true;
						audio_mic_stay.src = `${window.URL.createObjectURL(blob)}`;
						audio_mic_stay.classList.add('audio_stay');
						div_stay.classList.add('div_stay');
						div_stay.appendChild(audio_mic_stay)
						text_cont.appendChild(div_stay);
						// div_stay.scrollIntoView()
					}
					audio_box.style.width = '0%';
				}
				else if(server_obj.media_control === 'video')
				{
					var video_box = document.createElement('video');
					var div = document.createElement('div');
					var time_sen = document.createElement('p');
					time_sen.classList.add('time_sen')
					time_sen.innerHTML = new Date().getHours()+':'+new Date().getMinutes();
					div.classList.add('video_div')
					video_box.controls = true;
					video_box.src = `${window.URL.createObjectURL(blob)}`;
					div.appendChild(time_sen)
					div.appendChild(video_box);
					text_cont.appendChild(div)
					// div.scrollIntoView()
					video_box.classList.add('video_box')
					server_obj.media_control = 'none';
					server_obj.state = 'video';
					ws.send(JSON.stringify(server_obj));
					ws.send(blob);
				}
				
			}

			document.querySelector('.error_check').addEventListener('mouseover', e =>
				{
					console.log('am over')
					server_obj.media_control = 'audio';
					media.start();
					if(media.state === 'recording')
					{
						ai_speech_sythesis(obj_ai_speech['utilities']['audio_record'])
						audio_mic_rec.srcObject = media_obj;
						audio_mic_rec.muted = true;
						audio_box.style.width = 'fit-content';
						audio_mic_rec.play();
						server_obj.msg = '';
						ws.send(JSON.stringify(server_obj));
					}
				});

			document.querySelector('.error_check').addEventListener('mouseout', e =>
				{
					console.log('am out')
					audio_mic_rec.pause();
					media.stop();
				});

			document.querySelector('.vid_btn').addEventListener('click', e =>
				{
					server_obj.media_control = 'video';
					video_page.style.left = '0'
					media.start();
					if(media.state === 'recording')
					{
						ai_speech_sythesis(obj_ai_speech['utilities']['video_record'])
						stream_site.srcObject = media_obj;
						stream_site.play();
						iterate = setInterval(counting,1000)
						stream_site.muted = true;
					};
					ws.send(JSON.stringify(server_obj));
				});
			video_img.addEventListener('click', e =>
			{
				video_page.style.left = '-100%';
				media.stop();
				stream_site.pause();
			});

		}).catch(err =>
		{
			console.log(err);
		});

		function ai_speech_sythesis(speech)
		{
			const voices = speechSynthesis.getVoices()
			const utterance = new SpeechSynthesisUtterance(speech);
			utterance.volume = 0.4;
  			utterance.voice = voices[0]
			speechSynthesis.speak(utterance);
		}