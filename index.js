const search_input = document.getElementById("search_input");
const search_button = document.getElementById("search_button");
const checkbox_for_special = document.getElementById("checkbox_for_special_card");

window.addEventListener('load',on_changed())

search_button.addEventListener('click',()=>{on_changed()})

checkbox_for_special.addEventListener('change',()=>{on_changed()})

function on_changed(){
    console.log("test")
    if(document.getElementById("result_table"))document.getElementById("result_table").remove();
    const table = document.createElement("table");
    table.id = "result_table";
    const headtr = document.createElement("tr");
    const headth1 = document.createElement("th");
    const headth2 = document.createElement("th");
    const headth3 = document.createElement("th");
    headth1.textContent = "カード名";
    headth1.classList.add("card_name");
    headth2.textContent = "カード種別";
    headth2.classList.add("card_type");
    headth3.textContent = "ページリンク"
    headth3.classList.add("card_link");
    headtr.appendChild(headth1);
    headtr.appendChild(headth2);
    headtr.appendChild(headth3);
    table.appendChild(headtr);
    document.getElementById("body").appendChild(table);
    for(const d of data.include){
        if(d.name.replace(/[\！-\～]/g,s=>{return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)}).indexOf(search_input.value.replace(/[\！-\～]/g,s=>{return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)}))>=0){
            let not_exclude = true;
            for(const e of data.exclude){
                if(e.name.replace(/[\！-\～]/g,s=>{return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)}).indexOf(d.name.replace(/[\！-\～]/g,s=>{return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)}))>=0){
                    not_exclude = false;
                }
            }
            if(not_exclude){
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const a = document.createElement("a");
                td1.textContent = d.name;
                td1.classList.add("card_name");
                td2.textContent = d.type;
                td2.classList.add("card_type");
                a.textContent = "リンク";
                a.href = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword="+ d.name +"&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=&releaseDStart=1&releaseMStart=1&releaseYStart=1999&releaseDEnd=&releaseMEnd=&releaseYEnd="
                td3.classList.add("card_link");
                td3.appendChild(a);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
            }
            if(!not_exclude && checkbox_for_special.checked){
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const a = document.createElement("a");
                tr.classList.add("special_card")
                td1.textContent = d.name;
                td1.classList.add("card_name");
                td2.textContent = d.type;
                td2.classList.add("card_type");
                a.textContent = "リンク";
                a.href = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword="+ d.name +"&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=&releaseDStart=1&releaseMStart=1&releaseYStart=1999&releaseDEnd=&releaseMEnd=&releaseYEnd="
                td3.classList.add("card_link");
                td3.appendChild(a);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
            }
        }
    }
}