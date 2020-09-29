import {
    gsap
} from "gsap";

export function starAnimation(){


var starSpeed = 0.7;

var tl = gsap.timeline({repeat: -1});

tl.to(".star", {
    duration: starSpeed,
    color: "#ffa500",
    x: -20,
    rotate: -90,
    borderRadius: "100px"});

tl.to(".star", {
    duration: starSpeed,
    color: "#973999",
    x: 10,
    rotate: 90,
    borderRadius: "100px"});
    
    return tl;

}