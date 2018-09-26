// change select list automatically-------------------
var data_place = [];
var data_final = [];
for (var i = 0; i < data.length; i++){
    data_place.push(data[i].Zone);
}
console.log(data_place);

// filt data_place
data_final=data_place.filter(function(element, index, data_place){
    return data_place.indexOf(element) === index;
    // indexOf  發現元素第一次出現的索引值
});

console.log(data_final);
// append place into list automatically
var list = document.querySelector('#list');
var str1 = document.createElement('option'); //create an element
str1.textContent = "--請選擇行政區--"; //set option content
list.appendChild(str1);  //append to select list
for(var i=0;i<data_final.length;i++){
    var str = document.createElement('option');
    str.textContent = data_final[i];
    str.setAttribute("value",data_final[i]);
    list.appendChild(str);
}
// ------------------------------------------------------
// add position to h2
list.addEventListener('change',changeh2,false);
function changeh2(e){

    var h2 = e.target.value;
    var ps_sh = document.querySelector('.position-show');
    ps_sh.innerHTML = "<h2>"+h2+'</h>';
    
}
