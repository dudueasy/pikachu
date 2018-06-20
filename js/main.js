!function(){
    var duration = 20
    function writeCode(prefix, code, fn){
        let container = document.querySelector("#code")
        let styleTag = document.querySelector('#styleTag')

        let n = 0
        setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight

            if( n < code.length ){
                setTimeout(run, duration)
            }
            else{
                fn && fn.call()
            }
        },duration)
    }
    
let code = `
/*
 * 我们来画一个皮卡丘吧
 */
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    background: #ffe600;
}

.wrapper{
    height:165px;
    width:100%;
    margin: 0 auto;
    position: relative;
}

/*
 * 现在画一个鼻子
 */
.nose{
    position: absolute;
    left: 50%;
    margin-left: -11px;
    top: 28px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 12px;     
}

/*
 * 现在画两只眼睛
 */
.eye.left{
    margin-right: 90px;
    right:50%;
}
.eye.right{
    margin-left:90px;
    left: 50%;
}

.eye{
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    width: 49px;
    height: 49px;
    border: 2px solid black;
}

.eye::before{
    content:'';
    position: absolute;
    background: #fff;
    width:24px;
    height:24px;
    border-radius: 50%;
    top: -1px;
    left: 6px;
    border: 2px solid black;
}

/*
 * 现在要画皮卡丘的脸
 */
.face{
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 2px solid black;
    background: #ff0102;
    position: absolute;      
    top: 85px;
}

/*
 * 左脸移到左边(废话)
 */
.face.left{
    right: 50%;
    margin-right: 116px;;
}

/*
 * 右脸移到右边
 */
.face.right{
    left: 50%;
    margin-left: 116px;;
}

/*
 * 现在开始画皮卡丘的嘴巴, 先画上嘴唇
 */

.upperLip{
    position: absolute;
}

.upperLip.left{
    right: 50%;
    top: 52px;
}

.upperLip.right{
    left: 50%;
    top: 52px;
}

.upperLip{
    height: 20px;
    width: 80px;
    border: 2px solid ;
    background: #ffe600;

}

.upperLip.left{
    transform: rotate(-18deg);
    border-bottom-left-radius: 42px 20px;
    border-top: none;
    border-right: none;
    }

.upperLip.right{ 
    transform: rotate(18deg);
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
}

/*
 * 现在开始画皮卡丘的嘴巴 
 */
.lowerLip-wrapper{
    overflow:hidden;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom:-10%;
    height:123px;
    width: 300px;
}

.lowerLip{
    position: absolute;
    bottom: 0;  
    left: 50%;      
    transform: translateX(-50%);
    background: #9b010b;
    border-radius: 200px/2000px;
    width: 300px;
    height: 3500px;
    overflow: hidden;
}

/*
 * 小舌头
 */
.lowerLip::after{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 0%;
    content:'';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ff485e;
}

.lowerLip{
    border: 2px solid black;
}
/*
 * 好了, 这只皮卡丘送给你咯
 */

`

    // start writing code into dom
    writeCode('',code)
    
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        switch (speed){
            case 'slow':
                duration = 50;
                break
            case 'medium':
                duration = 20;
                break
            case 'fast':
                duration = 10;
                break
        }

        $button.addClass('active')
            .siblings('.active').removeClass('active')

    })
}.call()
