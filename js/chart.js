    const ctx = document.getElementById('spendingChart').getContext('2d');
    const spendingChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Income',
            data: [1200, 1500, 1800, 1400, 1700, 1600, 1900, 2200, 2100, 2300, 2500, 2700],
            backgroundColor: 'rgba(0, 184, 148, 0.7)',
            borderRadius: 6,
          },
          {
            label: 'Expenses',
            data: [900, 800, 1000, 950, 1100, 900, 1200, 1300, 1400, 1350, 1400, 1450],
            backgroundColor: 'rgba(225, 112, 85, 0.7)',
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            labels: {
              color: '#636e72',
              font: {
                weight: '600',
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#636e72',
              font: { weight: '200' },
            },
            grid: {
              color: '#f1f2f6',
            },
          },
          x: {
            ticks: {
              color: '#636e72',
              font: { weight: '200' },
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
