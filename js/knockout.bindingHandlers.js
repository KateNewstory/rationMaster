ko.bindingHandlers.numeric = {
    update: function (element, valueAccessor) {
        var value = valueAccessor();

        $(element).on("focusout", function () {
            var number = parseFloat(value());
            if (!isNaN(number) && number >= 0) {
                value(number);
            } else {
                value(0);
            }
        });
    }
};
ko.bindingHandlers.alert = {
    update: function (element, valueAccesor) {
        var value = valueAccesor();

        if (value() != '') {
            $(element).text(value()).fadeIn().delay(1000).fadeOut();
            value('');
        }

    }
}