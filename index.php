<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="theme-color" content="#2196f3">
    <title>水汇网</title>
    <link rel="stylesheet" href="css/asset.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    
  </head>
  <body class="yh">
    <div class="statusbar-overlay"></div>
    <div class="panel-overlay"></div>
    <div class="panel panel-left panel-cover">
      <div class="view navbar-fixed">
        <div class="pages">
          <div data-page="panel-left" class="page"></div>
        </div>
      </div>
    </div>
    <div class="panel panel-right panel-reveal">
      <div class="view view-right">
        <div class="pages navbar-fixed">
          <div data-page="panel-right1" class="page"></div>
        </div>
      </div>
    </div>
    <div class="views">
      <div class="view view-main">
        <div class="pages navbar-fixed">
          <div data-page="index" class="page">
            <div class="navbar">
              <div class="navbar-inner">
                <div class="center">
                  <a class="top-area item-link" href="area.php"><?php 
                    if(isset($_GET["area"])) {
                      echo $_GET["area"]; 
                      }
                    else {
                      echo '广州';
                    }  
                   ?></a>
                  
                </div>
                <div class="top-search"><a href="search.php" class="item-link">搜索</a></div>
                <div class="right">
                  <a href="login.php" class="top-person"></a>
                </div>
              </div>
            </div>
            <div class="page-content index-page-content">              
              <div data-loop="true" data-pagination=".swiper-pagination-cate" data-paginationHide="true" class="swiper-container swiper-init ks-demo-slider cate-swpier bdbottom">
                <div class="swiper-pagination swiper-pagination-cate"></div>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                  <div class="category">
                    
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/food.png" />
                    <span class="txt">美食</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/movie.png" />
                    <span class="txt">电影</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/relax.png" />
                    <span class="txt">休闲娱乐</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/beauty.png" />
                    <span class="txt">丽人</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/grouponshan.png" />
                    <span class="txt">闪惠团购</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/takeaway.png" />
                    <span class="txt">外卖</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/eleconfig/20150602180637hotel.png" />
                    <span class="txt">酒店</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/footer.png" />
                    <span class="txt">足疗按摩</span>
                                    </a>
                    
                    </div>              </div>
                    <div class="swiper-slide">
                  <div class="category">
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/food.png" />
                    <span class="txt">美食</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/movie.png" />
                    <span class="txt">电影</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/relax.png" />
                    <span class="txt">休闲娱乐</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/beauty.png" />
                    <span class="txt">丽人</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/grouponshan.png" />
                    <span class="txt">闪惠团购</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/takeaway.png" />
                    <span class="txt">外卖</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/eleconfig/20150602180637hotel.png" />
                    <span class="txt">酒店</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/footer.png" />
                    <span class="txt">足疗按摩</span>
                                    </a>
                    
                    </div>              </div>
                    <div class="swiper-slide">
                  <div class="category">
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/food.png" />
                    <span class="txt">美食</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/movie.png" />
                    <span class="txt">电影</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/relax.png" />
                    <span class="txt">休闲娱乐</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/beauty.png" />
                    <span class="txt">丽人</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/grouponshan.png" />
                    <span class="txt">闪惠团购</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/takeaway.png" />
                    <span class="txt">外卖</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/eleconfig/20150602180637hotel.png" />
                    <span class="txt">酒店</span>
                                    </a>
                                    <a href="cate-list.php" class="item">
                    <img class="icon" src="http://m1.s1.dpfile.com/sc/api_res/mindex/indexicon/client/uis/7.5.0/footer.png" />
                    <span class="txt">足疗按摩</span>
                                    </a>
                    
                    </div>              </div>


                </div>
              </div>

<div data-loop="true" data-pagination=".swiper-pagination-c2" data-paginationHide="true" class="swiper-container swiper-init ks-demo-slider swiper-c2 bdbottom">
                <div id="swiper-pagination1" class="swiper-pagination swiper-pagination-c2"></div>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="#"><img src="http://mall.bydauto.com.cn/media/wysiwyg/20150721/720x246.jpg" width="100%" alt=""></a>
                  </div>
                    
                  <div class="swiper-slide">
                    <a href="#"><img src="http://mall.bydauto.com.cn/media/wysiwyg/20150721/720x246.jpg" width="100%" alt=""></a>
                  </div>
                  
                  <div class="swiper-slide">
                    <a href="#"><img src="http://mall.bydauto.com.cn/media/wysiwyg/20150721/720x246.jpg" width="100%" alt=""></a>
                  </div>


                </div>
              </div>

              <div class="box1 box1-home">
                <div class="hd bdbottom">活动结集号</div>


                <div class="start-bk-home start-bk">
                  <div class="time-count">
                    <span class="start fl"></span>
                    <span class="lb2 fl"></span> <!-- / lb1 距开始样式， lb2 进行中样式 -->
                    <div class="fl counttime"  countTime="2015/11/12 14:40:53,2015/11/15 11:00:00">
                      <span class="c-day" countDay ></span>天<span class="sp1"></span><span class="c-hour" countHour ></span>时<span class="sp1"></span><span class="c-min" countMin ></span>分<span class="sp1"></span><span class="c-sec" countSec ></span>秒
                    </div>
                  </div>
                </div>


                <div data-paginationHide="true" data-slidesPerView="4" data-grabCursor="true" class="swiper-container swiper-init ks-demo-slider swiper-c3">
                <div class="swiper-wrapper">
                  <div class="swiper-slide "><div class="list-jjh">
                      <div class="item">
                        <div class="img">
                          <img src="http://mall.bydauto.com.cn/media/wysiwyg/1215/_237x255.jpg" class="" alt="...">
                        </div>
                        <div class="txt">东莞自驾游</div>
                        <div class="date">2014-08-03</div>
                        <a href="jjh-item.php" class="button button-fill color-blue">我要报名</a>
                      </div>
                      <div class="item">
                        <div class="img">
                          <img src="http://mall.bydauto.com.cn/media/wysiwyg/1215/_237x255.jpg" class="" alt="...">
                        </div>
                        <div class="txt">东莞自驾游</div>
                        <div class="date">2014-08-03</div>
                        <a href="jjh-item.php" class="button button-fill button-wait">我要报名</a>
                      </div>
                      <div class="item">
                        <div class="img">
                          <img src="http://mall.bydauto.com.cn/media/wysiwyg/1215/_237x255.jpg" class="" alt="...">
                        </div>
                        <div class="txt">东莞自驾游</div>
                        <div class="date">2014-08-03</div>
                        <a href="jjh-item.php" class="button button-fill button-wait">敬请期待</a>
                      </div>
                    </div></div>
                  <div class="swiper-slide "><div class="list-jjh">
                      <div class="item">
                        <div class="img">
                          <img src="http://mall.bydauto.com.cn/media/wysiwyg/1215/_237x255.jpg" class="" alt="...">
                        </div>
                        <div class="txt">东莞自驾游</div>
                        <div class="date">2014-08-03</div>
                        <a href="jjh-item.php" class="button button-fill button-wait">敬请期待</a>
                      </div>
                      <div class="item">
                        <div class="img">
                          <img src="http://mall.bydauto.com.cn/media/wysiwyg/1215/_237x255.jpg" class="" alt="...">
                        </div>
                        <div class="txt">东莞自驾游</div>
                        <div class="date">2014-08-03</div>
                        <a href="jjh-item.php" class="button button-fill button-wait">敬请期待</a>
                      </div>                    
                      <div class="item">
                        <div class="img">
                          <img src="http://mall.bydauto.com.cn/media/wysiwyg/1215/_237x255.jpg" class="" alt="...">
                        </div>
                        <div class="txt">东莞自驾游</div>
                        <div class="date">2014-08-03</div>
                        <a href="jjh-item.php" class="button button-fill button-wait">敬请期待</a>
                      </div>
                    </div></div>
                </div>
                                 
                  
                </div>
              </div>

              <div class="box2 box1 ">
                <div class="hd bdbottom">站扎推荐</div>
                 <div class="list-block media-list media-list-1">
                      <ul>
                        <li><a href="pro-item.php" class="item-link item-content">
                            <div class="item-media"><img src="http://www.dpfile.com/gp/cms/1439874789082.jpg"></div>
                            <div class="item-inner">
                              <div class="item-title-row">
                                <div class="item-title">鲜香麻辣</div>
                                <div class="item-after">$15</div>
                              </div>
                              <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                              <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
                            </div></a></li>
                        <li><a href="pro-item.php" class="item-link item-content">
                            <div class="item-media"><img src="http://www.dpfile.com/gp/cms/1439874789082.jpg"></div>
                            <div class="item-inner">
                              <div class="item-title-row">
                                <div class="item-title">鲜香麻辣</div>
                                <div class="item-after">$15</div>
                              </div>
                              <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                              <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
                            </div></a></li>
                          
                      </ul>
                    </div>
              </div>

              <div class="box2 box1 ">
                              <div class="hd bdbottom">今日热单</div>
                               <div class="list-block media-list media-list-1">
                                    <ul>
                                      <li><a href="pro-item.php" class="item-link item-content">
                                          <div class="item-media"><img src="http://j2.s2.dpfile.com/pc/e11360e0ed635a7b01c0cc68befc69d0(335c221)/thumb.jpg" alt="1906四川" title="1906四川"></div>
                                          <div class="item-inner">
                                            <div class="item-title-row">
                                              <div class="item-title">鲜香麻辣</div>
                                              <div class="item-after">$15</div>
                                            </div>
                                            <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                                            <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
                                          </div></a></li>
                                      <li><a href="pro-item.php" class="item-link item-content">
                                          <div class="item-media"><img src="http://j2.s2.dpfile.com/pc/e11360e0ed635a7b01c0cc68befc69d0(335c221)/thumb.jpg" alt="1906四川" title="1906四川"></div>
                                          <div class="item-inner">
                                            <div class="item-title-row">
                                              <div class="item-title">鲜香麻辣</div>
                                              <div class="item-after">$15</div>
                                            </div>
                                            <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                                            <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
                                          </div></a></li>
                                      <li><a href="pro-item.php" class="item-link item-content">
                                          <div class="item-media"><img src="http://j2.s2.dpfile.com/pc/e11360e0ed635a7b01c0cc68befc69d0(335c221)/thumb.jpg" alt="1906四川" title="1906四川"></div>
                                          <div class="item-inner">
                                            <div class="item-title-row">
                                              <div class="item-title">鲜香麻辣</div>
                                              <div class="item-after">$15</div>
                                            </div>
                                            <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                                            <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
                                          </div></a></li>
                                      <li><a href="pro-item.php" class="item-link item-content">
                                          <div class="item-media"><img src="http://j2.s2.dpfile.com/pc/e11360e0ed635a7b01c0cc68befc69d0(335c221)/thumb.jpg" alt="1906四川" title="1906四川"></div>
                                          <div class="item-inner">
                                            <div class="item-title-row">
                                              <div class="item-title">鲜香麻辣</div>
                                              <div class="item-after">$15</div>
                                            </div>
                                            <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                                            <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
                                          </div></a></li>
                                        
                                    </ul>
                                  </div>
                            </div>


            </div>
          </div>

          <div class="footer">
            <span class="boxfx">
              <a href="index.php" class="item-link current"><i class="fa fa-home"></i><br />首页</a></span>
            <span class="boxfx">
              <a href="cate-list.php" class="item-link"><i class="fa fa-shopping-bag"></i><br />团购</a></span>
            <span class="boxfx">
              <a href="cate-list.php" class="item-link"><i class="fa fa-shopping-basket"></i><br />找水疗</a></span>
            <span class="boxfx">
              <a href="my.php" class="item-link"><i class="fa fa-user"></i><br />我的</a></span>
          </div>
        </div>
      </div>
    </div>
    <span class="preloader"></span>
    <script type="text/javascript" src="js/asset.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=1.3"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </body>
</html>