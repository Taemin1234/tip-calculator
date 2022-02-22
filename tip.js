//버튼을 눌러 계산하고 리셋으로 초기화 후 custom을 누르면 입력창이 나타나지 않는 현상


// 모든 버튼을 누르면 클릭 효과가 지워지고 reset 버튼의 효과도 지워짐
$('.select').on('click', function() {
    $('.select').removeClass('select-click')
    $('.custom').removeClass('select-click')
    $('.reset').css('opacity', 1)
    $('.custom-input-click').hide()

    // 아무 것도 입력이 되지 않은 상태일 때 버튼을 누르면 0으로 표시
    if($('.price').val() && $('.people').val() == '') {
        $('.tip-result').text('$ 0.00')
        $('.price-result').text('$ 0.00')
    }
});


$('.select').eq(0).on('click', function() {
    $('.select').eq(0).addClass('select-click')
    $('.tip-result').text('$ ' + ($('.price').val() * 0.05 / $('.people').val()).toFixed(2))
    $('.price-result').text('$ ' + ($('.price').val() * 1.05 / $('.people').val()).toFixed(2))
});

$('.select').eq(1).on('click', function() {
    $('.select').eq(1).addClass('select-click')
    $('.tip-result').text('$ ' + ($('.price').val() * 0.1 / $('.people').val()).toFixed(2))
    $('.price-result').text('$ ' + ($('.price').val() * 1.1 / $('.people').val()).toFixed(2))
});

$('.select').eq(2).on('click', function() {
    $('.select').eq(2).addClass('select-click')
    $('.tip-result').text('$ ' + ($('.price').val() * 0.15 / $('.people').val()).toFixed(2))
    $('.price-result').text('$ ' + ($('.price').val() * 1.15 / $('.people').val()).toFixed(2))
});

$('.select').eq(3).on('click', function() {
    $('.select').eq(3).addClass('select-click')
    $('.tip-result').text('$ ' + ($('.price').val() * 0.25 / $('.people').val()).toFixed(2))
    $('.price-result').text('$ ' + ($('.price').val() * 1.25 / $('.people').val()).toFixed(2))
});

$('.select').eq(4).on('click', function() {
    $('.select').eq(4).addClass('select-click')
    $('.tip-result').text('$ ' + ($('.price').val() * 0.3 / $('.people').val()).toFixed(2))
    $('.price-result').text('$ ' + ($('.price').val() * 1.3 / $('.people').val()).toFixed(2))
});

$('.custom').on('click', function() {
    $('.select').removeClass('select-click')
    $('.custom').addClass('select-click')
    $('.custom-input-click').show()
    $('.custom-input').val('')

});



$('.custom-input').on('keypress', function(e){

    if(e.keyCode == 13){
        $('.custom').removeClass('select-click')
        $('.reset').css('opacity', 1)
        $('.custom-input-click').hide()

        $('.tip-result').text('$ ' + ($('.price').val() * $('.custom-input').val()*0.01 / $('.people').val()).toFixed(2))
        $('.price-result').text('$ ' + (($('.price').val() / $('.people').val()) + ($('.price').val() * $('.custom-input').val()*0.01 / $('.people').val())).toFixed(2))
        //총합의 결과가 나오지 않아 각 값에 사람수로 나누고 더하는 방식을 사용
    }
});

$('.btn-custom').on('click', function(){
    $('.custom').removeClass('select-click')
    $('.reset').css('opacity', 1)
    $('.custom-input-click').hide()

    $('.tip-result').text('$ ' + ($('.price').val() * $('.custom-input').val()*0.01 / $('.people').val()).toFixed(2))
    $('.price-result').text('$ ' + (($('.price').val() / $('.people').val()) + ($('.price').val() * $('.custom-input').val()*0.01 / $('.people').val())).toFixed(2))
});


$('.btn-reset').on('click', function(){
    $('.price').val('')
    $('.people').val(1)
    $('.tip-result').text(0)
    $('.price-result').text(0)
    $('.select').removeClass('select-click')
    $('.custom-input-click').hide()

    $('.reset').css('opacity', 0.3)

})

// 인원수의 값은 기본값이 1이나 클릭시 공백으로 바뀐다.
$('.people').on('click', function(){
    $('.people').val('')
})





