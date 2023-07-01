# Actividad 2

Realizar un servicio Web que cumpla los siguientes criterios:

- Se requiere una app que permita el armado de pizzas personalizadas.
- Se deberá contar tambien con la opción de tener pizzas o recetas preestablecidas.
- Se debe tomar en consideración que si se realizan pedidos los días martes y miércoles las pizzas son 2x1 y los días jueves el delivery es gratis.
- La aplicación debe cumplir con los principios S.O.L.I.D. y de ser favorable aplicar los patrones de diseño necesarios
---

## Endpoint de pizzas preestablecidas.

**METHOD GET**
```sh
localhost:3000/pizzas
```
**Preview**
```sh
[
    {
        "id": "1",
        "name": "Americana",
        "price": 50,
        "ingredients": {
            "base": "Normal",
            "souce": "Tomate",
            "cheese": "Muzzarella",
            "toppings": "Jamon"
        }
    },
    {
        "id": "2",
        "name": "4 Quesos",
        "price": 50,
        "ingredients": {
            "base": "Normal",
            "souce": "Tomate",
            "cheese": "Muzzarella",
            "toppings": "Jamon"
        }
    }
]
```

---
## Endpoint para crear pizzas personalizadas.

**METHOD POST**
```sh
localhost:3000/pizzas
```
**BODY**
```sh
{
    "name": "Barbacoa de carne",
    "sauce": "Tomate",
    "base": "Normal",
    "cheese": "Muzzarella",
    "toppings": "Carne molida y barbacoa"
}
```
**Preview**
```sh
[
    {
        "id": "1",
        "name": "Americana",
        "price": 50,
        "ingredients": {
            "base": "Normal",
            "souce": "Tomate",
            "cheese": "Muzzarella",
            "toppings": "Jamon"
        }
    },
    {
        "id": "2",
        "name": "4 Quesos",
        "price": 50,
        "ingredients": {
            "base": "Normal",
            "souce": "Tomate",
            "cheese": "Muzzarella",
            "toppings": "Jamon"
        }
    },
    {
        "id": "3",
        "name": "Barbacoa de carne",
        "price": 50,
        "ingredients": {
            "base": "Normal",
            "souce": "Tomate",
            "cheese": "Muzzarella",
            "toppings": "Carne molida y barbacoa"
        }
    }
]
```
---
## Endpoint para realizar orden.
**METHOD POST**
```sh
localhost:3000/order
```
**BODY** 

Para ingresar las ID de las pizzas debe estar separados por comas.
`"idPizzas": "1,1",`. Si es un solo id ingrese el id sin la coma `"idPizzas": "2",`

El formado de la fecha es: `DD-MM-YYYY : 30-06-2023`

**Orden con 1 producto**
```sh
{
    "idPizzas": "1",
    "date": "27-06-2023"
}
```
**Orden con 2 producto**
```sh
{
    "idPizzas": "1,1",
    "date": "27-06-2023"
}
```
**Preview**

Resultados de tipo de promo: `2x1`, `FreeDelivery`, `no apply`

```sh
{
    "promo": "2x1",
    "total": 65,
    "pizza": [
        {
            "id": "1",
            "name": "Americana",
            "price": 50,
            "ingredients": {
                "base": "Normal",
                "souce": "Tomate",
                "cheese": "Muzzarella",
                "toppings": "Jamon"
            }
        },
        {
            "id": "1",
            "name": "Americana",
            "price": 50,
            "ingredients": {
                "base": "Normal",
                "souce": "Tomate",
                "cheese": "Muzzarella",
                "toppings": "Jamon"
            }
        }
    ]
}
```

> si se ingresa un ID que no existe se obtendra una respuesta de tipo 404 con el mensaje ``Not found product``
> ```sh
> {
>     "response": {
>         "statusCode": 404,
>         "message": "Not found product",
>         "error": "Not Found"
>     },
>     "status": 404,
>     "options": {},
>     "message": "Not found product",
>     "name": "NotFoundException"
> }
>```
>