/*京东页面js部分*/
window.onload=function () {
	// body...
  //firefox
  var visib_h=document.documentElement.clientHeight;
  var ofix_rig=document.getElementsByClassName("fix_rig")[0];
  ofix_rig.style.height = visib_h;

  if (navigator.userAgent.indexOf('Firefox') >= 0) {  
          $id("btn").style.marginRight='255px';
      }
	function $id(id) {
		return document.getElementById(id);
	};
	 function oMouse(obj1,obj2) {
        	// body...
        	////console.log(obj2)
        	obj1.onmouseover=obj2.onmouseover=function () {
        		obj1.style.background="#fff";
        		obj2.style.display = 'block';
        	}
        	obj1.onmouseout=obj2.onmouseout=function () {
        		obj1.style.background = '#e3e4e5';	
        		obj2.style.display='none'
        	}
        }


	//city begin ...
	oMouse($id('mycity'),$id('city'));

	var oLi=$id('city').getElementsByTagName('ul')[0].getElementsByTagName('li');
	//alert(oLi.length)
	 for(var i = 0; i < oLi.length; i++) {
            oLi[i].index = i;
            oLi[i].onclick=function(){
                for(var i = 0; i < oLi.length; i++) {
                    oLi[i].getElementsByTagName('a')[0].style.background = "#fff";
                    oLi[i].getElementsByTagName('a')[0].style.color='#999';
                }
               oLi[this.index].getElementsByTagName('a')[0].style.background='#B1191A';
               oLi[this.index].getElementsByTagName('a')[0].style.color = '#fff';
               oLi[this.index].getElementsByTagName('a')[0].style.borderRadius = '2px';
              
                ////console.log(oLi[this.index].getElementsByTagName('a')[0].innerText)  
               $id('mydf').innerText= oLi[this.index].getElementsByTagName('a')[0].innerText;  
            }        
        }
        //city end!

        //顶部右侧 begin...
        var oMyjd=document.getElementsByClassName('myjd')[0];
        var aMylist=$id('myjdlist');
      // //console.log(aMylist);
      // alert(aMylist);

        oMouse(oMyjd,aMylist);

        //
        //
        //左侧菜单部分begin
        function oMouse_menu(obj1,obj2) {
        	// body...
        	////console.log(obj2)
        	obj1.onmouseover=obj2.onmouseover=function () {
        		obj1.style.background='#CFC7C7';
        		obj1.style.opacity = '0.7';
        		obj2.style.display = 'block';
        		$id('center_nr').style.display = 'block';
        	}
        	obj1.onmouseout=obj2.onmouseout =function () {
        		obj1.style.background = '#6e6568';
        		obj1.style.opacity = '1';
        		obj2.style.display='none';
        		$id('center_nr').style.display='none';
        	}
        }
        var oMenu_li=$id('menu').getElementsByTagName('ul')[0].getElementsByTagName('li');
       // //console.log($id('electronics'));
        for (var i = 0; i < oMenu_li.length; i++) {
        	oMenu_li[i].index=i;
        	oMenu_li[i].onmouseover=function () {
        		//alert(this.index)
        		// body...
        		// alert(oMenu_li.length);
        		/*var now=this.index;
        		if (now != this.index) {
        			now =this.index;
        			
        		}	*/
        		////console.log(this.index);
        		switch (oMenu_li[this.index].valueOf().value) {
        			case 0:
        				oMouse_menu(this,$id('electronics'));
        				break;
        			case 1:
        				oMouse_menu(oMenu_li[this.index],$id('phone'));
        				break;
        		/*	case 2:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 3:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 4:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 5:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 6:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 7:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 8:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 9:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 10:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 11:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 12:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 13:
        				oMouse_menu(oMenu_li[this.index],$id(''));
        				break;
        			case 14:
        				oMouse_menu(oMenu_li[this.index],$id('electronics'));
        				break;*/
        			default:
        				// statements_def
        				
        		}
        	}     	
        }
        //左侧菜单部分 end!

        //image部分begin
        var arrUrl=['image/01.jpg','image/02.jpg','image/03.jpg','image/04.jpg','image/05.jpg','image/06.jpg','image/07.jpg','image/08.jpg'];
        var num=0;
        var timer=null,t=null;
        var oli_img=$id('pic').getElementsByTagName('ul')[0].getElementsByTagName('li');
        function Next_img(){
        	// body...
        	    num++;
        	if(num==arrUrl.length){
        	  oli_img[num-1].className='';
        	  num=0;
        	    oli_img[num].className='active';
        	}

        	else{
        	 oli_img[num].className='active';
        	 oli_img[num-1].className='';
        	}
        	$id('main_img').src=arrUrl[num];
        }
        function Prev_img(){
        	// body...
        	    num--;
        	if(num==-1){
        	   oli_img[num+1].className='';
        	  num=arrUrl.length-1;
        	    oli_img[num].className='active';
        	}

        	else{
        	 oli_img[num].className='active';
        	 oli_img[num+1].className='';
        	}
        	$id('main_img').src=arrUrl[num];
        }
        $id('prev').onclick=function () {
        	// body...
        	clearTimeout(timer);
        	Prev_img();
        	clearTimeout(t);
        	t=setTimeout(function () {
        		// body...

			 	timer=setInterval(function () {
					// body...
					Next_img();
				}, 1000);
        	}, 2000);
        }
        $id('next').onclick=function () {
        	// body...
        	clearInterval(timer);
        	Next_img();
        	clearTimeout(t);
        	t=setTimeout(function () {
        		// body...

			 	timer=setInterval(function () {
					// body...
					Next_img();
				}, 1000);
        	}, 2000);
       	
        }
        //
        //
        //小圆点
        for(var i = 0; i < oli_img.length; i++) {
           oli_img[i].index = i;
           oli_img[i].onclick=function(){
           	clearInterval(timer);
             $id('main_img').src=arrUrl[this.index]
                for(var i = 0; i < oli_img.length; i++) {
                   oli_img[i].className = "";
                }
                 //alert("123");
                oli_img[this.index].className = "active";
               	num=this.index;
               	//
           	 	clearTimeout(t);
        	t=setTimeout(function () {
        		// body...

			 	timer=setInterval(function () {
					// body...
					Next_img();
				}, 1000);
        	}, 2000);
            }        
        }
        //自动
       	/*timer=setTimeout(function () {
       		// body...
       		Next_img();
       	}, 100);*/
       	timer=setInterval(function () {
       		// body...
       		Next_img();
       	}, 1000);
       	//鼠标移上
       	$id('pic').onmouseover=function () {
       		// body...
       		clearInterval(timer);
        	clearTimeout(t);
       	}
       	$id('pic').onmouseout=function () {
       		// body...
       		clearInterval(timer);
        	clearTimeout(t);
       		timer=setInterval(function () {
       		// body...
       		Next_img();
       	}, 1000);
       	}
       	//
       	//
       	$id('main_lef').onmouseover=$id('prev').onmouseover=function () {
       		// body...
       		$id('prev').style.display = 'block';
       	}
       	$id('main_lef').onmouseout=function () {
       		// body...
       		$id('prev').style.display = 'none';
       	}
       	//
       	$id('main_rig').onmouseover=$id('next').onmouseover=function () {
       		// body...
       		$id('next').style.display = 'block';
       	}
       	$id('main_rig').onmouseout=function () {
       		// body...
       		$id('next').style.display = 'none';
       	}
       	//
        //


        //右侧促销公告begin
         function obj_oMouse(objitem,obj) {
            var obj_item=[];
           for(var item in objitem){
              obj_item.push($id(objitem[item]));
           }
         // console.log(obj_item);
          // alert(obj_item.length)
            for(var key in obj_item)
            {
              obj_item[key].index=key;
           // console.log(key);
          // 
               if(key%2==0)
               {
                     // console.log(obj_item[key-0+1]);
                    obj_item[key].onmouseover=function () {
                              // body...
                           //alert(123);
                          for(var key2 in obj_item)
                          {
                             if(key2%2==0){
                                obj_item[key2-0+1].style.display = 'none';
                             }
                          }
                     // console.log(this.index-0+1);
                       obj_item[this.index-0+1].style.display = 'block';
                       if(obj)
                       {
                       //  console.log(this.index);
                        var itar=(obj_item[this.index].offsetWidth+4)*(this.index>0?(this.index/2):0);
                       
                              obj.style.left=itar+'px';
                       }
                     }
                    /* obj_item[key].addEventListener('mouseover',function () {
                              // body...
                           //alert(123);
                          for(var key2 in obj_item)
                        
                             if(key2%2==0){
                                obj_item[key2-0+1].style.display = 'none';
                             }
                          }
                     // console.log(tobj_item[this.index-0+1]);
                      alert((this.index-0+1));
                       obj_item[this.index-0+1].style.display = 'block';
                       if(obj)
                       {
                       //  console.log(this.index);
                        var itar=(obj_item[this.index].offsetWidth+4)*(this.index>0?(this.index/2):0);
                       
                              obj.style.left=itar+'px';
                       }
                     },false);*/
                 }
                  
            }
         }
       
        var oit=['nav_hot','hot_mas','nav_gg','gg_mas'];

         obj_oMouse(oit,$id("nav_tab"));

     
        var oit1=['jd_nav_ph','jd_phone_sever',
                  'jd_nav_jp','jd_airplane_sever',
                  'jd_nav_jd','jd_tavern_sever',
                   'jd_nav_yx','jd_game_sever'];
       obj_oMouse(oit1,$id("sever_tab"));

            
      (function () {
        // body...
          //   (1)
     
       var oit_1=['phone_hf','phone_sever1','phone_ll','phone_sever2','phone_tc','phone_sever3'];
       obj_oMouse2(oit_1);
   
        //   (2)
        var oit_2=['airplane_gn','airplane_sever1','airplane_gj','airplane_sever2','airplane_th','airplane_img'];
         // console.log(oit2);
         obj_oMouse2(oit_2);

        //   (3)酒店



       //   (4)游戏

      })()
           


        // 小内容封装，obj为副标题
        function obj_oMouse2(objitem) {
           var obj_item=[];
          for(var item in objitem){
             obj_item.push($id(objitem[item]));
          }
          var ihover=0;
          obj_item[ihover].className='hover_nav';
          obj_item[ihover].getElementsByTagName('a')[0].style.color = '#fff';
          obj_item[ihover].getElementsByClassName("sj")[0].style.display = 'block';
         //console.log(obj_item);
         // alert(obj_item.length)
           for(var key in obj_item)
           {
          
          // console.log(key);
         // 
         obj_item[key].index=key;
              if(key%2==0)
              {
                   
                    // console.log(obj_item[key-0+1]);
                   obj_item[key].onmouseover=function () {
                             // body...
                          //alert(123);

                         for(var key2 in obj_item)
                         {
                            if(key2%2==0){    
                               obj_item[key2-0+1].style.display = 'none';
                                console.log(key2);
                               obj_item[key2].className='';
                               obj_item[key2].getElementsByTagName('a')[0].style.color = '';
                               obj_item[key2].getElementsByClassName("sj")[0].style.display = 'none';
                            }
                         }
                    // console.log(this.index-0+1);
                      obj_item[this.index-0+1].style.display = 'block';
                      ihover=this.index;
                      obj_item[ihover].className='hover_nav';
                      obj_item[ihover].getElementsByTagName('a')[0].style.color = '#fff';
                      obj_item[ihover].getElementsByClassName("sj")[0].style.display = 'block';
                    }
                 
           }
        }
}

         //右侧促销公告end
       	//秒杀部分的定时器begin
       	//
 
        (function () {
          // body...
              var hh,tt,ss;
              var data_time=60000;
              setInterval(function () {
                // body...
                  //  var EndTime=new Date('2017/05/11 10:08:00');
                  //  var NowTime=new Date();
                    
                     // var data_time =EndTime.getTime() - NowTime.getTime();
                    data_time-=1000;
                    // alert(data_time);
                      ////console.log('hh='+data_time/1000/60/60);
                      if (data_time>0) {
                        hh=Math.floor(data_time/1000/60/60);
                        tt=Math.floor(data_time/1000/60%60);
                        ss=Math.floor(data_time/1000%60)
                        ////console.log(data_time/1000/60/60%24)
                      }
                      $id('time_h').innerText=dblDate(hh);
                      $id('time_t').innerText=dblDate(tt);
                      $id('time_s').innerText=dblDate(ss);
                      if (data_time==0) {
                         change_div();
                        data_time=7200000;
                      }
              },1000);
              function dblDate(n) {
                // body...
                if(n<10){
                  return '0'+n;
                }
                else {
                  return n;
                }
              }
        })();

        var Oseckill_lef=document.getElementsByClassName('seckill_lef')[0];
        var n=0;
         var temp_div=document.getElementsByClassName('seckill_lef')[0].innerHTML;
        //更换div部分
         function change_div() { 
           var old_div=document.getElementsByClassName('seckill_lef')[0].innerHTML.replace(/\"/g,"\'");
           //console.log(old_div);
           var new_div="<div><ul><li><div class='li_img'><a href='javascript:;'><img src='image/590a98f9N8039f132.jpg'alt='华硕（ASUS)13.3英寸RX310UQ金属超极本 学生 商务手提轻薄便携超薄笔记本电脑 玫瑰金 13.3英寸I3-6100U/4G/128G固态'></a><div><span class='img_foot'></span><p class='img_desc'>华硕（ASUS)13.3英寸RX310UQ金属超极本 学生 商务手提轻薄便携超薄笔记本电脑 玫瑰金 13.3英寸I3-6100U/4G/128G固态</p><p><span class='img_pace'>￥4199.00</span>&nbsp;<span class='img_yj'>￥<del>4399.00</del></span></p></div></div></li><li><div class='li_img'><a href='javascript:;'><img src='image/58cf3393N5dbeb605.jpg' alt='武极 七代i5 7500/华硕GTX1050Ti-4G/游戏台式电脑主机/DIY组装机'></a><div><span class='img_foot'></span><p class='img_desc'>武极 七代i5 7500/华硕GTX1050Ti-4G/游戏台式电脑主机/DIY组装机</p><p><span class='img_pace'>￥3488.90</span>&nbsp;<span class='img_yj'>￥<del>3699.00</del></span></p></div></div></li><li><div class='li_img'><a href='javascript:;'><img src='image/57e6430eN8097b268.jpg' alt='美菱(MeiLing)BCD-218WE3CX 218升 风冷无霜 电脑控温 节能静音 宽幅变温 时尚三门冰箱(金)'></a><div><span class='img_foot'></span><p class='img_desc'>美菱(MeiLing)BCD-218WE3CX 218升 风冷无霜 电脑控温 节能静音 宽幅变温 时尚三门冰箱(金)</p><p><span class='img_pace'>￥1798.00</span>&nbsp;<span class='img_yj'>￥<del>2199.00</del></span></p></div></div></li><li><div class='li_img'><a href='javascript:;'><img src='image/58ff14fdN6ee5e332.jpg' alt='小寻 小米 儿童电话手表 儿童手表 生态链产品 防丢防水GPS定位 学生定位手机 儿童手机 天蓝色'></a><div><span class='img_foot'></span><p class='img_desc'>小寻 小米 儿童电话手表 儿童手表 生态链产品 防丢防水GPS定位 学生定位手机 儿童手机 天蓝色</p><p><span class='img_pace'>￥198.00</span>&nbsp;<span class='img_yj'>￥<del>199.00</del></span></p></div></div></li><li><div class='li_img'><a href='javascript:;'><img src='image/58f89ebcNc02f6105.jpg' alt='德尔玛（Deerma）DEM-F600 5L办公室迷你空气加湿器升级版液晶屏 家用静音(陶瓷白)'></a><div><span class='img_foot'></span><p class='img_desc'>德尔玛（Deerma）DEM-F600 5L办公室迷你空气加湿器升级版液晶屏 家用静音(陶瓷白)</p><p><span class='img_pace'>￥99.90</span>&nbsp;<span class='img_yj'>￥<del>199.90</del></span></p></div></div></li></ul></div>";
           //alert(temp_div==new_div)
          // console.log(n%2==0);
           switch(n%2){

            case 0: document.getElementsByClassName('seckill_lef')[0].innerHTML=new_div;
                    break;
            case 1: document.getElementsByClassName('seckill_lef')[0].innerHTML=temp_div;
                    break;
           }
         }
         var Oseckill=document.getElementsByClassName('seckill')[0];
       //  console.log(ali_img5);
              //切换
              Oseckill.onmouseover= $id("prev2").onmouseover=$id("next2").onmouseover=function () {
                // body...
                $id("prev2").style.display='block';
                $id("next2").style.display='block';
               $id("prev2").onclick=function () {
                  // body...
                  change_div();
                  n++;
                }
                $id("next2").onclick=function () {
                   // body...
                   change_div();
                   n++;
                 }
              }
              Oseckill.onmouseout=function () {
                // body...
               $id("prev2").style.display='none';
               $id("next2").style.display='none';
              }
//尾部    
//侧边导航
        function $id(id) {
          return document.getElementById(id);
        };

        hove_onMouse($id("items1"),$id("items1_v"));
        hove_onMouse($id("items2"),$id("items2_g"));
        hove_onMouse($id("items3"),$id("items3_w"));
        hove_onMouse($id("items4"),$id("items4_z"));
        hove_onMouse($id("items5"),$id("items5_x"));
        hove_onMouse($id("items6"),$id("items6_j"));
        hove_onMouse($id("items7"),$id("items7_d"));
        hove_onMouse($id("items8"),$id("items8_f"));



        function hove_onMouse(obj1,obj2) {
          // body...
          var time_hove1=null;
          var time_hove2=null;
          var t_out=null;

          obj1.onmouseover=function () {
            over_mover();
          }
            
          obj1.onmouseout=function () {
              t_out=1;
              out_move();
          }
          function over_mover() {
            // body...
              if (obj2.offsetLeft>=35) {
                var oms_t=obj1.onmouseover;
                clearInterval(time_hove1);
                time_hove1=setInterval(function () {
                  // body...

                  obj1.style.background = '#B1191A';
                  obj2.style.background = '#B1191A';
                  if(obj2.offsetLeft>=-60){

                    obj2.style.left = obj2.offsetLeft-2+'px';
                    oms_t=this.onmouseover;
                  } 
                  if (obj2.offsetLeft<=-60) {
                    //alert(123);
                    clearInterval(time_hove1);
                      if (t_out) {
                      out_move();
                   }
                  }
                }, 3);
            }
          }
         
          function out_move() {
            // body...
            if(obj2.offsetLeft<=-60){
              clearInterval(time_hove2);
              time_hove2=setInterval(function () {
                // body...
                if(obj2.offsetLeft<=35){

                  obj2.style.left = obj2.offsetLeft+2+'px';
                } 
                if (obj2.offsetLeft>=35) {
                  //alert(123);
                  clearInterval(time_hove2);
                  obj1.style.background = '#7a6e6e';
                  obj2.style.background = '#7a6e6e';
                  t_out=0
                  
                }
              }, 3);
            }
          }

        }

}