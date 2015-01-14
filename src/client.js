window.onload=function() {
    document.body.removeChild(document.body.firstChild);
    function setdata(id) {document.getElementById(id).innerHTML = data}
    setdata('d');
    setdata('data');
    if (location.href.indexOf('file') != 0) {
        document.getElementById('isserver').style.display='block';
    }
};