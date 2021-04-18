import html2canvas from 'html2canvas';
import SignaturePad from 'signature_pad';

const initializeSignupForm = function () {
    const dateNow = new Date();
    const today = `${dateNow.getFullYear()}. ${dateNow.getMonth() + 1}. ${dateNow.getDate()}.`;

    const registrationSign = new SignaturePad(document.getElementById('signature-pad'), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
    });

    const personalInfoSign = new SignaturePad(document.getElementById('signature-pad-personal-info'), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
    });

    document.getElementById('clear-signature-registration').onclick = function () {
        registrationSign.clear();
    }

    document.getElementById('clear-signature-personal').onclick = function () {
        personalInfoSign.clear();
    }

    document.body.onload = function () {
        document.getElementById('385405824').value = today;
        document.getElementById('852124789').value = today;
        document.getElementById('2020695976').placeholder = today;
    }

    document.getElementById('119446736').onchange = function () {
        const nameInput = document.getElementById('119446736').value
        document.getElementById('span-390780275').value = nameInput;
        document.getElementById('1934200759').value = nameInput;
        document.getElementById('510232634').value = nameInput;
    }

    document.getElementById('save-to-pdf').onclick = function () {
        const emailInput = document.getElementById('325964963');

        if (emailInput.value.endsWith('@lge.com')) {
            alert('회사 이메일은 안돼요!');
            return;
        }

        html2canvas(document.body, {
            scrollX: 0,
            scrollY: 0
        }).then(function (canvas) {
            const htmlImg = canvas.toDataURL('image/png');
            const filename = `가입신청서_${document.getElementById('119446736').value}`;

            // Create "a" tag and download from it.
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display:none';
            a.href = htmlImg;
            a.download = filename + '.png';
            a.click();
        })
        .then(function () {
            document.getElementById('final-submit').disabled = false;
        });
    }
}


export default initializeSignupForm;
