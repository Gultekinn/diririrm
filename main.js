
let cars=[]


class Base{
    constructor(){
    this.Id=Id,
    this.isDelete=false,
    this.CreatedAt=new Date(),
    this.ModifiedAt=new Date()
    id++
    }
}
 class Car extends Base{
    constructor(Engine,Gear,Ban,Price,image,KM,Litr_per_KM,Brand,Model,Year){
    super()
       this.Engine=Engine,
       this.Gear=Gear,
       this.Ban=Ban,
       this.Price=Price,
       this.Image=image,
       this.KM=KM,
       this.Litr_per_KM=Litr_per_KM ,
       this.Brand=Brand,
       this.Model=Model,
       this.Year=Year
    }
 }


function addCar(Engine,Gear,Ban,Price,image,KM,Litr_per_KM,Brand,Model,Year){
    let newCar=new Car (Engine,Gear,Ban,Price,image,KM,Litr_per_KM,Brand,Model,Year);
    cars.push(newCar);
    renderList(cars)

}
function renderList(array) {
    let innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const { Engine,Gear,Ban,Price,image,KM,Litr_per_KM,Brand,Model,Year  } = array[i];
        innerHTML +=`<div class="card">

        <div class="card__image">

            <img src="https://turbo.azstatic.com/uploads/f460x343/2023%2F04%2F11%2F14%2F42%2F53%2F4524cba4-7d5c-4fa2-8fe7-79c29bffd7b8%2F52788_ROKHcmSyPZdbcX707OGANg.jpg"
                alt="">
        </div>

        <h4>144 777$</h4>
        <p>toyota camry</p>
        <p>2023 4.0L 3.00KM</p>
        <div style="display: flex; gap: 10px;">
            <button class="btnn" style="width: 100px;">Delete</button>
            <button class="btnn" style="width: 100px;">Add</button>
        </div>

    </div>`}
    cardBody.innerHTML = innerHTML;
}