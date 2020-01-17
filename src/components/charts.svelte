<script>
  //引入chartist 图表文件
  import Chartist from "chartist";
  import "../../node_modules/chartist/dist/chartist.min.css";
  //引入生命周期函数
  import { onMount } from "svelte";

  let data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };

  let options = {
    seriesBarDistance: 15
  };

  let responsiveOptions = [
    [
      "screen and (min-width: 641px) and (max-width: 1024px)",
      {
        seriesBarDistance: 12,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value;
          }
        }
      }
    ],
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 12,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ];

  onMount(async function() {
    await new Chartist.Bar(".ct-chart", data, options, responsiveOptions);
  });
</script>

<style type="text/scss">
  .app-container {
    .ct-series-a{
      /* Colour of your bars */
      /* stroke: red; */
      /* The width of your bars */
    /*   stroke-width: 20px; */
      /* Yes! Dashed bars! */
      /* stroke-dasharray: 20px; */
      /* Maybe you like round corners on your bars? */
     /*  stroke-linecap: round; */
    }
  }
</style>

<div class="app-container">

  <div id="charts" class="ct-chart ct-perfect-fourth ct-series-a" />

</div>
