import palette from 'theme/palette';

export const data = {
  labels: ['1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov', '6 Nov'],
  datasets: [
    {
      label: 'This year',
      backgroundColor: palette.primary.main,
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'Last year',
      backgroundColor: palette.neutral,
      data: [11, 20, 12, 29, 30, 25, 13]
    }
  ]
};

// export const data = {
//   labels: ['1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov', '6 Nov'],
//   datasets: [
//     {
//       label: 'This year',
//       backgroundColor: palette.primary.main,
//       data: Array(7).fill().map(() => Math.round(Math.random() * 30))
//     },
//     {
//       label: 'Last year',
//       backgroundColor: palette.neutral,
//       data: Array(7).fill().map(() => Math.round(Math.random() * 30))
//     }
//   ]
// };

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};
