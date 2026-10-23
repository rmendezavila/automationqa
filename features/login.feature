Feature: Inicio de sesión

  Scenario: Validar los elementos de Login
    Given que abro la página Login
    Then veo el título The Internet
    And veo el encabezado Login Page
    And veo los campos Username y Password
    And veo el botón Login

  Scenario: Iniciar sesión con el usuario configurado
    Given que abro la página Login
    When ingreso mis credenciales configuradas
    And pulso Login
    Then accedo a Secure Area

  Scenario: Rechazar credenciales incorrectas
    Given que abro la página Login
    When ingreso credenciales incorrectas
    And pulso Login
    Then se muestra un mensaje de error
