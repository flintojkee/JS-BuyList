$(function () {
    var $list = $(".product-list");
    var $stats = $(".remains-products");
    var $bought =$(".bought-products");
    var ONE_ROW_ITEM = $(".one-item-template").html();
    var ONE_ROW_STAT = $(".one-item-stat-template").html();
    function addItem(title) {
        var $item = $(ONE_ROW_ITEM);
        var quantity = 1;
        var $count_label = $item.find(".count-label");
        $count_label.text(quantity);
        $item.find(".controller-left").text(title);
        var $stat = $(ONE_ROW_STAT);
        var $quantity_label = $stat.find(".quantity");
        $stat.find(".name").text(title);

        $item.find(".btn-minus").prop("disabled",true);

        $item.find(".btn-plus").click(function () {
            quantity+=1;
            $item.find(".btn-minus").prop("disabled",false);
            $item.find(".btn-minus").removeClass("inactive")
            $count_label.text(quantity);
            $quantity_label.text(quantity);
        });

        $item.find(".btn-minus").click(function () {
                if (quantity > 1) {
                    quantity -= 1;
                    $count_label.text(quantity);
                    $quantity_label.text(quantity);
                }
                if(quantity === 1){
                    $item.find(".btn-minus").addClass("inactive");
                    $item.find(".btn-minus").prop("disabled",true);
                }
            }
        );
        $item.find(".acquired").click(function () {
            $item.find(".btn-minus").hide();
            $item.find(".btn-plus").hide();
            $item.find(".delete").hide();
            $item.find(".count-label").addClass("acquired-count");
            $item.find(".controller-left").addClass("acquired-text-style");
            $stat.find(".name").addClass("acquired-text-style");
            $stat.find(".quantity").addClass("acquired-text-style");
            $bought.append($stat);
        });

        $item.find(".delete").click(
            function () {
                $item.slideUp();
                $stat.hide();
            });

        $stats.append($stat);
        $stat.show();
        $list.append($item);
        $item.slideDown();
    }
    var $new_input = $("#newItem");
    $(".add-button").click(
        function(){
            var new_name = $new_input.val();
            if(new_name.trim()){
                addItem(new_name);
                $new_input.val("");
                $new_input.focus();
            }
        }
    );
    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");
});
