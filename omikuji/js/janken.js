// alert(1111);


// グーチョキパーを選ぶ
// PCの手をランダムに決定する
// 勝ち負けを判定して表示する


$(".start_btn").on('click' , function(){
    // 1回だけじゃんけんできる権利を付与
    let start_btn = "go";
    console.log("trigger = OK");
});


// 獲得できるカードのハコを作る
const gu_card = "gu_card";
const cho_card = "cho_card";
const par_card = "par_card";

$(".gu_btn").on('click' , function() {
    // if (start_btn === "go") {

    //     let ore = 1
    //     console.log("ore = 1");

        let pc = Math.floor(Math.random() * 4);
        if (pc == 1) {
            $(".pc_hands").text("グー");
            $(".judgment").text("あいこ");        
        }else if (pc == 2){
            $(".pc_hands").text("チョキ"); 
            $(".judgment").text("あなたの勝ち");        
        }else if (pc == 3){
            $(".pc_hands").text("パー"); 
            $(".judgment").text("あなたの負け");        
        }

    // }else{
    //     alert("ズルすんな〜");
    // }
    // let gu_trigger = "end"
});

$(".cho_btn").on('click' , function() {
    let ore = 2
    console.log("ore = 2");

    let pc = Math.floor(Math.random() * 4);
    if (pc == 1) {
        $(".pc_hands").text("グー");
        $(".judgment").text("あなたの負け");        
    }else if (pc == 2){
        $(".pc_hands").text("チョキ"); 
        $(".judgment").text("あいこ");        
    }else if (pc == 3){
        $(".pc_hands").text("パー"); 
        $(".judgment").text("あなたの勝ち");        
    }
});

$(".par_btn").on('click' , function() {
    let ore = 3
    console.log("ore = 3");

    let pc = Math.floor(Math.random() * 4);
    if (pc == 1) {
        $(".pc_hands").text("グー");
        $(".judgment").text("あなたの勝ち");        
    }else if (pc == 2){
        $(".pc_hands").text("チョキ"); 
        $(".judgment").text("あなたの負け");        
    }else if (pc == 3){
        $(".pc_hands").text("パー"); 
        $(".judgment").text("あいこ");
    }
});

$(".rest_btn").on('click' , function(){
    let gu_trigger = ""
    let cho_trigger = ""
    let par_trigger = ""
});