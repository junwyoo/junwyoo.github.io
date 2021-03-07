import html2canvas from 'html2canvas';
import SignaturePad from 'signature_pad';

var dateNow = new Date();
var today = `${dateNow.getFullYear()}. ${dateNow.getMonth() + 1}. ${dateNow.getDate()}.`;

var registrationSign = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
});

var personalInfoSign = new SignaturePad(document.getElementById('signature-pad-personal-info'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
});

document.getElementById('clear-signature').onclick = function () {
    registrationSign.clear();
    personalInfoSign.clear();
}

document.body.onload = function () {
    document.getElementById('385405824').value = today;
    document.getElementById('852124789').value = today;
    document.getElementById('2020695976').placeholder = today;
}

document.getElementById('119446736').onchange = function () {
    document.getElementById('span-390780275').value = document.getElementById('119446736').value;
}

document.getElementById('save-to-pdf').onclick = function () {
    html2canvas(document.body, {
        scrollX: 0,
        scrollY: 0
    }).then(function (canvas) {
        var htmlImg = canvas.toDataURL('image/png');
        var filename = `가입신청서_${document.getElementById('119446736').value}`;

        // Create "a" tag and download from it.
        var a = document.createElement('a');
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