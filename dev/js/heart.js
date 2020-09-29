import {
    gsap
} from "gsap";

export function heartAnimation(){


var heartSpeed = 0.7;

var tl = gsap.timeline({repeat: -1});

tl.to(".heart", {
    duration: heartSpeed,
    color: "#ffa500",
    y: 20,
    borderRadius: "100px"});

tl.to(".heart", {
    duration: heartSpeed,
    color: "#973999",
    y: -5,
    borderRadius: "100px"});

tl.to(".heart", {
    duration: heartSpeed,
    color: "#009CDF",
    rotate: 360,
    borderRadius: "100px"});
    
    return tl;

}