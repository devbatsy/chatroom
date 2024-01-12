let array = document.querySelectorAll('.append');
const phone = document.querySelector('.phone');
const start = document.querySelector('.start')
const end = document.querySelector('.end')

let iterator = 0;
const information = {
    introduction:'lets begin',
}
const tech = {
    screen:'the screen section hold and displays all the various components of the chat application, which include the header , the text content, as well as the utilities section below.',
    header:'the header section contains the name panel , the connection log, as well as the slide panel button',
    text_cont:'the text content section holds, contains and displays all sent and recieved messages during the period of connection',
    user_msg:'the user message container holds messages sent by you',
    sender_msg:'the send message container contains messages recieved from others who are connected to the server, either through public or private encryption connection to you',
    emoji:'the emoji tab contains some of your favorite emojis, put in place to make your chatting fun',
    type:'this section contains the text area, as well as other utility buttons to make chatting easier, such as the video and audio recording buttons.',
}
const fin = {
    finaly:'in conclusion, you can also create and customise your own private group chat with family and friends.'
}
let norm = information;
const keys = {
    one:true,
    two:false,
    three:false
}

const regulator = () =>
{
            // array[iterator-2].classList.add('upright');
            // phone.style.transform = `rotateZ(${Math.floor(Math.random()*(45+20)-20)}deg) rotateX(${Math.floor(Math.random()*(45+20)-20)}deg) rotateY(${Math.floor(Math.random()*(20+10)-10)}deg)`
    // console.log(array)
    class speak{
        constructor(){
            speak.renew(this)
            speak.start(this)
        }
        static renew(level)
        {
            switch(true)
            {
                case keys.one && iterator === 2:
                    keys.one = false  ;
                    keys.two = true;
                    iterator = 0
                    norm = tech
                    break;
                case keys.two && iterator === 7:
                    keys.two = false;
                    keys.three = true;
                    iterator = 0
                    norm = fin
                    break;
            }
        }
        static start(level)
        {
            let speech = norm[`${Object.keys(norm)[iterator]}`];
            const utterance = new SpeechSynthesisUtterance(speech);
            utterance.volume = 0.4
			speechSynthesis.speak(utterance);
            if(keys.two)
            {
                phone.style.transform = `rotateZ(${Math.floor(Math.random()*(45+20)-20)}deg) rotateX(${Math.floor(Math.random()*(45+20)-20)}deg) rotateY(${Math.floor(Math.random()*(20+10)-10)}deg)`;

                array[iterator].classList.add('upright');

            }
            else if(keys.three)
            {
                phone.style.transform = `rotateZ(0deg) rotateX(0deg) rotateY(0deg)`;
            }
            utterance.addEventListener('end', e =>
            {
                if(keys.two)
                {
                    array[iterator].classList.remove('upright');
                }
                iterator++;
                new speak()
            })
        }
    }
    new speak()
}

function ai_speech_sythesis(r)
		{
			
            
		}


console.log(array)

start.onclick = e =>
{
    regulator()
    e.target.style.display = 'none';
}