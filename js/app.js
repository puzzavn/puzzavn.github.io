$(function () {
    // click thêm thông tin đặt hàng
    $('.them-thong-tin-dat-hang').click(function (e) { 
        e.preventDefault();
        $('.khoi-dien-thong-tin-dat-hang').removeClass('an');
        $('.nut-them-thong-tin-dat-hang').removeClass('an');
        $('.nut-huy').removeClass('an');
        $('.them-thong-tin-dat-hang').addClass('an');
        $('.nut-thanh-toan').addClass('an');
        $('.tieu-de-dhct').addClass('an');
        $('.tieu-de-ttdh').removeClass('an');
        $('.khoi-thong-tin').addClass('setbgred');
        $('.khoi-gio-hang-thung-rac').addClass('an');
        $('.khoi-thong-tin').addClass('khoi-thong-tin-height');
    });

    // click giờ đặt hàng
    $('.later i').click(function (e) { 
        e.preventDefault();
        $('.now i').removeClass('fa-dot-circle');
        $('.now i').addClass('fa-circle');
        $('.later i').removeClass('fa-circle');
        $('.later i').addClass('fa-dot-circle');
        $('.gio-dat-hang-sau').removeClass('an');
    });
    $('.now i').click(function (e) { 
        e.preventDefault();
        $('.later i').removeClass('fa-dot-circle');
        $('.later i').addClass('fa-circle');
        $('.now i').removeClass('fa-circle');
        $('.now i').addClass('fa-dot-circle');
        $('.gio-dat-hang-sau').addClass('an');
    });

    // click hình thức đặt hàng
    $('.ghtn i').click(function (e) { 
        e.preventDefault();
        $('.ghtn i').addClass('fa-dot-circle');
        $('.ghtn i').removeClass('fa-circle');
        $('.mmv i').addClass('fa-circle');
        $('.mmv i').removeClass('fa-dot-circle');
    });
    $('.mmv i').click(function (e) { 
        e.preventDefault();
        $('.mmv i').addClass('fa-dot-circle');
        $('.mmv i').removeClass('fa-circle');
        $('.ghtn i').addClass('fa-circle');
        $('.ghtn i').removeClass('fa-dot-circle');
    });

    // click menu
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.khoi-dang-ky').addClass('an');
        $('.menu').removeClass('active-menu');
        $(this).addClass('active-menu');
        $('.item').removeClass('active-item');
        if ($(this).hasClass('menu-trang-chu')) {
            $('.khoi-dkdn p').removeClass('active-a');
            $('.khoi-giua').addClass('an');
            $('.khoi-don-hang-cua-toi').addClass('an');
            $('.khoi-huy-them-thanh-toan').addClass('an');
            $('.khoi-phai').addClass('active-khoi-phai-trang-chu');
            $('.khoi-phai').removeClass('active-khoi-phai-dang-ky');
            $('.khoi-trang-chu').removeClass('an');
        } else {
            $('.khoi-dkdn p').addClass('active-a');
            $('.khoi-trang-chu').addClass('an');
            $('.khoi-giua').removeClass('an');
            $('.khoi-phai').removeClass('an');
            $('.khoi-phai').removeClass('active-khoi-phai-trang-chu');
            $('.khoi-phai').removeClass('active-khoi-phai-dang-ky');
            $('.khoi-don-hang-cua-toi').removeClass('an');
            $('.khoi-huy-them-thanh-toan').removeClass('an');
        }
        if ($(this).hasClass('menu-thuc-don')) {
            $('.khoi-item').removeClass('an');
        } else {
            $('.khoi-item').addClass('an');
        }
        var check = $(this).data('check');
        $('.page').each(function (index, element) {
            // element == this
            if ($(this).hasClass(check)) {
                $('.page').addClass('an');
                $(this).removeClass('an');
                $(this).show(300);                
            } else {
                $(this).hide(300);
            }
        });
    });

    // click item
    $('.item').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active-item');
        $(this).addClass('active-item');
        var check = $(this).data('check');
        $('.page').each(function (index, element) {
            // element == this
            if ($(this).hasClass(check)) {
                $('.page').addClass('an');
                $(this).removeClass('an');
                $(this).show(300);
            } else {
                $(this).hide(300)
            }
        });
    });

    // click xem tất cả
    $('.nut-xem-tat-ca').click(function (e) { 
        e.preventDefault();
        var check = $(this).data('check');
        $('.page').each(function (index, element) {
            // element == this
            if ($(this).hasClass(check)) {
                $('.page').addClass('an');
                $(this).removeClass('an');
                $(this).show(300);
            } else {
                $(this).hide(300)
            }
        });
        var checki = $(this).data('checki');
        $('.item').each(function (index, element) {
            // element == this
            if ($(this).hasClass(checki)) {
                $('.item').removeClass('active-item');
                $(this).addClass('active-item');
                $(this).show(300);
            }
        });
    });

    // click ảnh pizza
    $('.anh-pizza').click(function (e) { 
        e.preventDefault();
        $('.khoi-man-1').addClass('an');
        $('.khoi-chi-tiet-mon-an').removeClass('an');
        var pizzaso = $(this).data('pizzaso');
        $('.pizza-so').each(function (index, element) {
            // element == this
            if ($(this).hasClass(pizzaso)) {
                $('.pizza-so').addClass('an');
                $(this).removeClass('an');
                $(this).show(300);
            } else {
                $(this).hide(300);
            }
        });

        $('.nut-huy').removeClass('an');
        $('.nut-thanh-toan').addClass('an');
        $('.nut-them-mon-an').removeClass('an');
        $('.nut-them-thong-tin-dat-hang').addClass('an');


        var productCard = $(this).parent();
        var productName = $(productCard).find('.ten-mon-an').text();	
        // click bỏ chọn
        $('.nut-bo-chon').click(function (e) { 
            e.preventDefault();
            $(this).parent().remove();
        });
        
        // click nút thêm món ăn
        $('.nut-them-mon-an').click(function (e) { 
            e.preventDefault();
            $('.khoi-gio-hang').removeClass('an');
            $('.khoi-man-1').removeClass('an');
            $('.khoi-chi-tiet-mon-an').addClass('an');
            $('.nut-huy').addClass('an');
            $('.nut-them-mon-an').addClass('an');
            $('.nut-thanh-toan').removeClass('an');
            
            var cartItem = "<div class='col-12 mon-an'><p class='ten-mon-an'>"+productName+"</p><div class='khoi-so-luong-gia-tien'><div class='khoi-so-luong'><button class='btn-so-luong nut-tru'><i class='fas fa-minus'></i></button><input type='text' value='1' class='nhap-so-luong'><button class='btn-so-luong nut-cong'><i class='fas fa-plus'></i></button></div><div class='khoi-gia-tien'><span>x199.000 ₫</span></div></div><button class='btn nut-bo-chon'>Bỏ chọn</button><hr class='gach-mo'></div>";		

            $('.cart').append(cartItem);
        });
    });

    // click nút hủy
    $('.nut-huy').click(function (e) { 
        e.preventDefault();
        $('.bang-dien-thong-tin-thanh-toan').addClass('an');
        $('.khoi-man-1').removeClass('an');
        $('.khoi-chi-tiet-mon-an').addClass('an');
        $('.khoi-dien-thong-tin-dat-hang').addClass('an');
        $('.khoi-thong-tin').removeClass('khoi-thong-tin-height');
        $('.nut-huy').addClass('an');
        $('.tieu-de-dhct').removeClass('an');
        $('.tieu-de-ttdh').addClass('an');
        $('.them-thong-tin-dat-hang').removeClass('an');
        $('.nut-them-thong-tin-dat-hang').addClass('an');
        $('.nut-them-mon-an').addClass('an');
        $('.nut-thanh-toan').removeClass('an');
        $('.khoi-thong-tin').removeClass('setbgred');
        $('.khoi-gio-hang-thung-rac').removeClass('an');
    });

    // click nút size
    $('.nut-size').click(function (e) { 
        e.preventDefault();
        $('.nut-size').removeClass('active-nut-size');
        $(this).addClass('active-nut-size');
    });

    // click nút thêm thông tin đặt hàng
    $('.nut-them-thong-tin-dat-hang').click(function (e) { 
        e.preventDefault();
        
        $('.khoi-man-1').removeClass('an');
        $('.khoi-chi-tiet-mon-an').addClass('an');
        $('.khoi-dien-thong-tin-dat-hang').addClass('an');
        $('.khoi-thong-tin').removeClass('khoi-thong-tin-height');
        $('.nut-huy').addClass('an');
        $('.tieu-de-dhct').removeClass('an');
        $('.tieu-de-ttdh').addClass('an');
        $('.them-thong-tin-dat-hang').removeClass('an');
        $('.nut-them-thong-tin-dat-hang').addClass('an');
        $('.nut-thanh-toan').removeClass('an');
        $('.khoi-thong-tin').removeClass('setbgred');
        $('.khoi-gio-hang-thung-rac').removeClass('an');

        var sonha = $("input[name='so-nha']").val();
        var duong = $("input[name='duong']").val();
        var quanhuyen = $('#quan-huyen :selected').text();
        var thanhpho = $('#thanh-pho :selected').text();
        $('.them-thong-tin-dat-hang').text(sonha+" "+duong+","+" "+quanhuyen+","+" "+thanhpho);
    });

    // click đăng ký
    $('li.nut-dang-ky p').click(function (e) { 
        e.preventDefault();
        $('.khoi-item').addClass('an');
        $('.menu').removeClass('active-menu');
        $('.khoi-dang-ky').removeClass('an');
        $('.khoi-trang-chu').addClass('an');
        $('.khoi-giua').addClass('an');
        $('.khoi-don-hang-cua-toi').addClass('an');
        $('.khoi-huy-them-thanh-toan').addClass('an');
        $('.khoi-phai').addClass('active-khoi-phai-dang-ky');
        $('.khoi-phai').removeClass('active-khoi-phai-trang-chu');
        $('.khoi-dkdn p').addClass('active-a');
    });
    $('.nut-dang-ki-ngay').click(function (e) { 
        e.preventDefault();
        $('.khoi-item').addClass('an');
        $('.menu').removeClass('active-menu');
        $('.khoi-dang-ky').removeClass('an');
        $('.khoi-trang-chu').addClass('an');
        $('.khoi-giua').addClass('an');
        $('.khoi-don-hang-cua-toi').addClass('an');
        $('.khoi-huy-them-thanh-toan').addClass('an');
        $('.khoi-phai').addClass('active-khoi-phai-dang-ky');
        $('.khoi-phai').removeClass('active-khoi-phai-trang-chu');
        $('.khoi-dkdn p').addClass('active-a');
    });

    $('.nut-thanh-toan').click(function (e) { 
        e.preventDefault();
        $('.bang-dien-thong-tin-thanh-toan').removeClass('an');
        $('.nut-huy').removeClass('an');
    });
    
});