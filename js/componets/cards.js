function cardData (id,title,describe,siteurl,islight,bimage){
    this.id = id
    this.title = title
    this.describe = describe
    this.siteurl = siteurl
    this.islight = islight
    this.bimage = bimage
};
var CardData = [
    [
        new cardData(
            "collei-birthday-2023",
            "柯莱“留影”纪 · 2023.5.8",
            '为柯莱庆生制作。',
            [
                [new URL('https://www.bilibili.com/video/BV1qa4y1g7YK'),'B站视频']
            ],
            false,
            ""
        ),
    ],
    [
        new cardData(
            "wilderness",
            "在野外露营",
            'BeeUser12 与 TLL16，Ender_Fish 一起在野外露营，途中发生了什么许多有趣的事情呢？',
            [
                [new URL('https://www.bilibili.com/video/BV1VW4y1o73m'),'B站视频']
            ],
            true,
            ""
        ),
        new cardData(
            "pr129-kc-3",
            "PR129 王国危机",
            'PR129 惨遭黑化，危机悄然来临，在城堡里的所有伙伴将抵抗此次王国危机。',
            [
                [new URL('https://www.bilibili.com/video/BV1ab411C7Ck'),'上集'],
                [new URL('https://www.bilibili.com/video/BV1Cb411r73z'),'中集'],
                [new URL('https://www.bilibili.com/video/BV1yD4y1y7wJ'),'下集，但是搞笑版'],
            ],
            false,
            ""
        ),
        new cardData(
            "rem",
            "Rosalina's 极限任务",
            'Rosalina 惨遭被神秘人抓走，为了拯救她，途中被设下许多任务，大家齐心协力，共同解决一个个任务，最终拯救 Rosalina 并获知真相的故事。',
            [
                [new URL('https://www.bilibili.com/video/BV1x4411f7No'),'第2集'],
                [new URL('https://www.bilibili.com/video/BV1p4411k7xi'),'第3集 第1幕'],
                [new URL('https://www.bilibili.com/video/BV1pE411D7AQ'),'第3集 第2幕'],
            ],
            false,
            ""
        ),
        new cardData(
            "gaswc",
            "世界连结危机",
            '在 GMod 世界的某一处，某个组织正想法关闭 GMod 与其他世界的通道，来自 SM64 的各位伙伴们，将竭尽全力对抗这次连结危机。',
            [
                [new URL('https://www.bilibili.com/video/BV1RA411u73L'),'B站链接']
            ],
            false,
            ""
        )
    ]
]
function cardStruct(id,title,describe,siteurl,islight,bimage) {
    var colormode,background_url;
    if (islight) colormode = "light"
    else colormode = ""
    if (bimage != "") background_url = 'style="background:url('+ bimage+')"'
    var abuttons = atag(siteurl);
    return '<div class="mdl-card mdl-shadow--4dp" id="' + 
    id + '"><div class="mdl-card__title mdl-card--expand"'+
    background_url +'><div class="card-included-image"><p class="mdl-card__title-text" style="font-size: 1.5em;">' + 
    title+ '</p></div></div><div class="mdl-card__supporting-text"><p>' + 
    describe+ '</p></div><div class="mdl-card__actions mdl-card--border">'+
    abuttons +'</div></div>'
}

function atag(url) {
    var p = [
        '<a href="',
        '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">',
        '</a>'
    ]
    var result = '';
    for (var a = 0;a < url.length; a++) {
        result += p[0] + url[a][0] + p[1] + url[a][1] + p[2]
    }
    return result
}
var CardQuery = [document.querySelector('#cm-pc-genshin'),document.querySelector('#cm-pc-sm64b')];
for (var i = 0; i < CardQuery.length; i++) {
    for (var j = 0; j < CardData[i].length; j++) {
        CardQuery[i].innerHTML += cardStruct(
            CardData[i][j].id,
            CardData[i][j].title,
            CardData[i][j].describe,
            CardData[i][j].siteurl,
            CardData[i][j].islight,
            CardData[i][j].bimage
        )
    }
}