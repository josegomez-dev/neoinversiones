document.addEventListener("DOMContentLoaded", function() {
  const quotes = [
      "La inversión inteligente es la clave para un futuro financiero seguro.",
      "Invertir en bienes raíces es una de las formas más seguras de crecer tu patrimonio.",
      "La asesoría financiera adecuada puede transformar tus sueños en realidad.",
      "El mercado inmobiliario ofrece oportunidades únicas para inversores visionarios.",
      "Una inversión bien planificada es el primer paso hacia la libertad financiera.",
      "Con nuestra asesoría, tu dinero trabajará por ti."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote").innerText = randomQuote;
});
