document.getElementById("press").addEventListener('click',buildMadLib);
function buildMadLib()
{
    let P_name=document.getElementById("name").value;
    let character=document.getElementById("char").value;
    let adverb=document.getElementById("adv").value;
    let adjective=document.getElementById("adj").value;
    let ans='A Person Named '+P_name+' has a '+character+' character and is very '+adverb+ adjective;
    console.log(ans);
    document.getElementById('res').innerHTML=ans;

}