<script>
import { Bar } from 'vue-chartjs'
import { h as createElement } from 'vue'

export default {
  name: 'BarChart',

    extends: Bar,

    data(){
        return{
            chartData: {
                labels: ["2019","2020","2021","2022","2023","2024"],
                datasets:[{
                    label: 'Bar Chart',
                    borderWidth:1,
                    data: [12,19,3,8,4,16]

                }]
            }

        }
    },
    mounted() {
        this.renderChart(this.chartData)
    },
    render: function () {
    return createElement(
      'div', {
        style: this.styles,
        class: this.cssClasses
      },
      [
        createElement(
          'canvas', {
            id: this.chartId,
            ref: 'canvas'
          }
        )
      ]
    )
  },
}
</script>

<style>

</style>