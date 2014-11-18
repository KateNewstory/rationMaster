ko.bindingHandlers.numeric = {
    update:function (element, valueAccessor) {
        var value = valueAccessor();

        $(element).on("focusout", function () {
           if(!isNaN(parseFloat(value()))) {
               value(parseFloat(value()))
           } else {
               value(0);
           }
        });
    }
};
ko.bindingHandlers.alert = {
    update:function (element, valueAccesor) {
        var value = valueAccesor();

        if (value() != '') {
            $(element).text(value()).fadeIn().delay(1000).fadeOut();
            value('');
        }

    }
}