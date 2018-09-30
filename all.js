// change select list automatically-------------------
// get all place in data_place
var data_place = [];
for (var i = 0; i < data.length; i++){
    data_place.push(data[i].Zone);
}
console.log(data_place);

// filt data_place to remove same datas
var data_final = [];
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
    var create_option = document.createElement('option');
    create_option.textContent = data_final[i];
    create_option.setAttribute("value",data_final[i]);
    list.appendChild(create_option);
}
// ------------------------------------------------------
// add position to position title------------------------
changeh2();
change_item();
// element_inli()
list.addEventListener('change',function(){
    changeh2();
    change_item();
    // element_inli();
},false);

function changeh2(){
    var list_value = list.value;
    if(list_value == "--請選擇行政區--"){
        list_value = '三民區'
    }
    var ps_sh = document.querySelector('.position-title');
    ps_sh.innerHTML = "<h2 class="+"location-title"+">"+list_value+'</h>';
    return list_value;  
}

// create li--------------------------------------------


function change_item(){ 
    var item = document.querySelector('.item');
    var item_use_h2 = changeh2();  //list value
    item.innerHTML = '';
    for(var i=0; i<data_place.length; i++ ){
        if(data_place[i]==item_use_h2){
            var item_li = document.createElement('li');
            item_li.setAttribute('class','item-list');
            item_li.setAttribute('data-num',i);
            // item_li.textContent = data[i].Name;
            item.appendChild(item_li);
        }    
    }
    var el = document.querySelectorAll('.item-list'); 
    var il_len = el.length;
    for(var i=0; i<il_len; i++){
        // append image
        var il_img = document.createElement('img');
        var datanum = el[i].dataset.num;
        il_img.setAttribute('src',data[datanum].Picture1);
        el[i].appendChild(il_img);
        // append Name
        var il_p = document.createElement('p');
        il_p.textContent = data[datanum].Name;
        il_p.setAttribute('class','name');
        el[i].appendChild(il_p);
        // append white place
        var il_div = document.createElement('div');
        il_div.setAttribute('class','white-place');
        el[i].appendChild(il_div);
    }   
    //append div content  
    var el_div =  document.querySelectorAll('.white-place');
    var div_len = el_div.length;
    
    for(var i=0;i<div_len;i++){
        var datanum = el[i].dataset.num;
        // var div_i_clock = document.createElement('i');
        // div_i_clock.setAttribute('class','far fa-clock');
        // el_div[i].appendChild(div_i_clock);

        // open time
        var div_opentime = document.createElement('p');
        div_opentime.setAttribute('class','opentime');
        div_opentime.textContent = data[datanum].Opentime;
        el_div[i].appendChild(div_opentime);
        // Address
        var div_add = document.createElement('p');
        div_add.setAttribute('class','add');
        div_add.textContent = data[datanum].Add;
        el_div[i].appendChild(div_add);
        // phone
        var div_phone = document.createElement('p');
        div_phone.setAttribute('class','phone');
        div_phone.textContent = data[datanum].Tel;
        el_div[i].appendChild(div_phone);
    }
}
