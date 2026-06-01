# SauceDemo - QA Automation & Bug Reporting

Este proyecto contiene la automatización de casos de prueba End-to-End (E2E) para el sitio web SauceDemo, desarrollada como parte de la **Clase N°5** del curso de QA Automation. 

Además de los scripts de prueba, incluye la identificación y el reporte formal de bugs detectados durante la ejecución de escenarios negativos.

## Tecnologías Utilizadas
* **Cypress** (Framework de pruebas)
* **JavaScript** (Lenguaje de programación)
* **Trello** (Gestión y reporte de bugs)

## Estructura del Proyecto

Los tests fueron divididos en módulos independientes para garantizar su escalabilidad y correcta ejecución:

* `login.cy.js`: Validaciones de acceso exitoso, credenciales inválidas, campos vacíos y usuarios bloqueados.
* `inventario.cy.js`: Verificación de carga de productos y validación del ordenamiento por precio.
* `carrito.cy.js`: Flujo de agregar y eliminar productos del carrito de compras.
* `checkout.cy.js`: Validación de campos obligatorios y flujo completo de finalización de compra.

## Reporte de Bugs (Trello)

Durante las pruebas exploratorias y la revisión de casos de prueba con el usuario `problem_user`, se detectaron y reportaron 3 bugs críticos que afectan el inventario y el proceso de checkout.

🔗 **[Ver tablero de Trello con los reportes de bugs detallados]([https://trello.com/b/24eK7sC9/saucedemo-actividad])**