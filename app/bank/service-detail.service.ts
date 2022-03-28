import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailService {

  constructor() { }
  bloodDetails = [
    {
      id:1,
      name:"Sherin",
      age:"30",
      units:"10 units in last 3 years",
      img:"https://media.istockphoto.com/photos/patient-receiving-a-blood-transfusion-picture-id1266746953?k=20&m=1266746953&s=612x612&w=0&h=7zwX0pL745ZHvFKjUpL86kG35zI1LhP8mvK58Ml5M6c="
          },
    {
      id:2,
      name:"Aaron",
      age:"35",
      units:"8 units in last 6 years",
      img:"https://media.istockphoto.com/photos/young-male-donor-donating-blood-during-coronavirus-pandemic-picture-id1307735181?k=20&m=1307735181&s=612x612&w=0&h=Kc7ibjTY-IAUOlpBpXCBe5pZyopChlOAnYMBV41xJpw="
      },
    {
      id:3,
      name:"Sheethal",
      age:"20",
      units:"7 units in last 4 years",
      img:"https://media.istockphoto.com/photos/young-woman-is-going-to-donate-blood-in-blood-bank-picture-id626838958?k=20&m=626838958&s=612x612&w=0&h=woJekpdryrdr-Sv1Xs9ChehaajJU2wI4Z6UtI4tq1CE="
    },
    {
      id:4,
      name:"Maruna",
      age:"34",
      units:"10 units in last 5 years",
      img:"https://media.istockphoto.com/photos/confident-businesswoman-passes-the-time-while-donating-blood-picture-id641911246?k=20&m=641911246&s=612x612&w=0&h=drEBsfWigGvQ13U8rEAfUs0UHGk3fLNveOLQctBBvEs="},
    { 
      id:5,
      name:"Niranya",
      age:"30",
      units:"9 units in last 3 years",
      img:"https://media.istockphoto.com/photos/masked-young-woman-happy-to-be-donating-blood-picture-id1336400992?k=20&m=1336400992&s=612x612&w=0&h=_BiIxFbIGUaNDWywWs2DBau6zZyRi4ITMsx2hL1P_4k="
    },
    {
      id:6,
      name:"Josh",
      age:"40",
      units:"10 units in last 4 years",
      img:"https://media.istockphoto.com/photos/young-man-on-blood-donation-at-medical-clinic-picture-id1340049713?k=20&m=1340049713&s=612x612&w=0&h=1WevR0jorhIuJ-V4Rpmc-V1w0h0blUHpIkkifGYcR3w="
    },
    {
      id:7,
      name:"keerthana",
      age:"40",
      units:"6 units in last 5 years",
      img:"https://media.istockphoto.com/photos/nurse-hooking-up-a-woman-for-blood-donation-picture-id1358515111?k=20&m=1358515111&s=612x612&w=0&h=wULo0TfXLFsAoUQZk9mf73wZcEW40CXGZ_VEW--IURU="
    },
    {
      id:8,
      name:"Monisha",
      age:"30",
      units:"3 units in last 8 years",
      img:"https://media.istockphoto.com/photos/experienced-phlebotomist-preparing-a-woman-for-blood-draw-picture-id1315395944?k=20&m=1315395944&s=612x612&w=0&h=Iw7PTcXUI5n-_S6dXy5ISMzhmMd-AHzorjveaMn4cRQ="
    }
  ]
}
