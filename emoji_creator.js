//first set of emojis
//128512 ---- 128591
//128000 ---- 128080
const emoji_tab = document.querySelector('.internal_emoji');
const covn_emoji = [[128512,128591],[128000,128511]]

const create_emoji = () =>
{
    covn_emoji.forEach(val =>
        {
            for(let i = 0; i < val[1] - val[0]; i++)
            {
                const p = document.createElement('p')
                p.innerHTML = `&#${val[0] + i}`;
                emoji_tab.appendChild(p)
            }  
        })

    const emoji_cont = document.querySelectorAll('.internal_emoji p');

    emoji_cont.forEach(val =>
        {
            val.addEventListener('click', e =>
                {
                    input.value += e.target.innerHTML
                })
        })
}
create_emoji()