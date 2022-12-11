let convertToDefaultNum = sourceNum => {
    sourceNum = sourceNum.split('#').join('').split('-');
    let number = ''
    
    sourceNum.forEach(sourceNumSingle => {
        if(sourceNumSingle == '284756') {
            number = number + '0';
        }
        if(sourceNumSingle == '443562') {
            number = number + '1';
        }
        if(sourceNumSingle == '779376') {
            number = number + '2';
        }
        if(sourceNumSingle == '917723') {
            number = number + '3';
        }
        if(sourceNumSingle == '016782') {
            number = number + '4';
        }
        if(sourceNumSingle == '048337') {
            number = number + '5';
        }
        if(sourceNumSingle == '016754') {
            number = number + '6';
        }
        if(sourceNumSingle == '125893') {
            number = number + '7';
        }
        if(sourceNumSingle == '842962') {
            number = number + '8';
        }
        if(sourceNumSingle == '418296') {
            number = number + '9';
        }
    });

    return number;
}
let convertToCodeNum = sourceNum => {
    sourceNum = String(sourceNum).split('');
    let number = []
    
    sourceNum.forEach(sourceNumSingle => {
        if(sourceNumSingle == '0') {
            number.push('284756');
        }
        if(sourceNumSingle == '1') {
            number.push('443562');
        }
        if(sourceNumSingle == '2') {
            number.push('779376');
        }
        if(sourceNumSingle == '3') {
            number.push('917723');
        }
        if(sourceNumSingle == '4') {
            number.push('016782');
        }
        if(sourceNumSingle == '5') {
            number.push('048337');
        }
        if(sourceNumSingle == '6') {
            number.push('016754');
        }
        if(sourceNumSingle == '7') {
            number.push('125893');
        }
        if(sourceNumSingle == '8') {
            number.push('842962');
        }
        if(sourceNumSingle == '9') {
            number.push('418296');
        }
    });

    return `#${number.join('-')}`;
}

let button = document.querySelector('#profile');
let file = document.querySelector('#file');

button.addEventListener('click', e => {
    let reader = new FileReader();
    reader.readAsText(file.files[0]);

    reader.onload = function() {
        console.log(reader.result);

        loadProfile(JSON.parse(reader.result));
    };
    reader.onerror = function() {
        console.log(reader.error);
    };
});

let loadProfile = obj => {
    console.log(obj);

    let profileBlock = document.querySelector('#profile-block');
    let login = document.querySelector('#login');

    profileBlock.classList.remove('hidden');
    login.classList.add('hidden');

    let name = document.querySelector('#prof-name');
    let code = document.querySelector('#prof-code');
    let bal = document.querySelector('#prof-bal');
    let balcode = document.querySelector('#prof-balcode');

    name.innerHTML = obj.username;
    code.innerHTML = obj.code;
    bal.innerHTML = convertToDefaultNum(obj.bal_code);
    balcode.innerHTML = obj.bal_code;

    if(obj.passcode == "486-476-102-274") {
        let addtools = document.querySelector('#addtools');

        addtools.innerHTML = `
            <input type="text" id="codegen" class="codegen">
            <button class="codegen" id="codegen-run">Генерировать</button>
        `; 

        let codegenRun = document.querySelector('#codegen-run');
        let codegen = document.querySelector('#codegen');

        codegenRun.addEventListener('click', e => {
            console.log('клик');

            codegen.value = convertToCodeNum(codegen.value);
        });
    }
}

