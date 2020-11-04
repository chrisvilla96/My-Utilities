/**
  Es una simple función para actualizar todos los precios de un producto en la
  tienda de one.com
  Se pega en la consola del navegador, y al llamarlo es necesario un parámetro,
  que es el nuevo precio de todos los productos.
**/
const changeAllProductPricesInOne = (price) => {
    let editableElements = []

    document.querySelectorAll("div.editable-field.clearfix").forEach((item, index) => {
        if(index%2 != 0) {
            editableElements.push(item)
        }
    })
    // Pasos a seguir por item

    editableElements.forEach((item) => {
        item.click()
        document.querySelector(".field.textSmall").value = price
        document.querySelector("body").click()
    })

    document.querySelector(".btn-save").click()
}
