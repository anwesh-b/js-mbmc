const validName = /^[a-zA-Z]{2,30}\s{1}[a-zA-Z]{2,30}$/;
const validPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;

const nameValid = () => {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');

    if (!name.match(validName)) {
        nameError.innerHTML = 'Name must be at least 2 characters long with space.';
        return false;
    }

    nameError.innerHTML = '';
    return true;
}

const number = '.*[0-9].*';
const lowercase = '.*[a-z].*';
const uppercase = '.*[A-Z].*'; 
const special = '.*[@$!%*#?&^_-].*'; 

const passValid = () => {
    const pass = document.getElementById('password').value;
    const passError = document.getElementById('passwordError');

    if (!pass.match(validPass)) {
        passError.innerHTML = `Password must be :
            <ul>
                <li>At least 8 characters long</li>
                ${ !pass.match(number) ? '<li>Contain at least one number</li>' : ''}
                ${ !pass.match(lowercase) ? '<li>Contain at least one lowercase letter</li>' : ''}
                ${ !pass.match(uppercase) ? '<li>Contain at least one uppercase letter</li>' : ''}
                ${ !pass.match(special) ? '<li>Contain at least one special character</li>' : ''}
            </ul>`;
        return false;
    }

    passError.innerHTML = '';
    return true;
}

