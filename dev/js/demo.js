console.log("demo");

import {
    gsap
} from "gsap";

console.log(gsap);



var heartSpeed = 0.7;

var starTimeline = gsap.timeline({repeat: -1});

starTimeline.to(".heart", {
    duration: heartSpeed,
    color: "#ffa500",
    x: 20,
    borderRadius: "100px"});

starTimeline.to(".heart", {
    duration: heartSpeed,
    color: "#973999",
    y: 20,
    borderRadius: "100px"});

starTimeline.to(".heart", {
    duration: heartSpeed,
    color: "#009CDF",
    x: -5,
    borderRadius: "100px"});

starTimeline.to(".heart", {
    duration: heartSpeed,
    color: "#5EBD3E",
    y: -1,
    borderRadius: "100px"});


