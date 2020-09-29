import {
    gsap
} from "gsap";

export function flowerAnimation(){


var flowerSpeed = 0.7;

var tl = gsap.timeline({repeat: -1});

tl.to(".flower", {
    duration: flowerSpeed,
    color: "#ffa500",
    x: 20,
    rotate: 90,
    borderRadius: "100px"});

tl.to(".flower", {
    duration: flowerSpeed,
    color: "#973999",
    x: -10,
    rotate: -90,
    borderRadius: "100px"});

// tl.to(".flower", {
//     duration: flowerSpeed,
//     color: "#009CDF",
//     x: 5,
//     borderRadius: "100px"});

// tl.to(".flower", {
//     duration: flowerSpeed,
//     color: "#5EBD3E",
//     y: 1,
//     borderRadius: "100px"});
    
    return tl;

}