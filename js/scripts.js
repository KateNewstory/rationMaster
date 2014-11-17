$(function () {
    ViewModel = function (dishes) {
        var self = this;
        self.mode = ko.observable('settings');
        self.errorMsg = ko.observable('');
        self.dishes = dishes;
        self.showPrint = function () {
            self.mode('print');
        };
        self.showSettings = function () {
            self.mode('settings');
        };
        self.dishComponents = function () {
            var result = [];
            self.dishes.forEach(function (dish) {
                dish.component.forEach(function (component) {
                    if (result.indexOf(component) == -1) {
                        result.push(component);
                    }
                });
            });
            return result.sort();
        };
        self.dishTypes = function () {
            var result = [''];
            self.dishes.forEach(function (dish) {
                if (result.indexOf(dish.type) == -1) {
                    result.push(dish.type);
                }
            });
            return result;
        };
        self.restriction = {
            breakfast:{
                protein:ko.observable(100),
                fat:ko.observable(100),
                carbo:ko.observable(100),
                calorie:ko.observable(100)
            },
            dinner:{
                protein:ko.observable(100),
                fat:ko.observable(100),
                carbo:ko.observable(100),
                calorie:ko.observable(100)
            },
            supper:{
                protein:ko.observable(100),
                fat:ko.observable(100),
                carbo:ko.observable(100),
                calorie:ko.observable(100)
            }
        };
        self.restriction.total = {
            protein:ko.computed(function () {
                return +self.restriction.breakfast.protein() + +self.restriction.dinner.protein() + +self.restriction.supper.protein();
            }),
            fat:ko.computed(function () {
                return +self.restriction.breakfast.fat() + +self.restriction.dinner.fat() + +self.restriction.supper.fat();
            }),
            carbo:ko.computed(function () {
                return +self.restriction.breakfast.carbo() + +self.restriction.dinner.carbo() + +self.restriction.supper.carbo();
            }),
            calorie:ko.computed(function () {
                return +self.restriction.breakfast.calorie() + +self.restriction.dinner.calorie() + +self.restriction.supper.calorie();
            })
        };
        self.ration = {
            breakfast:{
                container:ko.observableArray([])
            },
            dinner:{
                container:ko.observableArray([])
            },
            supper:{
                container:ko.observableArray([])
            },
            add:function (dish, type) {
                var found = false;
                var energyLeft = self.ration[type].energyLeft;
                var errorMsg = '';
                if (dish.protein > energyLeft.protein()) {
                    errorMsg += 'белка';
                }
                if (dish.fat > energyLeft.fat()) {
                    if (errorMsg) {
                        errorMsg += ', '
                    }
                    errorMsg += 'жиров';
                }
                if (dish.carbo > energyLeft.carbo()) {
                    if (errorMsg) {
                        errorMsg += ', '
                    }
                    errorMsg += 'углеводов';
                }
                if (dish.calorie > energyLeft.calorie()) {
                    if (errorMsg) {
                        errorMsg += ', '
                    }
                    errorMsg += 'калорий';
                }

                if (errorMsg) {
                    self.errorMsg('Нельзя добавить это блюдо: превышение ' + errorMsg);

                } else {
                    self.ration[type].container().every(function (value, index, array) {
                        if (dish.name == value.dish.name) {
                            array[index].count(value.count() + 1);
                            found = true;
                            return false;
                        }
                        return true;
                    });
                    if (!found) {
                        self.ration[type].container.push({dish:dish, count:ko.observable(1)});
                    }
                }

            },
            remove:function (element, type) {
                self.ration[type].container.remove(element);
            },
            getEnergy:function (type, energyType) {
                var result = 0;

                self.ration[type].container().forEach(function (element) {
                    result += element.count() * element.dish[energyType];
                });
                return result;
            },
            getEnergyObj:function (type) {
                return {
                    protein:ko.computed(function () {
                        return self.ration.getEnergy(type, 'protein');
                    }),
                    fat:ko.computed(function () {
                        return self.ration.getEnergy(type, 'fat');
                    }),
                    carbo:ko.computed(function () {
                        return self.ration.getEnergy(type, 'carbo');
                    }),
                    calorie:ko.computed(function () {
                        return self.ration.getEnergy(type, 'calorie');
                    })
                }
            },
            getEnergyLeftObj:function (type) {
                return {
                    protein:ko.computed(function () {
                        return self.restriction[type].protein() - self.ration[type].energy.protein();
                    }),
                    fat:ko.computed(function () {
                        return self.restriction[type].fat() - self.ration[type].energy.fat();
                    }),
                    carbo:ko.computed(function () {

                        return self.restriction[type].carbo() - self.ration[type].energy.carbo();
                    }),
                    calorie:ko.computed(function () {
                        return self.restriction[type].calorie() - self.ration[type].energy.calorie();
                    })
                };
            }
        };

        self.ration.breakfast.energy = self.ration.getEnergyObj('breakfast');
        self.ration.breakfast.energyLeft = self.ration.getEnergyLeftObj('breakfast');

        self.ration.dinner.energy = self.ration.getEnergyObj('dinner');
        self.ration.dinner.energyLeft = self.ration.getEnergyLeftObj('dinner');

        self.ration.supper.energy = self.ration.getEnergyObj('supper');
        self.ration.supper.energyLeft = self.ration.getEnergyLeftObj('supper');

        self.ration.energy = {
            protein:ko.computed(function () {
                return self.ration.breakfast.energy.protein() + self.ration.dinner.energy.protein() + self.ration.supper.energy.protein();
            }),
            fat:ko.computed(function () {
                return self.ration.breakfast.energy.fat() + self.ration.dinner.energy.fat() + self.ration.supper.energy.fat();
            }),
            carbo:ko.computed(function () {
                return self.ration.breakfast.energy.carbo() + self.ration.dinner.energy.carbo() + self.ration.supper.energy.carbo();
            }),
            calorie:ko.computed(function () {
                return self.ration.breakfast.energy.calorie() + self.ration.dinner.energy.calorie() + self.ration.supper.energy.calorie();
            })
        };
        self.ration.energyLeft = {
            protein:ko.computed(function () {
                return self.restriction.total.protein() - self.ration.energy.protein();
            }),
            fat:ko.computed(function () {
                return self.restriction.total.fat() - self.ration.energy.fat();
            }),
            carbo:ko.computed(function () {
                return self.restriction.total.carbo() - self.ration.energy.carbo();
            }),
            calorie:ko.computed(function () {
                return self.restriction.total.calorie() - self.ration.energy.calorie();
            })
        };
        self.filterName = ko.observable('');
        self.filterType = ko.observable('');
        self.filterProtein = ko.observable();
        self.filterFat = ko.observable();
        self.filterCarbo = ko.observable();
        self.filterCalorie = ko.observable();
        self.filterComponent = ko.observableArray(self.dishComponents());

        self.filteredDishes = ko.computed(function () {
            var filterName = self.filterName();
            var filterType = self.filterType();
            var filterProtein = self.filterProtein();
            var filterFat = self.filterFat();
            var filterCarbo = self.filterCarbo();
            var filterCalorie = self.filterCalorie();
            var filterComponent = self.filterComponent();

            var result = [];
            self.dishes.forEach(function (dish) {
                if (filterName && dish.name.toLowerCase().indexOf(filterName.toLowerCase()) == -1) {
                    return;
                }
                if (filterType[0] && dish.type != filterType) {
                    return;
                }
                if (filterProtein && dish.protein < filterProtein) {
                    return;
                }
                if (filterFat && dish.fat < filterFat) {
                    return;
                }
                if (filterCarbo && dish.carbo < filterCarbo) {
                    return;
                }
                if (filterCalorie && dish.calorie < filterCalorie) {
                    return;
                }
                if (filterComponent.length) {
                    var componentFound = true;
                    dish.component.every(function (component) {
                        if (self.filterComponent.indexOf(component) == -1) {
                            componentFound = false;
                            return false;

                        }
                        return true;
                    });
                    if (!componentFound) {
                        return;
                    }
                }
                result.push(dish);
            });
            return result;
        });


    };
    ko.applyBindings(new ViewModel(dishes));
});