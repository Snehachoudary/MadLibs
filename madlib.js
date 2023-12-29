document.getElementById("press").addEventListener('click',buildMadLib);
function buildMadLib()
{
    let P_name=document.getElementById("name").value;
    let character=document.getElementById("char").value;
    let adverb=document.getElementById("adv").value;
    let adjective=document.getElementById("adj").value;
    let ans='One day,my friend ' + P_name +' was visiting California and ran into ' + character + '.' +  P_name + 'ran' + adverb + ' to meet '+character+'.'+' But '+character+' turned out to be '+ adjective + ' and '+P_name+' did not enjoy the meeting.';
    console.log(ans);
    document.getElementById('res').innerHTML=ans;

}
