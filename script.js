const cartas = {
  Ana: { forca: 60, velocidade: 40, inteligencia: 40 },
  Elisa: { forca: 50, velocidade: 60, inteligencia: 60 },
  Clara: { forca: 40, velocidade: 80, inteligencia: 50 },
  Diego: { forca: 30, velocidade: 30, inteligencia: 70 },
  Guilherme: { forca: 70, velocidade: 50, inteligencia: 90 }
};

function verificar() {
  const atributo = document.getElementById('atributo').value;
  const palpite = document.getElementById('palpite').value;

  let maiorValor = -1;
  let vencedor = '';

  for (let nome in cartas) {
    if (cartas[nome][atributo] > maiorValor) {
      maiorValor = cartas[nome][atributo];
      vencedor = nome;
    }
  }

  const resultado = document.getElementById('resultado');
  if (palpite === vencedor) {
    resultado.innerHTML = `✅ Correto! <strong>${vencedor}</strong> tem o Super Trunfo em "${atributo}".`;
    resultado.className = 'resultado correto';
  } else {
    resultado.innerHTML = `❌ Errado! O Super Trunfo nesse atributo é <strong>${vencedor}</strong>.`;
    resultado.className = 'resultado errado';
  }
}
