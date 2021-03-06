// change select list automatically-------------------
// get all place in data_place

var data_place = [];
for (var i = 0; i < data.length; i++){
    data_place.push(data[i].Zone);
}

// filt data_place to remove same datas
var data_final = [];
data_final=data_place.filter(function(element, index, data_place){
    return data_place.indexOf(element) === index;
    // indexOf  發現元素第一次出現的索引值
});

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

// -------------------run function----------------
var list_value = list.value;
changehArea();
change_item();
add_icon();

// element_inli()
list.addEventListener('change',function(){
    list_value = list.value;
    changehArea();
    change_item();
    add_icon()
    
},false);
// btn add event
var btn_place = document.querySelectorAll('.middle-btn a');
for(var i=0;i<btn_place.length;i++){
    btn_place[i].addEventListener('click',function(e){
        e.preventDefault();
        list_value = this.dataset.place;
        changehArea();
        change_item();
        add_icon()
    })
    
}

//--------------------------------------------------

// add position to position title------------------------
// var list_value = list.value; //global variable

function changehArea(){
    // list_value = list.value;
    if(list_value == '--請選擇行政區--'){
        list_value = '三民區';
    }else if(list_value == undefined){
        list_value = '三民區';
    }
    var ps_sh = document.querySelector('.position-title');
    ps_sh.innerHTML = "<h2 class="+"location-title"+">"+list_value+'</h>';
    return list_value;  
}

// create li--------------------------------------------
function change_item(){ 
    var item = document.querySelector('.item');
    var item_use_h2 = changehArea();  //list value
    item.innerHTML = '';
    // create li
    for(var i=0; i<data_place.length; i++ ){
        if(data_place[i]==item_use_h2){
            var item_li = document.createElement('li');
            item_li.setAttribute('class','item-list');
            item_li.setAttribute('data-num',i);
            // item_li.textContent = data[i].Name;
            item.appendChild(item_li);
        }    
    }
    // add li content
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
    var n =6;
    var pagenum = document.querySelector('.page-num');
    if (il_len/n < 1){
        pagenum.innerHTML="<a href="+'#'+" data-num="+"1"+">1</a>";
    }else if(il_len/n > 1){
        pagenum.innerHTML="<a href="+'#'+" data-num="+"1"+">1</a>"+"<a href="+'#'+" data-num="+"2"+">2</a>";
        for(var j=6;j<il_len;j++){
            el[j].style.display = 'none';
        }
    }else if(il_len/n > 2) {
        pagenum.innerHTML="<a href="+'#'+">1</a>"+"<a href="+'#'+">2</a>"+"<a href="+'#'+">3</a>";
    }
    // page number add event 
    page_num_event()
}
function add_icon(){
    //add div content  
    var el_div =  document.querySelectorAll('.white-place');
    var div_len = el_div.length;
    var el = document.querySelectorAll('.item-list'); 
    for(var i=0;i<div_len;i++){
        var datanum = el[i].dataset.num;
        var div_opentime = document.createElement('p');
        div_opentime.setAttribute('class','opentime far fa-clock');
        div_opentime.textContent = data[datanum].Opentime;
        el_div[i].appendChild(div_opentime);
        // Address
        var div_add = document.createElement('p');
        div_add.setAttribute('class','add fas fa-map-marker-alt');
        div_add.textContent = data[datanum].Add;
        el_div[i].appendChild(div_add);
        // phone
        var div_phone = document.createElement('p');
        div_phone.setAttribute('class','phone fas fa-mobile-alt');
        div_phone.textContent = data[datanum].Tel;
        el_div[i].appendChild(div_phone);
        // ticketinfo
        var div_ticketinfo = document.createElement('p');
        div_ticketinfo.setAttribute('class',' ticket fas fa-tag');
        div_ticketinfo.textContent = data[datanum].Ticketinfo;
        el_div[i].appendChild(div_ticketinfo);
    }
}

function page_num_event(){
    // page num event
    var el = document.querySelectorAll('.item-list'); 
    var il_len = el.length;
    var pagenum_a = document.querySelectorAll('.page-num a');
    for(var i=0; i<pagenum_a.length;i++){
        pagenum_a[i].addEventListener('click',function(e){
            e.preventDefault();
            if (this.dataset.num == 2){
                for(var j=0;j<il_len;j++){
                    if(j<6){
                        el[j].style.display = 'none';
                    }
                    else{
                        el[j].style.display = 'inline-block';
                    }
                }
            }else{
                for(var j=0;j<il_len;j++){
                    if(j>5){
                        el[j].style.display = 'none';
                    }
                    else{
                        el[j].style.display = 'inline-block';
                    }
                }
            }

            
        })
    }
}