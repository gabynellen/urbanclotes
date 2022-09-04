E-commerce Urban Clotes
es una app hecha en react.js

esta compuesta por las librerías:
-React Router: 6.3.
-Boostrap: 5.1.
-React Dom: 18.2.
-FontAwesome: 6.1.

se puede iniciar el proyecto con el comando : "npm start".

al inicio se muestra un navbar con sus modulos en este caso, tipo de prendas y una vista de todos los productos con un minimo detalle, al cliquear en el cualquier card en el "ver detalle",
este te redirige a la vista del producto mas detallado con la opcion de agregar al carro de compras, en el navbar al clickear en los tipos de prendas este te redirecciona a los item que
correspondan filtrandolas por tipo. En el caso de agregar productos al carrito puede clickear el link dentro de la imagen o en el carrito al costado superior derecho, ahi se van a visualizar los productos antes de generar el pedido, en caso de que la cantidad de productos sea la esperada, oprimir "Generar Orden" este boton lo redidecciona al ultimo paso donde debe agregar sus datos y por ultimo generar la orden.

observaciones:  no se utilizó el fetcher por que al necesitar una funcion de callback no hizo falta, despues no pude modularizar el metodo que genera la orden de compra.
