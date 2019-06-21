$(function () {
    let arr = [
        {name: "安安", tell: "18406585200", py: "anan"},
        {name: "安啊", tell: "18406585201", py: "ana"},
        {name: "包扎", tell: "18406585202", py: "baozha"},
        {name: "虎头", tell: "18406585203", py: "hutou"},
        {name: "刘大哥", tell: "18406585204", py: "liudage"},
        {name: "老奶奶", tell: "18406585205", py: "laonainai"},
        {name: "猪头三", tell: "18406585206", py: "zhutousan"},
        {name: "曹操", tell: "18406585207", py: "caocao"},
        {name: "星星", tell: "18406585208", py: "xingxing"},
        {name: "杨大宝", tell: "18406585209", py: "yangdabao"},
        {name: "胡大宝", tell: "18406585210", py: "hudabao"},
        {name: "牛大宝", tell: "18406585210", py: "niudabao"},
        {name: "狗大宝", tell: "18406585210", py: "goudabao"},
        {name: "福大宝", tell: "18406585210", py: "fudabao"},
        {name: "卡大宝", tell: "18406585210", py: "kadabao"}
    ];
    let input = $("input");
    input.on("input", function () {
        let val = $(this).val();
        let newarr = arr.filter(ele => ele.name.includes(val) || ele.tell.includes(val) || ele.py.includes(val))
        rendem(newarr);
    });
    rendem(arr);

    function rendem(arr) {
        $(".nameBox").empty();
        $(".bian").empty();
        let person = {};
        arr.forEach(ele => {
            let firstChar = ele.py.charAt(0).toUpperCase();
            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        });
        let keysarr = Object.keys(person).sort();
        let html = "";
        let html1 = "";
        for (let i = 0; i < keysarr.length; i++) {
            let ele = keysarr[i];
            html1 += `<li>${ele}</li>`;
            html += `
        <li ><span>${ele}</span>
            `;
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `
                <a href="tel:${info.tell}"><p>${info.name}</p></a>
                `;
                html += `</li>`
            }
        }
        $(".bian").html(html1);
        $(".nameBox").html(html);
    }

    $(".bian").on("click", "li", function () {
        let _this = $(this);
        let pig = $("namebox span");

    })

});