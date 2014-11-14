$(function () {
    ko.bindingHandlers.numeric = {
        init:function (element, valueAccessor) {
            $(element).on("keydown", function (event) {
                // Allow: backspace, delete, tab, escape, and enter
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                    // Allow: Ctrl+A
                    (event.keyCode == 65 && event.ctrlKey === true) ||
                    // Allow: . ,
                    (event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||
                    // Allow: home, end, left, right
                    (event.keyCode >= 35 && event.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                else {
                    // Ensure that it is a number and stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                    }
                }
            });
        }
    };
    var dishes = [
        {
            type:'Первые блюда',
            name:'Борщ',
            calorie:10,
            protein:10,
            fat:10,
            carbo:10,
            img:'img/borsch.jpg',
            component:['Свекла', 'Морковь', 'Лук репчатый', 'Картофель', 'Свинина', 'Томатная паста']
        },
        {
            type:'Вторые блюда',
            name:'Каша гречневая',
            calorie:20,
            protein:20,
            fat:20,
            carbo:20,
            img:'',
            component:[]
        },
        {
            type:'Напитки',
            name:'Компот яблочный',
            calorie:5,
            protein:5,
            fat:5,
            carbo:5,
            img:'',
            component:[]
        }

    ];
    ViewModel = function (dishes) {
        var self = this;
        self.dishes = dishes;
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
            }
        };

        self.ration.breakfast.energy = {
            protein:ko.computed(function () {
                return self.ration.getEnergy('breakfast', 'protein');
            }),
            fat:ko.computed(function () {
                return self.ration.getEnergy('breakfast', 'fat');
            }),
            carbo:ko.computed(function () {
                return self.ration.getEnergy('breakfast', 'carbo');
            }),
            calorie:ko.computed(function () {
                return self.ration.getEnergy('breakfast', 'calorie');
            })
        };
        self.ration.breakfast.energyLeft = {
            protein:ko.computed(function () {
                return self.restriction.breakfast.protein() - self.ration.breakfast.energy.protein();
            }),
            fat:ko.computed(function () {
                return self.restriction.breakfast.fat() - self.ration.breakfast.energy.fat();
            }),
            carbo:ko.computed(function () {
                return self.restriction.breakfast.carbo() - self.ration.breakfast.energy.carbo();
            }),
            calorie:ko.computed(function () {
                return self.restriction.breakfast.calorie() - self.ration.breakfast.energy.calorie();
            })
        };
        self.ration.dinner.energy = {
            protein:ko.computed(function () {
                return self.ration.getEnergy('dinner', 'protein');
            }),
            fat:ko.computed(function () {
                return self.ration.getEnergy('dinner', 'fat');
            }),
            carbo:ko.computed(function () {
                return self.ration.getEnergy('dinner', 'carbo');
            }),
            calorie:ko.computed(function () {
                return self.ration.getEnergy('dinner', 'calorie');
            })
        };
        self.ration.dinner.energyLeft = {
            protein:ko.computed(function () {
                return self.restriction.dinner.protein() - self.ration.dinner.energy.protein();
            }),
            fat:ko.computed(function () {
                return self.restriction.dinner.fat() - self.ration.dinner.energy.fat();
            }),
            carbo:ko.computed(function () {
                return self.restriction.dinner.carbo() - self.ration.dinner.energy.carbo();
            }),
            calorie:ko.computed(function () {
                return self.restriction.dinner.calorie() - self.ration.dinner.energy.calorie();
            })
        };
        self.ration.supper.energy = {
            protein:ko.computed(function () {
                return self.ration.getEnergy('supper', 'protein');
            }),
            fat:ko.computed(function () {
                return self.ration.getEnergy('supper', 'fat');
            }),
            carbo:ko.computed(function () {
                return self.ration.getEnergy('supper', 'carbo');
            }),
            calorie:ko.computed(function () {
                return self.ration.getEnergy('supper', 'calorie');
            })
        };
        self.ration.supper.energyLeft = {
            protein:ko.computed(function () {
                return self.restriction.supper.protein() - self.ration.supper.energy.protein();
            }),
            fat:ko.computed(function () {
                return self.restriction.supper.fat() - self.ration.supper.energy.fat();
            }),
            carbo:ko.computed(function () {
                return self.restriction.supper.carbo() - self.ration.supper.energy.carbo();
            }),
            calorie:ko.computed(function () {
                return self.restriction.supper.calorie() - self.ration.supper.energy.calorie();
            })
        };

        self.ration.totalEnergy = {
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
        self.ration.totalEnergyLeft = {
            protein:ko.computed(function () {
                return self.restriction.total.protein() - self.ration.totalEnergy.protein();
            }),
            fat:ko.computed(function () {
                return self.restriction.total.fat() - self.ration.totalEnergy.fat();
            }),
            carbo:ko.computed(function () {
                return self.restriction.total.carbo() - self.ration.totalEnergy.carbo();
            }),
            calorie:ko.computed(function () {
                return self.restriction.total.calorie() - self.ration.totalEnergy.calorie();
            })
        };


    };
    ko.applyBindings(new ViewModel(dishes));
});