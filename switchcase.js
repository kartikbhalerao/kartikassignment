document.write("Hotel menu <br>")
document.write("1.Veg menu 2.Non-veg menu 3.Dessert 4.Drinks <br>")
ch=parseInt(prompt("Enter your menu order"))
switch(ch){
case 1:
    document.write("Veg menu")
    break
    case 2:
    document.write("Non-veg menu")
    break
    case 3:
    document.write("Dessert")
    break
    case 4:
    document.write("Drinks")
    default:
        document.write("menu is not available")
}
