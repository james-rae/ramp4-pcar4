const s=(e,a,t)=>{const i={name:"Bailley ESRIfied GRD",id:"Bailley",layerType:"esri-map-image",url:"https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/CESI_Temp/MapServer",state:{opacity:.95},sublayers:[{index:0,name:"2022 GRD Source",fixtures:{details:{template:"RasterGRD"}}}]};return t.addLayerLegend(i),{config:e,options:a}},l=(e,a)=>{e.$element.component("RasterGRD",{props:["identifyData"],data(){return{result:{value:""},loaded:!1,watchers:[]}},template:`
            <div>
                <div v-if="this.loaded" >
                 
                
                    <h3>Cell Value: {{this.result.value}}</h3>
                    <hr />
                    <span>Trend Value: 1.2</span>
                    
                    <hr />
                    <h4>Historic Values</h4>
                    <ul>
                        <li>2022 --&gt; 1.4</li>
                        <li>2021 --&gt; 1.2</li>
                        <li>2020 --&gt; 1.2</li>
                        <li>2019 --&gt; 1.0</li>
                    </ul>
                </div>
                <p v-else>Loading...</p>
            </div>
        `,created(){this.watchers.push(this.$watch("identifyData",()=>{this.parseData()})),this.parseData()},beforeUnmount(){this.watchers.forEach(t=>t())},methods:{async parseData(){this.loaded=!1,await this.identifyData.loading,this.result={value:this.identifyData.data.pixel},this.loaded=!0}}})};export{l as runPostTest,s as runPreTest};
