window.addEventListener('load', function () {
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var swiper = document.querySelector('.swiper');
    var ul = document.querySelector('.bo');
    var ol = document.querySelector('.pagination');
    var dingbu = document.querySelector('.dingbu')
    var swiperWidth = swiper.offsetWidth;
    var num = 0;
    var circle = 0;
    swiper.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    swiper.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            next.click();
        },4000);
    })
    
    for(var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for(var i = 0; i < ul.children.length - 1; i++) {
                ol.children[i].className = '';
            }
            this.className = 'active';
            // console.log(swiperWidth);
            var index = this.getAttribute('index');
            num = circle = index;
            // console.log(index);
            // console.log(-index * swiperWidth);
            animate(ul, - index * swiperWidth);
        })
    }
    ol.children[0].className = 'active';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var flag = true;
    next.addEventListener('click', function() {  
        if(flag) {
            flag = false;
            if (num == ul.children.length - 1) { 
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, - num * swiperWidth, function () {flag = true;});
            circle++;
            if (circle == ul.children.length - 1) {
                circle = 0;
            }
            for(var i = 0; i < ul.children.length - 1; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'active';
        }   
    })
    prev.addEventListener('click', function() {
        if(flag) {
            flag = false;
            if (num == 0) { 
                num = ul.children.length - 1;
                ul.style.left = -(num * swiperWidth) + 'px';
            }
            num--;
            animate(ul, - num * swiperWidth, function () {flag = true;});
            if (circle == 0) {
                circle = ul.children.length;
                circle--;
            }
            circle--;
            for(var i = 0; i < ul.children.length - 1; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'active';
        }     
    })
    var timer = setInterval(function () {
        next.click();
    },4000);
    document.addEventListener('scroll', function () {
        // console.log(window.pageYOffset);
            if (window.pageYOffset > 1781) {
                dingbu.style.display = 'block';
                // console.log(window.pageYOffset);
                if (window.pageYOffset > 5090) {
                    dingbu.style.position = 'absolute';
                    dingbu.style.top = -95 + 'px';
                } else {
                    dingbu.style.position = 'fixed';
                    dingbu.style.top = 450 + 'px';
                }
            } else {
                dingbu.style.display = 'none';
            }
    })
    dingbu.addEventListener('click', function () {
        animate2(window, 0);
    })

})