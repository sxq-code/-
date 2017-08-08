/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(event){
        $(this).css('color','#fff');
    }).mouseout(function(){
        $(this).css('color','#a4b094');
    })
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');
       }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
       }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({
            'color':'#fff',
            'background':'orange'
        })
    }).mouseout(function(){
        $(this).css({
            'color':'#757575',
            'background':'#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({
               'background':'#fff',
               'color':'#000',
               'border':'1px solid #ccc',
               'border-left':'none'
           })
       }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function(){
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })


// 明星单品 轮播效果
var clockLR;
	$('.p').mouseover(function(){
		clearInterval(clockLR);
	}).mouseout(function(){
		clockLR=setInterval(autoLR,5000);
	});
	//向左翻页
		$('.prev').mouseover(function(){
			if($('.scroll').css('left')!='0px'){
				$(this).css({color:'#ff6700',cursor:'pointer'});
			}
		}).click(function(){
			
			if($('.scroll').css('left')!='0px'){
				$('.scroll').css('left','0px');
				$(this).css({color:'#dfdfe0',cursor:'default'});
				$('.next').css('color','#b0b4bc');
				
			}
		}).mouseout(function(){
			if($('.scroll').css('left')!='0px'){
				$(this).css('color','#b0b4bc');
			}else{
				$(this).css('color','#dfdfe0');
			}
		});
	
	//向右翻页
		$('.next').mouseover(function(){
			if($('.scroll').css('left')=='0px'){
				$(this).css({color:'#ff6700',cursor:'pointer'});
			}
		}).click(function(){
			if($('.scroll').css('left')=='0px'){
				$('.scroll').css('left','-100%');
				$(this).css({color:'#dfdfe0',cursor:'default'});
				$('.prev').css('color','#b0b4bc');
			// console.log($('.scroll').css('left'));
			}
		}).mouseout(function(){
			if($('.scroll').css('left')=='0px'){
				$(this).css('color','#b0b4bc');
			}else{
				$(this).css('color','#dfdfe0');
			}
		});

	//自动轮播
	clockLR=setInterval(autoLR,5000);

	function autoLR(){
		if($('.scroll').css('left')!='0px'){
			$('.scroll').css('left','0px');
		}else if($('.scroll').css('left')=='0px'){
			$('.scroll').css('left','-100%');
		}
	}
    // 搭配  
    // 图片切换效果
    $('.mat-top2>li').mouseover(function(){
        $(this).css('border-bottom','2px solid orange')
        var b = $(this).index();
        $('.match1>ul').eq(b).removeClass('hide').siblings().addClass('hide');
    }).mouseout(function(){
         $(this).css('border-bottom','none')
    });
// 配件
    $('.matPlay>li').mouseover(function(){
        $(this).css('border-bottom','2px solid orange')
        var s = $(this).index();
        $('.mat-p>ul').eq(s).removeClass('hide').siblings().addClass('hide');
    }).mouseout(function(){
         $(this).css('border-bottom','none')
    });

// 周边
    $('.matPlay1>li').mouseover(function(){
        $(this).css('border-bottom','2px solid orange')
        var x = $(this).index();
        $('.mat-p1>ul').eq(x).removeClass('hide').siblings().addClass('hide');
    }).mouseout(function(){
         $(this).css('border-bottom','none')
    });

    // 显示黄色小块内容
    $('.mat-content>li').mouseover(function(){
        $(this).find('.slideDiv') .stop(true,false).slideDown('fast');
    }).mouseout(function(){
        $(this).find('.slideDiv').stop(true,false).slideUp('hide');
    });

    //推荐
    var nu= 0;
    $('.pre').click(function(){
        nu++;
        if(nu<4){
            $('.for-play').css('left', - (nu * 1226) +'px');
             console.log(nu)
            $('.round2 p').eq(nu)   
        }
        else{
            nu = 3;
        } 
    })
    $('.nex').click(function(){
        nu--
        if(nu>=0){
            $('.for-play').css('left', - (nu * 1226) +'px');
             console.log(nu)
        }
        else{
            nu++;
        }
    })
	
// 内容
 var xq= 0;      
 $('.subLg li:nth-of-type(1) .l2').click(function(){
        xq++;
        if(xq<4){
            $('.subLg li:nth-of-type(1) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(1) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            })
        }
        else{
            xq = 3;
        } 
    })
    $('.subLg li:nth-of-type(1) .r2').click(function(){
        xq--
        if(xq>=0){
            $('.subLg li:nth-of-type(1) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(1) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            });
             console.log(xq)
        }
        else{
            xq++;
        }
    });
    $('.subLg li:nth-of-type(1) .round2 p').click(function(){
        var hhu = $(this).index();
         console.log(hhu);
        $(this).css({
            'border':'2px solid orange',
            'background':'white'
        }).siblings().css({
                'border':'none',
                'background':'gray'
        })
        $('.subLg li:nth-of-type(1) .contBox').css('left', - (hhu * 296) +'px');
    })
// 第二块
 $('.subLg li:nth-of-type(2) .l2').click(function(){
        xq++;
        if(xq<4){
            $('.subLg li:nth-of-type(2) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(2) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            })
        }
        else{
            xq = 3;
        } 
    })
    $('.subLg li:nth-of-type(2) .r2').click(function(rightPlay){
        xq--
        if(xq>=0){
            $('.subLg li:nth-of-type(2) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(2) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            });
             console.log(xq)
        }
        else{
            xq++;
        }
    });
    $('.subLg li:nth-of-type(2) .round2 p').click(function(bottomPlay){
        var hhu = $(this).index();
         console.log(hhu);
        $(this).css({
            'border':'2px solid orange',
            'background':'white'
        }).siblings().css({
                'border':'none',
                'background':'gray'
        })
        $('.subLg li:nth-of-type(2) .contBox').css('left', - (hhu * 296) +'px');
    })
    // 第三块
    $('.subLg li:nth-of-type(3) .l2').click(function(){
        xq++;
        if(xq<4){
            $('.subLg li:nth-of-type(3) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(3) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            })
        }
        else{
            xq = 3;
        } 
    })
    $('.subLg li:nth-of-type(3) .r2').click(function(){
        xq--
        if(xq>=0){
            $('.subLg li:nth-of-type(3) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(3) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            });
             console.log(xq)
        }
        else{
            xq++;
        }
    });
    $('.subLg li:nth-of-type(3) .round2 p').click(function(){
        var hhu = $(this).index();
         console.log(hhu);
        $(this).css({
            'border':'2px solid orange',
            'background':'white'
        }).siblings().css({
                'border':'none',
                'background':'gray'
        })
        $('.subLg li:nth-of-type(3) .contBox').css('left', - (hhu * 296) +'px');
    })
// 第四块

        
    $('.subLg li:nth-of-type(4) .l2').click(function(){
          xq++
        if(xq>=0){
            $('.subLg li:nth-of-type(4) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(4) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            });
             console.log(xq);
        }
        else{
            xq++;
        }
    })
    $('.subLg li:nth-of-type(4) .r2').click(function(){
        xq--
        if(xq>=0){
            $('.subLg li:nth-of-type(4) .contBox').css('left', - (xq * 296) +'px');
             console.log(xq)
            $('.subLg li:nth-of-type(4) .round2 p').eq(xq).css({
                'border':'2px solid orange',
                'background':'white'
            }).siblings().css({
                'border':'none',
                'background':'gray'
            });
             console.log(xq);
        }
        else{
            xq++;
        }
    });
    $('.subLg li:nth-of-type(4) .round2 p').click(function(){
        var hhu = $(this).index();
         console.log(hhu);
        $(this).css({
            'border':'2px solid orange',
            'background':'white'
        }).siblings().css({
                'border':'none',
                'background':'gray'
        })
        $('.subLg li:nth-of-type(4) .contBox').css('left', - (hhu * 296) +'px');
    })


})


