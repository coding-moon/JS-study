/* 
    task01.html
*/

globalThis.temp;

function confirm() {
    // const input = document.querySelector("input").value;
    const $input = $("#input").val();

    // const trs = document.querySelectorAll("tbody tr");
    const $trs = $("tbody tr");
    
    let check = false;

    // if(globalThis.temp) {
    //     globalThis.temp.style.background = "#fff";
    //     globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    // }

    if(globalThis.$temp) {
        globalThis.$temp.css('background','#fff');
        globalThis.$temp.first().text($temp.first().text().replace("★", ""));
    
    }


    $trs.each(i, tr) => {
        let $tr = $(tr);
        let $td = $tr.children().first();
        if($td.text() == $input) {
            check = true;
            globalThis.$temp = $tr;
            globalThis.$temp.css('background', '#ef5350');
            $td.text().trim() = replace("" , "★");    
            
        }
    }



    trs.forEach(tr => {
        let td = tr.firstElementChild;
        if($td == $input) {
            check = true;
            globalThis.temp = tr;
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
        }
    });

    if(!check) {
        alert("다시 시도해주세요.");
    }
}