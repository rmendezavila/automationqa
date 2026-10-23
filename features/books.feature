Feature: Catálogo de libros

  Scenario: Validar la página de libros
    Given que abro el catálogo de libros
    Then veo el encabezado Book Store
    And veo el campo de búsqueda

  Scenario: Buscar un libro existente
    Given que abro el catálogo de libros
    When busco un título existente
    Then el libro aparece en los resultados

  Scenario: Buscar un libro inexistente
    Given que abro el catálogo de libros
    When busco un título que no existe
    Then se indica que no hay resultados
