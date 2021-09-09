import { LightningElement } from "lwc";
import SERVICE_DATA from "../../../data/servicesData";


export default class Services extends LightningElement{
    servicesData = []

    connectedCallback(){
        this.formateData()
    }

    formateData(){
        this.servicesData = SERVICE_DATA.map(item => {
            let className= `icon ${item.color}`
            return {...item, className}
        })
    }
}