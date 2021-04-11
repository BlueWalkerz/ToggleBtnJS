const password = document.getElementById('paswrd');
const toggle = document.getElementById('toggle');

function showHide()
{
    if(password.type == 'password')
    {
        password.setAttribute('type', 'text');
        toggle.classList.remove('hide')

    }else{
        password.setAttribute('type', 'password');
        toggle.classList.add('hide')
    }
}