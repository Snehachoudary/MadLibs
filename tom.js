document.getElementById('press').addEventListener('click',function(){

    var w=parseFloat(document.getElementById('wdt').value);
    var h=parseFloat(document.getElementById('hgt').value);
    var c=parseFloat(document.getElementById('clr').value);
    if(isNaN(w) || isNaN(h) || isNaN(c))
    {
        alert("please enter valis numeric values foe all inputs");
        return;
    }
    var size=(w*h*(Math.log2(c)))/8000;
    document.getElementById('disp').innerHTML="The Estimated File Size:+ "+size.toFixed(2)+ " KB";
});