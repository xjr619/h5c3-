$(function () {
  var count = 0;
  $('#fullpage').fullpage({
    // 内容不要垂直居中
    verticalCentered: false,
    // 是否显示导航按钮
    navigation: true,
    // 滚动到某一屏幕之后触发,
    afterLoad: function (linkName, index) {
      // index 就是到了某一屏之后的索引
      if (index == 2) {
        // console.log("到了第二屏了");
        /* 
        1 空的搜索框从右边移动到中间
        2 "沙发"开始显示
        2.5 空的搜索框 "沙发"同时隐藏 带有沙发文字的搜索框 瞬间显示 
        3 带有沙发的搜索框 移动到右上角 大小改变
        3 多沙发的图片由小变大
        3 文字提示切换显示 
         */

        // 1 
        $(".s2_empty_search").show().animate({
          left: "50%"
        }, 1000, "easeOutBack", function () {
          // 2 
          $(".s2_sf_font").fadeIn(500, function () {
            // 2.5 
            $(".s2_empty_search,.s2_sf_font").hide();
            $(".s2_full_search").show();

            // 3  搜索框
            $(".s2_full_search").animate({
              width: 150,
              bottom: 448,
              left: 800
            }, 1000);
            // 3 多沙发图片
            $(".s2_sfs").show().animate({
              left: "50%",
              width: 441
            }, 1000);
            // 3 文字提示 
            $(".s2_title1").fadeOut(1000);
            $(".s2_title2").fadeIn(1000);

            // 显示下一页
            $(".next").fadeIn(500);
          });

        });
      }

      if (index == 7) {
        // 1 星星变宽
        $(".s7_star1").animate({
          width: 100
        }, 1000, function () {
          $(".s7_good").show();
          // 显示下一页
          $(".next").fadeIn(500);
        });
      }

      if (index == 8) {
        // 显示下一页
        $(".next").fadeIn(500);

        // 绑定按钮点击
        // 不要重复绑定事件,把逻辑重复执行 !!! 
        // $("button").on("click", function () {
        //   count++;
        //   $("title").html(count);
        // });
      }
    },
    // 屏幕1离开就触发
    onLeave: function (index, nextIndex, direction) {

      // 隐藏下一页
      $(".next").fadeOut(500);

      if (index == 2 && nextIndex == 3) {
        // 从第二屏离开就触发 
        /* 
        1 加一个白色遮罩层 
        2 沙发往下掉 
          开始的位置 
          bottom:屏幕的高度+一些px 
        3 购物车和尺寸的图片同时变白(图片切换显示)
         */

        // 1 
        $(".s2_wrap").show();
        // 2 
        // 初始化沙发的位置
        $(".s3_sf").css({
          //  因为沙发是跨屏幕显示的 所以需要先切换到上一屏幕 
          // bottom:100% 的值就是上一屏幕的值 需要在100%基础上再加上一些像素 
          // 但是css 不支持 100%+327px 
          // 所以 100% 变成了  $("body").height() 
          bottom: $("body").height() + 327,
          left: 492,
          width: 103
        }).show();
        // 2 执行动画
        $(".s3_sf").animate({
          bottom: 260,
          left: 360,
          width: 207
        }, 2000, function () {
          // 3 
          $(".s3_size1,.s3_cart1").fadeOut(500);
          $(".s3_size2,.s3_cart2").fadeIn(500);
          // 显示下一页
          $(".next").fadeIn(500);
        });

      }
      if (index == 3 && nextIndex == 4) {
        /* 
        从第三屏幕离开
        0 设置沙发的开始的位置 隐藏正常的沙发
        1 倾斜的沙发往下掉
        2 购物车和沙发一起开动 父元素div 往右边移动
        3 文字提示和电脑同时显示 
         */
        $(".s4_sf").css({
          bottom: $("body").height() + 200,
          left: -33
        }).show();
        $(".s3_sf").hide();
        // 1 沙发下掉
        $(".s4_sf").animate({
          bottom: 202,
          left: 127
        }, 2000, function () {
          // 2 购物车👉移动 😊 😭 ✈ 🚂 🚢  🚀 
          $(".s4_cart_sf").animate({
            left: $("body").width() + 50
          }, 2000, "easeInElastic", function () {
            // 3 文字提示
            $(".s4_title1").fadeOut(500);
            $(".s4_title2").fadeIn(500);

            // 电脑显示
            $(".s4_computer,.s4_addr").fadeIn(500);
            // 显示下一页
            $(".next").fadeIn(500);
          });

        });

      }
      if (index == 4 && nextIndex == 5) {
        /* 
        1 手向上移动
        2 鼠标变颜色
        2 沙发从上掉下来
        3 账单往上移动
        4 文字提示 旋转显示! 
         */
        // 1 手
        $(".s5_hand").animate({
          bottom: 0
        }, 2000, function () {
          // 2 鼠标变色 图片变换
          $(".s5_mouse1").fadeOut(500);
          $(".s5_mouse2").fadeIn(500, function () {
            // 3 沙发下掉
            $(".s5_sf").animate({
              bottom: 120
            }, 1000, function () {
              // 4 账单显示
              $(".s5_order").animate({
                bottom: 450
              }, 1000, function () {
                // 5 
                //  $(".s5_title").animate({
                //   transform:'rotateX(30deg) rotateY(360deg) scale(1.5)' 
                //  })

                $(".s5_title").css({
                  opacity: 1,
                  transform: 'rotateX(30deg) rotateY(360deg) scale(1.5)'
                });

                // 显示下一页
                $(".next").fadeIn(500);
              });

            });

          });


        });
      }
      if (index == 5 && nextIndex == 6) {
        /* 
        1 盒子从左到右  沙发从上到下 和盒子重合 
        2 重合之后,盒子往下掉 掉车子里面 沙发 隐藏
        3 车子开动 - 背景改变 
        3 地址牌显示
        3 文字提示从左到右显示 
        4 到达终点后,快递员长大-同时向左
        5 快递员向右边移动 
        6 门打开
        7 女孩显示 长大 向左边移动 
        8 "请收货显示 "
         */

        // 1 盒子
        $(".s6_box").animate({
          left: 400
        }, 1000, "easeInQuad");

        // 1 沙发
        $(".s6_sf").animate({
          width: 50,
          bottom: 515
        }, 2000, "easeInQuad", function () {
          // 2 沙发隐藏
          $(".s6_sf").hide();
          // 2 盒子下掉
          $(".s6_box").animate({
            bottom: 10
          }, 1000, function () {

            // 3 地址牌显示
            $(".s6_address").show();
            // 3 文字提示显示
            $(".s6_title").show().animate({
              left: 500
            }, 1000);

            // 3 汽车开动
            $(".s6").animate({
              backgroundPositionX: "100%"
            }, 2000, function () {
              // 4 快递员长大同时向左边移动一点点
              $(".s6_boys").animate({
                width: 252,
                bottom: 114,
                left: 400
              }, 1000, function () {
                // 5 快递向右移动
                $(".s6_boys").animate({
                  left: 700
                }, 1000, function () {
                  // 6 门打开 
                  $(".s6_door").fadeIn(500, function () {
                    // 7 女孩接快递 (变大 向左移动)
                    $(".s6_girl").show().animate({
                      width: 87,
                      right: 500
                    }, 1000, function () {
                      // 收货
                      $(".s6_receive").show();
                      // 显示下一页
                      $(".next").fadeIn(500);
                    });
                  });
                });
              })

            });
          });
        });
      }
    }
  });


  // 绑定鼠标移动事件
  $("body").on("mousemove", function (e) {
    // 判断当前屏幕是否是第8屏幕
    if (!$(".s8").hasClass("active")) {
      // 返回 
      return false;
    }

    // 鼠标的坐标 -参照值是 视口 为标准
    var clientX = e.clientX;
    var clientY = e.clientY;
    // $("title").html(clientX+"   "+clientY);

    // 给手设定坐标
    // css() 是相对于版心进行参照
    // offset() 相对于视口 
    // $(".s8_hand").css({
    //   left:clientX,
    //   top:clientY
    // });

    // 判断手是否"被剁手"
    var minTop = $("body").height() - $(".s8_hand").height();

    clientY = clientY + 20;
    if (clientY < minTop) {
      clientY = minTop;
    }

    $(".s8_hand").offset({
      left: clientX - 60,
      top: clientY
    });
  });

  // 再来一次
  $(".s8_again").click(function () {
    //回到第一屏
    $.fn.fullpage.moveTo(1);
    /* 
    
    因为 jq animate 函数都是加行内样式
    重置动画- 把屏幕里面所有的元素的行内都去掉!! 
    */
    $(".section_content *").attr("style", "");
    $(".s6 *").attr("style", "");
  })

  // 下一页
  $(".next").click(function () {

    // 往下移动一屏
    $.fn.fullpage.moveSectionDown();
  })
});