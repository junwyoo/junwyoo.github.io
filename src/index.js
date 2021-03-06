import html2canvas from 'html2canvas';
import SignaturePad from 'signature_pad';
import jsPDF from 'jspdf';

new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
});

document.body.onload = function () {
    document.getElementById('385405824').value = new Date().toLocaleDateString();
}

document.getElementById('save-to-pdf').onclick = function () {
    console.log(document.body)
    html2canvas(document.body).then(function (canvas) {
        var htmlImg = canvas.toDataURL('image/png');
        console.log(htmlImg);

        document.getElementById('final-submit').disabled = false;

        var doc = new jsPDF('', 'pt', [canvas.width, canvas.height]);
        doc.addImage(htmlImg, 'JPEG', 10, 10);
        doc.save();
    });
}