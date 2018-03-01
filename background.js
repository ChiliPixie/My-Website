/*changes background according to SE-seasons*/
var d = new Date();
var month = d.getMonth() + 1;
var html = document.getElementsByTagName('html')[0];

if (month >= 3 && month <= 5) {
    html.classList.add('spring');
}
else if (month >= 6 && month <= 8) {
    html.classList.add('summer');
}
else if (month >= 9 && month <= 11) {
    html.classList.add('autumn');
}
else {
    html.classList.add('winter');
}
