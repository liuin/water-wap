<?php
// Start index of list element to repsonse with
$leftIndex = $_GET['leftIndex'];
$itemsAmount = 10; // 19 items per request
$maxItemIndex = 30; // 150th item will be the last

if ($leftIndex >= $maxItemIndex) {
    // nothing to load
    exit();
}

$rightIndex = $leftIndex + $itemsAmount;
if ($rightIndex > $maxItemIndex) $rightIndex = $maxItemIndex;

for ($i = $leftIndex; $i <= $rightIndex; $i++) {
    echo '<li><a href="pro-item.php" class="item-link item-content">
              <div class="item-media"><img src="http://j2.s2.dpfile.com/pc/e11360e0ed635a7b01c0cc68befc69d0(335c221)/thumb.jpg" alt="1906四川" title="1906四川"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">鲜香麻辣</div>
                  <div class="item-after">$1'. $i .'</div>
                </div>
                <div class="item-subtitle"><span class="star"><span style="width:50%;"></span></span></div>
                <div class="item-text">红漆的矮方桌、小凳子，一锅红汤，和一大把一大把的竹签构成了一道特别风景。来自成都传奇小吃的串串香，口味麻辣鲜香，一锅红油涮着各种美味，真让人馋涎欲滴</div>
              </div></a></li>';
}

?>