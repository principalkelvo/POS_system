<script>
import { Bar } from 'vue-chartjs'
export default {
    extends: Bar,
    data(){
        return{
            chartData: {
                labels: ["2019","2020","2021","2022","2023","2024"],
                datasets:[{
                    label: 'Bar Chart',
                    borderWidth:1,
                    data: [12,19,3,8,4,12,13,1,6,5,9,11,7]

                }]
            }

        }
    },
    mounted() {
        this.renderChart(this.chartData)
    },
}
</script>

<style>

</style>