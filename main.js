$(function () {
    var $list = $(".product-list");
    var ONE_ROW_HTML = $(".one-item-template").html();
    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var quanity = 1;
        var quanity_label = $node.find(".count-label")
        quanity_label.text(quanity);
        $node.find(".controller-left").text(title);
        $list.append($node).stop().hide().slideDown();
    }
    $(".add-button").click(
        function(){
            addItem(document.getElementById("newItem").value);
        }
    );
});
