const dados = {
  labels: ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"],
  valores: [30, 20, 20, 20, 10]
};

// Gráfico de Pizza
new Chart(document.getElementById("graficoPiza"), {
  type: "pie",
  data: {
    labels: dados.valores,
    dataset: [{
      data: dados.labels,
      backgroundColor: ["#ff00d4ff", "#0099ffff", "#ffb701ff", "#03fc0cff", "#f50f0fff"]
    }]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        labels:{
          color:'#000000ff'
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let total = dados.valores.reduce((a, b) => a + b, 0);
            let valor = context.raw;
            let porcentagem = ((valor / total) * 100).toFixed(1);
            return `${context.label}: ${porcentagem}%`;
          }
        }
      }
    }
  }
});

// Gráfico de Barras
new Chart(document.getElementById("graficoBarras"), {
  type: "bar",
  data: {
    labels: dados.labels,
    dataset: [{
      label: "Distribuição (%)",
      data: dados.valores,
      backgroundColor: "#0f1c8fff"
  options: {
    }]
  },
    responsive: false,
    plugins:{
      legend:{
        display: false,
        labels:{
          color: '#000000ff'
        }
      }
    },
    scales: {
      y: {
        min: -10,
        max: 100,
        ticks:{
          color:'#000000ff'
        },
        grid:{
          color: '#000000ff'
        }
      },
      x: {
          ticks:{
            color:'#000000ff'
          },
          grid:{
            display: false,
          }
      }
    }
  }
});

