function convertirCelsius(farenheit)
{
  var numeroFarenheit = document.getElementById('farenheit').value;
  numeroFarenheit = parseInt(numeroFarenheit);
  var celsius = document.getElementById('celsius');
  var resultado = 0;
  resultado = (numeroFarenheit - 32) * 5/9;
  celsius.value = resultado;
}

function convertirFarenheit(farenheit)
{
  var numeroCelsius = document.getElementById('celsius').value;
  numeroCelsius = parseInt(numeroCelsius);
  var farenheit = document.getElementById('farenheit');
  var resultado = 0;
  resultado = (numeroCelsius*9/5)+32;
  farenheit.value = resultado;
}
